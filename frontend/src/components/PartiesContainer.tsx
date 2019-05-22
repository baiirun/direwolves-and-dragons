import React from 'react';
import styled from 'styled-components';
import PartyCard from './PartyCard';
import { Party } from './Types';
import PlaceholderPartyCard from './PlaceholderPartyCard';
import * as api from '../api';

const PartiesContainer = () => {
    const [parties, setParties] = React.useState<Party[]>([]);
    const [isEditing, setIsEditing] = React.useState<boolean>(false);

    React.useEffect(() => {
        const loadParties = async () => {
            // Normally there would be more robust error handling here
            const response = await fetch('http://localhost:5000/api/party');
            const result: Party[] = await response.json();
            setParties(result);
        };

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

    const submitEditedParty = async (newParty: Party) => {
        try {
            await api.submitEditedParty(newParty);
        } catch (e) {
            console.error(e);
        }
    };

    const deleteParty = async (newParty: Party) => {
        try {
            const deletedItem: Party = await api.deleteParty(newParty);
            const newParties = parties.filter((p) => p.id !== deletedItem.id);
            setParties(newParties);
        } catch (e) {
            console.error(e);
        }
    };

    let partyCards = parties.map((party) => <PartyCard key={party.id} party={party} />);

    if (isEditing) {
        partyCards = parties.map((party) => (
            <PlaceholderPartyCard
                party={party}
                modifyPartyHandler={submitEditedParty}
                deletePartyHandler={deleteParty}
                type='edit'
            />
        ));
        partyCards = [
            ...partyCards,
            <PlaceholderPartyCard
                key='Placeholder card'
                modifyPartyHandler={createParty}
                deletePartyHandler={deleteParty}
                type='create'
            />,
        ];
    }

    return (
        <Container>
            <HeaderContainer>
                <h1>Parties</h1>
                <EditButton onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? 'Close' : 'Create/Edit Parties'}
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

    max-width: 1400px;
`;

const EditButton = styled.button`
    position: relative;
    border-radius: 4px;
    z-index: 1;
    font-size: 1rem;
    font-weight: 600;
    padding: 8px 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
    }

    &:focus {
        outline: none;
    }

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: -0.25em;
        right: -0.25em;
        border-radius: 4px;
        background-color: hsla(341, 97%, 59%, 0.75);
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
