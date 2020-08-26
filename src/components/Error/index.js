import React from 'react';
import { ErrorMessage } from './styles';

const Error = (props) => {
    const { error } = props;

    return (
        <ErrorMessage error={ error }>
            The weather in Gothenburg could not load as expected. The lead time is not exactly!
        </ErrorMessage>
    );
};
export default Error;