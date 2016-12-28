/// <reference types="react" />
import React from 'react';
interface Props {
    data: any;
    value?: Array<string | number>;
    format?: (values) => void;
    cols?: number;
    extra?: string;
    dismissText?: string | React.ReactElement<any>;
    okText?: string | React.ReactElement<any>;
    title?: string | React.ReactElement<any>;
    children: any;
    /** web only */
    prefixCls?: string;
    pickerPrefixCls?: string;
    popupPrefixCls?: string;
    onPickerChange?: (values) => void;
}
export default Props;
