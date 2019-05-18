import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Character, Party } from './Types';

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
            console.log(partyId);
            const response = await fetch(`https://localhost:5001/api/party/${partyId}`);
            const result: Party = await response.json();
            setCharacters(result.characters);
        };

        getPartyCharacters();
    }, [partyId]);

    return characters.map((character) => <h2>{character.name}</h2>);
};

export default CharactersContainer;
