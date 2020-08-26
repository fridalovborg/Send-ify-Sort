import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: inline-block;
`;

export const ButtonItem = styled.button`
    background-color: ${ props => props.active ? '#d9d9d9' : '#eaeaea' };
    border: 0;
    border-top-left-radius: ${props => props.cost ? '6px' : '0'};
    border-bottom-left-radius: ${props => props.cost ? '6px' : ''};
    border-top-right-radius: ${props => props.cost ? '0' : '6px'};
    border-bottom-right-radius: ${props => props.cost ? '0' : '6px'};
    font-size: 11px;
    font-weight: bold;
    margin: 0 0 0 ${props => props.cost ? '10px' : '0'};
    padding: 10px 15px;
`;