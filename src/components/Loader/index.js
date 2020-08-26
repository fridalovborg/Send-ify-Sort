import React from 'react';
import { LoaderContent, LoaderInnerContent, Text } from './styles';

const Loader = (props) => {
    const { loader } = props;

    return (
        <LoaderContent loader={ loader }>
                <Text>Loading Weather</Text>
                <LoaderInnerContent />
        </LoaderContent>
    );
};
export default Loader;
