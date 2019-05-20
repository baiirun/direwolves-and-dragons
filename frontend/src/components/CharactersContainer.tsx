import React from "react";
import { RouteComponentProps } from "react-router";
import { Character, Party } from "./Types";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

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
      const response = await fetch(
        `http://localhost:5000/api/party/${partyId}`,
      );
      const result: Party = await response.json();
      setCharacters(result.characters);
    };

    getPartyCharacters();
  }, [partyId]);

  const Characters = characters.map((character) => (
    <CharacterCard character={character} />
  ));

  return <Container>{Characters}</Container>;
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
`;

export default CharactersContainer;
