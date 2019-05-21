import { Party } from './components/Types';

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
