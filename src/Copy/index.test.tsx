import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Copy from './index';

describe('<Copy />', () => {
  it('render Copy component', () => {
    const msg = '欢迎使用 Mextend-ui';
    const copyCallback = () => {
      console.log('复制成功');
    };

    render(<Copy value={msg} style="" btnText="复制" className="copy" onClick={copyCallback()} />);
    // waitFor(() => expect(screen.queryByText('copy')).toBeInTheDocument());
  });
});
