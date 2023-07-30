import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ScrollNumber from './index';

describe('<ScrollNumber />', () => {
  it('render ScrollNumber component', () => {
    render(<ScrollNumber />);
    // waitFor(() => expect(screen.queryByText()).toBeInTheDocument());
  });
});
