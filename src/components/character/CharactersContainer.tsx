import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Character, Party } from '../Types';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import PlaceholderCharacterCard from './PlaceholderCharacterCard';
import * as api from '../../api';

type UrlParams = {
    id: string;
};

const CharactersContainer = (props: RouteComponentProps<UrlParams>) => {
    const [partyName, setPartyName] = React.useState<string>('');
    const [characters, setCharacters] = React.useState<Character[]>([]);
    const [isEditing, setIsEditing] = React.useState<boolean>(false);

    const { id: partyId } = props.match.params;

    // Technically we have this data already in `PartiesContainer`, but we want
    // to fetch it here instead of passing down props in the case that a user
    // comes to this route directly. If they come directly and we _don't_ fetch,
    // then the data won't exist in the location.state prop and nothing will render.
    React.useEffect(() => {
        const getPartyCharacters = async () => {
            // Normally there would be more robust error handling here
            const newParty = await api.getParty(partyId);
            setPartyName(newParty.name);
            setCharacters(newParty.characters);
        };

        getPartyCharacters();
    }, [partyId, isEditing]);

    const createCharacter = async (newCharacter: Character) => {
        try {
            const newCharacterWithParty = newCharacter;
            newCharacterWithParty.partyId = parseInt(partyId);
            const character = await api.createCharacter(newCharacter);
            const newCharacters = [...characters, character];

            setCharacters(newCharacters);
        } catch (e) {
            console.error(e);
        }
    };
    const submitEditedCharacter = async (updatedCharacter: Character) => {
        try {
            await api.submitEditedCharacter(updatedCharacter);
        } catch (e) {
            console.error(e);
        }
    };
    const deleteCharacter = async (characterToDelete: Character) => {
        try {
            const deletedItem: Party = await api.deleteCharacter(characterToDelete);
            const newCharacters = characters.filter((p) => p.id !== deletedItem.id);
            setCharacters(newCharacters);
        } catch (e) {
            console.error(e);
        }
    };

    let characterCards = characters.map((character) => <CharacterCard key={character.id} character={character} />);

    if (isEditing) {
        characterCards = characters.map((character) => (
            <PlaceholderCharacterCard
                key={character.id}
                character={character}
                type='edit'
                modifyCharacterHandler={submitEditedCharacter}
                deleteCharacterHandler={deleteCharacter}
            />
        ));

        // Set an artbirary limit on 4 characters per party
        if (characterCards.length < 4) {
            characterCards = [
                ...characterCards,
                <PlaceholderCharacterCard
                    key={-1}
                    type='create'
                    modifyCharacterHandler={createCharacter}
                    deleteCharacterHandler={deleteCharacter}
                />,
            ];
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <h1>
                    {partyName} <span>Characters</span>
                </h1>
                <EditButton onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? 'Close' : 'Create/Edit Characters'}
                </EditButton>
            </HeaderContainer>
            <CardsContainer>{characterCards}</CardsContainer>
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

    span {
        font-weight: 300;
    }
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
