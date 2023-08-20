import { render, screen } from '@testing-library/react';
import Home from './page';

import '@testing-library/jest-dom';

describe('Docs', () => {
  it('renders Docs heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Docs/i,
    });

    expect(heading).toBeInTheDocument();
  });


});
