import React from 'react';
import styled from 'styled-components';

type Party = {
    id: number;
    name: string;
    tagline: string;
    logoUrl: string;
    partyMembers: null;
};

const PartiesContainer = () => {
    const [parties, setParties] = React.useState<Party[]>([]);

    React.useEffect(() => {
        const loadParties = async () => {
            const response = await fetch('http://localhost:5000/api/party');
            const result: Party[] = await response.json();
            setParties(result);
        };

        loadParties();
    }, []);

    const partiesView = parties.map((party) => (
        <>
            <h2 key={party.id}>{party.name}</h2>
            <p>{party.tagline}</p>
        </>
    ));

    return (
        <Container>
            <Title>Parties</Title>
            {partiesView}
        </Container>
    );
};

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-content: center;

    max-width: 532px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-weight: 400;
`;

export default PartiesContainer;
