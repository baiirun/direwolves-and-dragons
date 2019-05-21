import React from 'react';
import styled from 'styled-components';

type Props = {
    label: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputGroup = (props: Props) => {
    return (
        <Container>
            <Label>{props.label}</Label>
            <Input type={props.type} value={props.value} onChange={props.onChange} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 13px;
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: 400;
`;

const Input = styled.input`
    font-size: 0.8rem;
    padding: 2px 4px;
`;

export default InputGroup;
