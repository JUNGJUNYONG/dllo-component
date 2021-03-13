import React, { ReactElement } from 'react';
import CSS from 'csstype';

type props = {
  children: ReactElement | Element | null;
};

export const Panel: React.FC = ({ children }: props) => {
  const css: CSS.Properties = {
    display: 'flex',
  };

  return <div style={css}>{children}</div>;
};
