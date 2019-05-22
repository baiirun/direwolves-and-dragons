import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Party, Character } from '../Types';

type Props = {
    party: Party;
};

const PartyCard = ({ party }: Props) => {
    const characters = party.characters.map((character: Character) => (
        <CharacterAvatar key={character.id} src={character.imageUrl} />
    ));

    return (
        <Card to={{ pathname: `/party/${party.id}`, state: party }}>
            <PartyLogo src={party.logoUrl} />
            <BottomContainer>
                <TitleContainer>
                    <h4>{party.name}</h4>
                    <p>{party.tagline}</p>
                </TitleContainer>
                <AvatarsContainer>{characters}</AvatarsContainer>
            </BottomContainer>
        </Card>
    );
};

const Card = styled(Link)`
    border-radius: 4px;
    box-shadow: 0 10px 20px hsla(0, 0%, 27%, 0.08), 0 3px 6px hsla(0, 0%, 23%, 0.1);
    margin-right: 27px;
    margin-bottom: 54px;
    width: 250px;
    min-height: 300px;
    transition: 0.15s ease-out all;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 16px 32px hsla(0, 0%, 0%, 0.1), 0 3px 12px hsla(0, 0%, 15%, 0.05);
    }

    h4 {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.2rem;
        margin: 0;
        margin-bottom: 6px;
    }

    p {
        font-size: 14px;
        font-style: italic;
        color: hsla(0, 0%, 0%, 0.5);
        margin: 0;
    }
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    margin: 6px 18px;
`;

const TitleContainer = styled.header`
    display: flex;
    flex-direction: column;
`;

const PartyLogo = styled.img`
    border-radius: 4px 4px 0 0;
    width: 250px;
    height: 180px;

    object-fit: cover;
`;

const AvatarsContainer = styled.div`
    display: flex;
`;

const CharacterAvatar = styled.img`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: -12px;
    border: 3px solid #fff;
    object-fit: cover;
`;

export default PartyCard;
