import React from 'react';
import styled from 'styled-components';
import InputGroup from '../form/InputGroup';
import ButtonGroup from '../form/ButtonGroup';
import { Character } from '../Types';

type Props = {
    character?: Character;
    type: 'create' | 'edit';
    modifyCharacterHandler: (newCharacter: Character) => Promise<void>;
    deleteCharacterHandler: (newCharacter: Character) => Promise<void>;
};

const PlaceholderCharacterCard = (props: Props) => {
    const [character, setCharacter] = React.useState<Character>({
        id: -1,
        name: '',
        race: '',
        class: '',
        imageUrl: '',
        health: 25,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        partyId: -1,
    });

    React.useEffect(() => {
        if (props.character) {
            setCharacter(props.character);
        }
    }, [props.character]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(character);
        await props.modifyCharacterHandler(character);

        // Handle clearing the state if we are creating a new character to edit
        if (props.type === 'create') {
            setCharacter({
                id: -1,
                name: '',
                race: '',
                class: '',
                imageUrl: '',
                health: 25,
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
                partyId: -1,
            });
        }
    };

    const onInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setCharacter((prevState) => {
            return {
                ...prevState,
                [field]: event.target.value,
            };
        });
    };

    const onStatChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();

        // Ensure the input value is correctly a number (should be as we're using number input)
        const parsedStat = parseInt(event.target.value);
        const newStatValue = !isNaN(parsedStat) ? parsedStat : 0;

        setCharacter((prevState) => {
            return {
                ...prevState,
                [field]: newStatValue,
            };
        });
    };

    return (
        <Form onSubmit={onSubmit}>
            <MainInfo>
                <InputGroup
                    label='Name'
                    type='text'
                    value={character.name}
                    placeholder='Dayne Harrow'
                    onChange={onInputChange('name')}
                />
                <InputGroup
                    label='Image URL'
                    type='text'
                    value={character.imageUrl}
                    placeholder='https://gameofthrones.fandom.com/example.webp'
                    onChange={onInputChange('imageUrl')}
                />
            </MainInfo>
            <MainInfo>
                <InputGroup
                    label='Race'
                    type='text'
                    value={character.race}
                    placeholder='Dwarf'
                    onChange={onInputChange('race')}
                />
                <InputGroup
                    label='Class'
                    type='text'
                    value={character.class}
                    placeholder='Bard'
                    onChange={onInputChange('class')}
                />
            </MainInfo>

            <StatsContainer>
                <InputGroup
                    label='Strength'
                    type='number'
                    value={character.strength.toString()}
                    placeholder='15'
                    onChange={onStatChange('strength')}
                />
                <InputGroup
                    label='Dexterity'
                    type='number'
                    value={character.dexterity.toString()}
                    placeholder='12'
                    onChange={onStatChange('dexterity')}
                />
                <InputGroup
                    label='Constitution'
                    type='number'
                    value={character.constitution.toString()}
                    placeholder='12'
                    onChange={onStatChange('constitution')}
                />
                <InputGroup
                    label='Intelligence'
                    type='number'
                    value={character.intelligence.toString()}
                    placeholder='13'
                    onChange={onStatChange('intelligence')}
                />
                <InputGroup
                    label='Wisdom'
                    type='number'
                    value={character.wisdom.toString()}
                    placeholder='7'
                    onChange={onStatChange('wisdom')}
                />
                <InputGroup
                    label='Charisma'
                    type='number'
                    value={character.charisma.toString()}
                    placeholder='17'
                    onChange={onStatChange('charisma')}
                />
            </StatsContainer>
            <ButtonGroup
                isDeleteVisible={props.type === 'edit'}
                onDeleteClick={() => props.deleteCharacterHandler(character)}
            />
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 450px;
    min-height: 235px;
    margin-bottom: 54px;
    margin-right: 27px;
    padding: 13px 27px;

    box-shadow: 0 10px 20px hsla(0, 0%, 27%, 0.08), 0 3px 6px hsla(0, 0%, 23%, 0.1);

    img {
        border-radius: 50%;
        height: 90px;
        width: 90px;
        margin-right: 27px;
        object-fit: cover;
    }
`;

const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: 150px 150px 150px;
`;

export default PlaceholderCharacterCard;
