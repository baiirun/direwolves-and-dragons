import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
    isDeleteVisible: boolean;
    onDeleteClick: () => void;
};

const ButtonGroup = ({ isDeleteVisible, onDeleteClick }: Props) => {
    return (
        <ButtonsContainer>
            <Button type='submit' value='Submit' />
            {isDeleteVisible ? <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton> : null}
        </ButtonsContainer>
    );
};

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 13px;
`;

const BaseButton = css`
    font-size: 0.8rem;
    margin-right: 6px;
    border-radius: 4px;
    padding: 6px 14px;
    cursor: pointer;

    background-color: transparent;
    border: none;
    outline: none;

    transition: 0.2s ease-out all;
`;

const Button = styled.input`
    ${BaseButton};
    background-color: #0070f3;
    box-shadow: 0 10px 20px hsla(0, 0%, 27%, 0.15), 0 3px 6px hsla(0, 0%, 23%, 0.15);
    color: #fff;

    &:hover,
    &:active,
    &:focus {
        transform: translateY(-1px);
    }
`;

const DeleteButton = styled.button`
    ${BaseButton}
    margin-right: 0;

    &:hover,
    &:active,
    &:focus {
        color: hsla(348, 100%, 25%, 1);
        /* background-color: rgba(0, 118, 255, 0.1); */
        background-color: hsla(348, 100%, 85%, 0.85);
    }
`;

export default ButtonGroup;
