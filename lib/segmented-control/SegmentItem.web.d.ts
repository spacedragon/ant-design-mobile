/// <reference types="react" />
import React from 'react';
declare class SegmentItem extends React.Component<any, any> {
    static defaultProps: {
        onClick(): void;
        selected: boolean;
    };
    render(): JSX.Element;
}
export default SegmentItem;
