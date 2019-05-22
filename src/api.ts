import { Party, Character } from './components/Types';

// Normally this would be more generic and better abstracted as an API layer
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

export const submitEditedParty = async (updatedParty: Party) => {
    try {
        await fetch(`http://localhost:5000/api/party/${updatedParty.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedParty),
        });
    } catch (e) {
        console.error(e);
    }
};

export const deleteParty = async (partyToDelete: Party) => {
    try {
        const response = await fetch(`http://localhost:5000/api/party/${partyToDelete.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(partyToDelete),
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

export const submitEditedCharacter = async (updatedCharacter: Character) => {
    try {
        await fetch(`http://localhost:5000/api/character/${updatedCharacter.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCharacter),
        });
    } catch (e) {
        console.error(e);
    }
};

export const deleteCharacter = async (characterToDelete: Character) => {
    try {
        const response = await fetch(`http://localhost:5000/api/character/${characterToDelete.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(characterToDelete),
        });

        const deletedItem: Party = await response.json();
        return deletedItem;
    } catch (e) {
        throw e;
    }
};
