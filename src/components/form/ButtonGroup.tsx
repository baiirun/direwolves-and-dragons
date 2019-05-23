import React from "react";
import styled, { css } from "styled-components";

type Props = {
  isDeleteVisible: boolean;
  onSubmitClick: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  onDeleteClick: () => void;
  isLoading: boolean;
};

const ButtonGroup = ({
  isDeleteVisible,
  onSubmitClick,
  onDeleteClick,
  isLoading,
}: Props) => {
  return (
    <ButtonsContainer>
      <Button onClick={onSubmitClick} disabled={isLoading} type="button">
        Submit
      </Button>
      {isDeleteVisible ? (
        <DeleteButton
          onClick={onDeleteClick}
          disabled={isLoading}
          type="button"
        >
          Delete
        </DeleteButton>
      ) : null}
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
  width: 75px;
  cursor: pointer;

  background-color: transparent;
  border: none;
  outline: none;

  transition: 0.2s ease-out all;
`;

const Button = styled.button`
  ${BaseButton};
  background-color: #0070f3;
  box-shadow: 0 10px 20px hsla(0, 0%, 27%, 0.15),
    0 3px 6px hsla(0, 0%, 23%, 0.15);
  color: hsla(0, 0%, 100%, 1);

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
    background-color: hsla(348, 100%, 85%, 0.85);
  }
`;

export default ButtonGroup;
