import React from 'react';
import styled from 'styled-components';
import { Party } from '../Types';
import InputGroup from '../form/InputGroup';
import ButtonGroup from '../form/ButtonGroup';

type Props = {
    party?: Party;
    type: 'create' | 'edit';
    modifyPartyHandler: (newParty: Party) => Promise<void>;
    deletePartyHandler: (newParty: Party) => Promise<void>;
};

const PlaceholderPartyCard = (props: Props) => {
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

    const onDelete = () => {};

    return (
        <Form onSubmit={onSubmit}>
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
                    placeholder='https://google.com/image/example'
                    label='Logo URL'
                    value={party.logoUrl}
                    onChange={onInputChange('logoUrl')}
                    type='text'
                />
            </InputsContainer>

            <ButtonGroup
                onDeleteClick={() => props.deletePartyHandler(party)}
                isDeleteVisible={props.type === 'edit'}
            />
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 4px;
    box-shadow: 0 10px 20px hsla(0, 0%, 27%, 0.08), 0 3px 6px hsla(0, 0%, 23%, 0.1);
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
