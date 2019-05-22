import { Party, Character } from './components/Types';

// Normally this would be abstracted to a client-side API layer
export const createParty = async (newParty: Party) => {
    try {
        const response = await fetch('http://localhost:5000/api/party', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newParty.name,
                tagline: newParty.tagline,
                characters: newParty.characters,
                logoUrl: newParty.logoUrl,
            }),
        });

        const result: Party = await response.json();
        return result;
    } catch (e) {
        throw e;
    }
};

export const submitEditedParty = async (newParty: Party) => {
    try {
        await fetch(`http://localhost:5000/api/party/${newParty.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newParty),
        });
    } catch (e) {
        console.error(e);
    }
};

export const deleteParty = async (newParty: Party) => {
    try {
        const response = await fetch(`http://localhost:5000/api/party/${newParty.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newParty),
        });

        const deletedItem: Party = await response.json();
        return deletedItem;
    } catch (e) {
        throw e;
    }
};

export const createCharacter = async (newCharacter: Character) => {
    try {
        const response = await fetch('http://localhost:5000/api/character', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newCharacter.name,
                race: newCharacter.race,
                class: newCharacter.class,
                imageUrl: newCharacter.imageUrl,
                health: newCharacter.health,
                strength: newCharacter.strength,
                dexterity: newCharacter.dexterity,
                constitution: newCharacter.constitution,
                intelligence: newCharacter.intelligence,
                wisdom: newCharacter.wisdom,
                charisma: newCharacter.charisma,
                partyId: newCharacter.partyId,
            }),
        });

        const result: Character = await response.json();
        return result;
    } catch (e) {
        throw e;
    }
};

export const submitEditedCharacter = async (newParty: Party) => {
    try {
        await fetch(`http://localhost:5000/api/party/${newParty.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newParty),
        });
    } catch (e) {
        console.error(e);
    }
};

export const deleteCharacter = async (newParty: Party) => {
    try {
        const response = await fetch(`http://localhost:5000/api/party/${newParty.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newParty),
        });

        const deletedItem: Party = await response.json();
        return deletedItem;
    } catch (e) {
        throw e;
    }
};
