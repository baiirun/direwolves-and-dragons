import React from 'react';
import styled from 'styled-components';
import PartyCard from './PartyCard';

export type Party = {
    id: number;
    name: string;
    tagline: string;
    logoUrl: string;
    characters: Character[];
};

export type Character = {
    id: number;
    name: string;
    race: Race;
    class: Class;
    imageUrl: string;
    health: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
};

export enum Race {
    Human,
    Dwarf,
    DeathKnight,
    Zombie,
    Giant,
    IceDragon,
}

export enum Class {
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard,
}

const PartiesContainer = () => {
    const [parties, setParties] = React.useState<Party[]>([]);

    React.useEffect(() => {
        const loadParties = async () => {
            const response = await fetch('https://localhost:5001/api/party');
            const result: Party[] = await response.json();
            console.log(result);
            setParties(result);
        };

        loadParties();
    }, []);

    const partyCards = parties.map((party) => <PartyCard party={party} />);

    return (
        <Container>
            <CardsContainer>{partyCards}</CardsContainer>
        </Container>
    );
};

const Container = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
`;

const CardsContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 1400px;
`;

const Title = styled.h1`
    font-weight: 400;
`;

export default PartiesContainer;
