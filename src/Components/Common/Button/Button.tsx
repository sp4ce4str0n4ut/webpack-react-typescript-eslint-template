import React from 'react';
import './Button.scss';

export interface ICommonButton {
    text: string;
    onClick?: (e?: React.MouseEvent) => void;
}

export const CommonButton = (props: ICommonButton): JSX.Element => (
    <div className="common-button__wrapper">
        <button className="common-button__content" onClick={props.onClick}>
            {props.text}
        </button>
    </div>
)
