/// <reference types="react" />
import React from 'react';
import ModalPropsType from './PropsType';
declare class AntmModal extends React.Component<ModalPropsType, any> {
    static defaultProps: {
        visible: boolean;
        closable: boolean;
        maskClosable: boolean;
        style: {};
        bodyStyle: {};
        animationType: string;
        onClose(): void;
        footer: never[];
        transparent: boolean;
        animateAppear: boolean;
        styles: {
            container: {
                justifyContent: string;
                alignItems: string;
            };
            innerContainer: {
                borderRadius: number;
                width: number;
                paddingTop: number;
                overflow: string;
            };
            footerRadius: {
                borderBottomLeftRadius: number;
                borderBottomRightRadius: number;
            };
            header: {
                fontSize: number;
                color: string;
                textAlign: string;
                paddingHorizontal: number;
            };
            body: {
                paddingTop: number;
                paddingBottom: number;
                paddingHorizontal: number;
            };
            maskClosable: {
                position: string;
                top: number;
                bottom: number;
                left: number;
                right: number;
                backgroundColor: string;
            };
            closeWrap: {
                position: string;
                top: number;
                left: number;
            };
            close: {
                fontSize: number;
                fontWeight: string;
                color: string;
                lineHeight: number;
            };
            buttonGroupH: {
                flexDirection: string;
            };
            buttonGroupV: {
                flexDirection: string;
            };
            buttnWrapH: {
                borderColor: string;
                borderTopWidth: number;
                borderRightWidth: number;
                paddingVertical: number;
            };
            buttnWrapV: {
                borderTopWidth: number;
                borderColor: string;
                paddingVertical: number;
            };
            buttonText: {
                textAlign: string;
                color: string;
                fontSize: number;
                backgroundColor: string;
            };
        };
    };
    onMaskClose: () => void;
    render(): JSX.Element;
}
export default AntmModal;
