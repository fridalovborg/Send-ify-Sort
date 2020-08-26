import styled, { css, keyframes } from 'styled-components';

const pulseBlob = keyframes`
    0% {
        background-color: #ffa500;
        transform: translate(-50%,-50%) scale(0.95);
    }
    100% {
        background-color: #ffcc01;
        transform: translate(-50%,-50%) scale(1);
    }
`;

const centerItem = css`
    left: 50%;
    position: absolute;
    top: 50%;
`;

export const LoaderContent = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
    display: ${props => props.loader ? 'none' : 'block'};
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`;

export const LoaderInnerContent = styled.div`
    animation: ${pulseBlob} 0.6s infinite alternate;
    background-color: #d8d8d8;
    border-radius: 50%;
    height: 110px;
    ${centerItem}
    transform: translate(-50%,-50%) scale(1);
    width: 110px;
    z-index: 10;
`;

export const Text = styled.p`
    margin: 0;
    ${centerItem}
    transform: translate(-50%,-50%);
    width: auto;
    z-index: 20;
`;
