import React, { useState,Fragment} from 'react';
import CSS from 'csstype';

export const Container:React.FC = ({children}) => {
    const css: CSS.Properties = {
        display: 'flex'
    };
    return (
        <div className={'wrapper'} style={css}>
            {children}
        </div>
    );
};