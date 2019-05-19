import React from 'react';
import styled from 'styled-components';
import PartyCard from './PartyCard';
import { Party } from './Types';

const PartiesContainer = () => {
    const [parties, setParties] = React.useState<Party[]>([]);

    React.useEffect(() => {
        const loadParties = async () => {
            // Normally there would be more robust error handling here
            const response = await fetch('https://localhost:5001/api/party');
            const result: Party[] = await response.json();
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

export default PartiesContainer;
