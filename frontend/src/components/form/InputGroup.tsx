import React from 'react';
import styled from 'styled-components';

type Props = {
    label: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputGroup = (props: Props) => {
    return (
        <Container>
            <Label>{props.label}</Label>
            <Input placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 13px;
`;

const Label = styled.label`
    font-size: 0.6rem;
    margin-bottom: 6px;
`;

const Input = styled.input`
    font-size: 0.8rem;
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid hsla(0, 0%, 0%, 0.1);
    height: 30px;
    padding-left: 6px;
    padding-right: 6px;

    transition: 0.2s ease-out all;

    &:active,
    &:focus {
        outline: none;
        border: 1px solid hsla(0, 0%, 0%, 0.5);
    }
`;

export default InputGroup;
