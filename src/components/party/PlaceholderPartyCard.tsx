import React from 'react';
import styled from 'styled-components';
import { Party } from '../Types';
import InputGroup from '../form/InputGroup';
import ButtonGroup from '../form/ButtonGroup';
import * as api from '../../api';

type Props = {
    party?: Party;
    type: 'create' | 'edit';
    modifyPartyHandler: (newParty: Party) => Promise<void>;
    deletePartyHandler: (partyToDelete: Party) => Promise<void>;
};

const PlaceholderPartyCard = (props: Props) => {
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
    const [party, setParty] = React.useState<Party>({
        name: '',
        tagline: '',
        logoUrl: '',
        id: -1,
        characters: [],
    });

    React.useEffect(() => {
        if (props.party) {
            setParty(props.party);
        }
    }, [props.party]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsSubmitting(true);
        await props.modifyPartyHandler(party);

        if (props.type === 'create') {
            setParty({
                name: '',
                tagline: '',
                logoUrl: '',
                id: -1,
                characters: [],
            });
        }

        setIsSubmitting(false);
    };

    const onInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setParty((prevState) => {
            return {
                ...prevState,
                [field]: event.target.value,
            };
        });
    };

    return (
        <Form onSubmit={onSubmit} id='new-party' type={props.type}>
            <InputsContainer>
                <InputGroup
                    placeholder='The Delving Dragons'
                    label='Party Name'
                    value={party.name}
                    onChange={onInputChange('name')}
                    type='text'
                />
                <InputGroup
                    placeholder='No challenge too great.'
                    label='Tag Line'
                    value={party.tagline}
                    onChange={onInputChange('tagline')}
                    type='text'
                />
                <InputGroup
                    placeholder='https://gameofthrones.fandom.com/example.webp'
                    label='Logo URL'
                    value={party.logoUrl}
                    onChange={onInputChange('logoUrl')}
                    type='text'
                />
            </InputsContainer>

            <ButtonGroup
                onDeleteClick={() => props.deletePartyHandler(party)}
                isDeleteVisible={props.type === 'edit'}
                isLoading={isSubmitting}
            />
        </Form>
    );
};

const Form = styled('form')<{ type: 'create' | 'edit' }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 4px;
    /* box-shadow: 0 10px 20px hsla(0, 0%, 27%, 0.08), 0 3px 6px hsla(0, 0%, 23%, 0.1); */
    box-shadow: ${(
        props: any, // styled-components typing is very annoying
    ) =>
        props.type === 'create'
            ? '0 10px 20px hsla(146, 100%, 44%, 0.30), 0 3px 6px hsla(146, 100%, 23%, 0.15)'
            : '0 10px 20px hsla(0, 0%, 27%, 0.08), 0 3px 6px hsla(0, 0%, 23%, 0.1)'};
    margin-right: 27px;
    margin-bottom: 54px;
    width: 250px;
    height: 300px;
    transition: 0.15s ease-out all;

    &:hover,
    &:active,
    &:focus {
        box-shadow: 0 16px 32px hsla(0, 0%, 0%, 0.1), 0 3px 12px hsla(0, 0%, 15%, 0.05);
    }
`;

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default PlaceholderPartyCard;
