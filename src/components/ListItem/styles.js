import styled from 'styled-components';

export const Item = styled.div`
    background-color: #ffffff;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    margin: 10px;
    width: 100%;

    @media screen and (min-width: 576px) {
        width: calc(50% - 22px);
    }
    
    @media screen and (min-width: 768px) {
        width: calc(33.3% - 22px);
    }
`;

export const ItemContent = styled.div`
    display: flex;
    padding: 15px;
`;

export const ItemInfo = styled.div`
    margin-left: 15px;
    width: 100%;
`;

export const Text = styled.div`
    line-height: 18px;
    width: 100%;

    &.title {
        text-transform: uppercase;
    }

    &.price {
        font-size: 14px;
    }
`;

export const TimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TimeInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProgressBar = styled.progress`
    border-radius: 5px;
    height: 5px;
    margin-top: 8px;
    max-width: 70px;

    &[value]::-webkit-progress-bar {
        background-color: #c4c4c4;
        border-radius: 5px;
    }
    
    &[value]::-webkit-progress-value {
        background-color: #ffcc01;
        border-radius: 5px;
    }
`;
