import React, { useState } from 'react';
import CSS from 'csstype';
export const Panel:React.FC = ({children}) => {
    const css: CSS.Properties = {
        display: 'flex'
    };
    return (
        <div style={css}>
            {children}
        </div>
    );
};


