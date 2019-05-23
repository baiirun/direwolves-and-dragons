import React from "react";
import styled from "styled-components";
import PartyCard from "./PartyCard";
import PlaceholderPartyCard from "./PlaceholderPartyCard";
import * as api from "../../api";
import { Party } from "../Types";

const PartiesContainer = () => {
  const [parties, setParties] = React.useState<Party[]>([]);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadParties = async () => {
      // Normally there would be more robust error handling here
      const newParties = await api.getParties();
      setParties(newParties);
    };

    if (isEditing === true) {
      const newPartyCardId = document.getElementById("new-party");
      if (newPartyCardId) {
        newPartyCardId.scrollIntoView({ behavior: "smooth" });
      }
    }

    loadParties();
  }, [isEditing]);

  // Normally this would be abstracted to a client-side API layer
  const createParty = async (newParty: Party) => {
    try {
      const party: Party = await api.createParty(newParty);
      const newParties = [...parties, party];

      setParties(newParties);
    } catch (e) {
      console.error(e);
    }
  };

  const submitEditedParty = async (updatedParty: Party) => {
    try {
      await api.submitEditedParty(updatedParty);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteParty = async (partyToDelete: Party) => {
    try {
      const deletedItem: Party = await api.deleteParty(partyToDelete);
      const newParties = parties.filter((p) => p.id !== deletedItem.id);
      setParties(newParties);
    } catch (e) {
      console.error(e);
    }
  };

  let partyCards = parties.map((party) => (
    <PartyCard key={party.id} party={party} />
  ));

  if (isEditing) {
    partyCards = parties.map((party) => (
      <PlaceholderPartyCard
        key={party.id}
        party={party}
        modifyPartyHandler={submitEditedParty}
        deletePartyHandler={deleteParty}
        type="edit"
      />
    ));
    partyCards = [
      ...partyCards,
      <PlaceholderPartyCard
        key={-1}
        modifyPartyHandler={createParty}
        deletePartyHandler={deleteParty}
        type="create"
      />,
    ];
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Parties</h1>
        <EditButton onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Close" : "Create/Edit Parties"}
        </EditButton>
      </HeaderContainer>
      <CardsContainer>{partyCards}</CardsContainer>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 840px;
  margin: 0 auto;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
`;

const EditButton = styled.button`
  position: relative;
  border-radius: 4px;
  z-index: 1;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
  }

  &:focus {
    outline: none;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    border-radius: 4px;
    background-color: #0070f3;
    opacity: 0.35;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.25s ease-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: center left;
  }
`;

export default PartiesContainer;
