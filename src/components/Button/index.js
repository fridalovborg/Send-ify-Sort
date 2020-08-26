import React from 'react';
import { ButtonWrapper, ButtonItem } from './styles';

const Button = (props) => {
    const { onClick, text, cost, active } = props;

    return (
        <ButtonWrapper>
            <ButtonItem
                cost={ cost }
                active={ active }
                onClick={ onClick }
            >
                { text }
            </ButtonItem>
        </ButtonWrapper>
    );
};
export default Button;
