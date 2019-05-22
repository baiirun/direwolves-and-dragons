import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Character, Party } from '../Types';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

type Params = {
    id: string;
};

const CharactersContainer = (props: RouteComponentProps<Params>) => {
    const [characters, setCharacters] = React.useState<Character[]>([]);
    const { id: partyId } = props.match.params;

    // Technically we have this data already in `PartiesContainer`, but we want
    // to fetch it here instead of passing down props in the case that a user
    // comes to this route directly. If they come directly and we _don't_ fetch,
    // then the data won't exist in the location.state prop and nothing will render.
    React.useEffect(() => {
        const getPartyCharacters = async () => {
            // Normally there would be more robust error handling here
            const response = await fetch(`http://localhost:5000/api/party/${partyId}`);
            const result: Party = await response.json();
            setCharacters(result.characters);
        };

        getPartyCharacters();
    }, [partyId]);

    /**
     * TODO:
     * Change to placeholder cards if we are in edit mode
     * Do the same edit/submit/delete workflow as the parties
     */

    const Characters = characters.map((character) => <CharacterCard character={character} />);

    return (
        <Container>
            <HeaderContainer>
                <h1>Characters</h1>
                <EditButton>Create/Edit Characters</EditButton>
            </HeaderContainer>
            <CardsContainer>{Characters}</CardsContainer>
        </Container>
    );
};

const Container = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 1070px;
    margin: 0 auto;
`;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-self: center;
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
        content: '';
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

export default CharactersContainer;
