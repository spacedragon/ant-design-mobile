/// <reference types="react" />
import React from 'react';
export interface ToastProps {
    content: string;
    duration?: number;
    onClose?: () => void;
    type?: string;
    onAnimationEnd?: () => void;
    styles?: any;
}
export default class ToastContainer extends React.Component<ToastProps, any> {
    static defaultProps: {
        duration: number;
        onClose(): void;
        styles: {
            container: {
                position: string;
                top: number;
                left: number;
                bottom: number;
                right: number;
                backgroundColor: string;
            };
            innerContainer: {
                flex: number;
                justifyContent: string;
                alignItems: string;
                backgroundColor: string;
            };
            innnerWrap: {
                alignItems: string;
                backgroundColor: string;
                minWidth: number;
            };
            iconToast: {
                borderRadius: number;
                padding: number;
            };
            textToast: {
                borderRadius: number;
                paddingVertical: number;
                paddingHorizontal: number;
            };
            content: {
                color: string;
                fontSize: number;
            };
            image: {
                width: number;
                height: number;
                marginBottom: number;
            };
            centering: {
                alignItems: string;
                justifyContent: string;
                padding: number;
            };
        };
    };
    anim: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
