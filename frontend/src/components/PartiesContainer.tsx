import React from 'react';
import styled from 'styled-components';
import PartyCard from './PartyCard';
import { Party } from './Types';
import PlaceholderPartyCard from './PlaceholderPartyCard';

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
    }, []);

    const handleEditing = () => {
        setIsEditing(!isEditing);
    };

    // TODO: Create handler for creating a new party
    const createParty = async () => {
        const party: Party = {
            name: 'Testing Post',
            tagline: 'Testing Post Oh yeah',
            logoUrl: '',
            characters: [],
        };

        const response = await fetch('http://localhost:5000/api/party', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(party),
        });

        const result: Party = await response.json();
        const newParties = [...parties, result];

        setParties(newParties);
    };

    const partyCards = parties.map((party) => <PartyCard party={party} />);

    if (isEditing) {
        // TODO: Pass handler for creating a new party
        partyCards.push(<PlaceholderPartyCard />);
    }

    return (
        <Container>
            <HeaderContainer>
                <h1>Parties</h1>
                <EditButton onClick={createParty}>Create Team</EditButton>
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
