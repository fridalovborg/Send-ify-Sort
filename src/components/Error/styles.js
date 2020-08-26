import styled from 'styled-components';

export const ErrorMessage = styled.div`
    display: ${props => props.error ? 'block' : 'none'};
    margin: 15px 10px 10px;
`;
