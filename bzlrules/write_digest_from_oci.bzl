"""Rule that takes in an oci_image target and outputs the sha digest to a file
"""
def _write_digest_from_oci_impl(ctx):
    input_file = ctx.file.input
    out_file = ctx.actions.declare_file("%s" % ctx.attr.name)
    yq_bin = ctx.toolchains["@aspect_bazel_lib//lib:yq_toolchain_type"].yqinfo.bin
    ctx.actions.run_shell(
        tools = [yq_bin],
        outputs = [out_file],
        inputs = [input_file],
        arguments = [input_file.path ,out_file.path],
        command = "%s eval '.manifests[0].digest' %s/index.json > %s"  % (yq_bin.path, "$1", "$2")
    )
    return [DefaultInfo(files = depset([out_file]))]
    
write_digest_from_oci = rule(
    implementation = _write_digest_from_oci_impl,
    attrs = {
        "input": attr.label(
            mandatory = True,
            doc = "The file to transform",
            allow_single_file = True
        ),
        "output": attr.output(doc = "The digest"),
    },
    toolchains = ["@aspect_bazel_lib//lib:yq_toolchain_type"],
    doc = "Extracts the digest from index.json that is generated from an oci_image target"
)