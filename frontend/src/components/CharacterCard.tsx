import React from 'react';
import styled from 'styled-components';
import { Character } from './Types';

type Props = {
    character: Character;
};

const CharacterCard = ({ character }: Props) => {
    const characterDescription = `7th Level ${character.race} ${character.class}`;

    // Some functionality to add a 0 to the beginning of a value
    // that is less than 10. Helps things line up better and add some character
    // TODO: Memoization/effects?
    const strength = ('0' + character.strength).slice(-2).toString();
    const dexterity = ('0' + character.dexterity).slice(-2).toString();
    const constitution = ('0' + character.constitution).slice(-2).toString();
    const intelligence = ('0' + character.intelligence).slice(-2).toString();
    const wisdom = ('0' + character.wisdom).slice(-2).toString();
    const charisma = ('0' + character.charisma).slice(-2).toString();

    return (
        <Card>
            <TitleContainer>
                <img src={character.imageUrl} />
                <div>
                    <Name>{character.name}</Name>
                    <StatText>{characterDescription}</StatText>
                </div>
            </TitleContainer>
            <StatsContainer>
                <StatText>
                    <Stat>{strength} </Stat> Strength
                </StatText>
                <StatText>
                    <Stat>{dexterity} </Stat> Dexterity
                </StatText>
                <StatText>
                    <Stat>{constitution} </Stat> Constitution
                </StatText>
                <StatText>
                    <Stat>{intelligence} </Stat> Intelligence
                </StatText>
                <StatText>
                    <Stat>{wisdom} </Stat> Wisdom
                </StatText>
                <StatText>
                    <Stat>{charisma} </Stat> Charisma
                </StatText>
            </StatsContainer>
        </Card>
    );
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 275px;
    margin-bottom: 54px;
    margin-right: 27px;
    padding: 13px 27px;

    /* box-shadow: 0 10px 20px hsla(0, 0%, 27%, 0.08), 0 3px 6px hsla(0, 0%, 23%, 0.1); */

    img {
        border-radius: 50%;
        height: 90px;
        width: 90px;
        margin-right: 27px;
        object-fit: cover;
    }
`;

const TitleContainer = styled.header`
    display: flex;
    align-items: center;
`;

const Name = styled.h1`
    font-size: 2rem;
    line-height: 1.2rem;
    font-weight: 600;
    margin-bottom: 13px;
`;

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: 150px 150px;
    margin-left: 117px;
`;

const Stat = styled.span`
    font-size: 1.6rem;
    font-weight: 800;
    color: hsla(0, 0%, 0%, 0.84);
`;

const StatText = styled.p`
    color: hsla(0, 0%, 0%, 0.5);
    margin: 0;
    margin-bottom: 13px;
`;

export default CharacterCard;
