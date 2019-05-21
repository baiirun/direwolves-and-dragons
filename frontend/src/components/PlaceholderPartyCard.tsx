import React from 'react';
import styled from 'styled-components';
import { Party } from './Types';

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

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await props.modifyPartyHandler(party);

        if (props.type == 'create') {
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

    const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.deletePartyHandler(party);
    };

    return (
        <Form onSubmit={submit}>
            <Container>
                <Label>Party Name</Label>
                <Input type='text' value={party.name} onChange={onInputChange('name')} />
            </Container>
            <Container>
                <Label>Tag Line</Label>
                <Input type='text' value={party.tagline} onChange={onInputChange('tagline')} />
            </Container>
            <Container>
                <Label>Logo URL</Label>
                <Input type='text' value={party.logoUrl} onChange={onInputChange('logoUrl')} />
            </Container>
            <input type='submit' value='Submit' />
            {props.type == 'edit' ? <button onClick={onDelete}>Delete</button> : null}
        </Form>
    );
};

const Form = styled.form`
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
        transform: translateY(-5px);
        box-shadow: 0 16px 32px hsla(0, 0%, 0%, 0.1), 0 3px 12px hsla(0, 0%, 15%, 0.05);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 13px;
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: 400;
`;

const Input = styled.input`
    font-size: 0.8rem;
    padding: 2px 4px;
`;

export default PlaceholderPartyCard;
