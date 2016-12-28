/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class Picker extends React.Component<tsPropsType, any> {
    static defaultProps: {
        format: (values: any) => any;
        cols: number;
        value: never[];
        extra: string;
        okText: string;
        dismissText: string;
        title: string;
        styles: {
            modal: {
                flex: number;
                flexDirection: string;
                justifyContent: string;
            };
            header: {
                height: number;
                alignItems: string;
                flexDirection: string;
                justifyContent: string;
                borderBottomWidth: number;
                borderBottomColor: string;
            };
            headerItem: {
                height: number;
                flex: number;
                alignItems: string;
                justifyContent: string;
            };
            actionText: {
                color: string;
                fontSize: number;
                textAlign: string;
            };
            title: {
                color: string;
                fontSize: number;
                textAlign: string;
            };
        };
    };
    getSel: () => void;
    render(): JSX.Element;
}
