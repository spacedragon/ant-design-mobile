/// <reference types="react" />
import React from 'react';
import tsProps from './PropsType';
declare class Button extends React.Component<tsProps, any> {
    static defaultProps: {
        prefixCls: string;
        size: string;
        inline: boolean;
        across: boolean;
        disabled: boolean;
        loading: boolean;
    };
    render(): JSX.Element;
}
export default Button;
