/// <reference types="react" />
import React from 'react';
declare class Item extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
        disabled: boolean;
    };
    static myName: string;
    render(): JSX.Element;
}
export default Item;
