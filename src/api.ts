import { Party, Character } from "./components/Types";

// Set production url vs. development. I'm setting the default
// url here so the person testing this doesn't have to create a
// `.env` file :)
const baseUrl = process.env.REACT_APP_ENDPOINT_URL || "http://localhost:5000";

const headers = {
  "Content-Type": "application/json",
};

// Normally this would be more generic and better abstracted as an API layer
export const getParties = async () => {
  // Normally would be more robust error handling
  const response = await fetch(`${baseUrl}/api/party`);
  const parties: Party[] = await response.json();
  return parties;
};

export const getParty = async (id: string) => {
  const partyId = parseInt(id);
  const response = await fetch(`${baseUrl}/api/party/${partyId}`);
  const parties: Party = await response.json();
  return parties;
};

export const createParty = async (newParty: Party) => {
  try {
    const response = await fetch(`${baseUrl}/api/party`, {
      method: "POST",
      headers: headers,
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
    await fetch(`${baseUrl}/api/party/${updatedParty.id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(updatedParty),
    });
  } catch (e) {
    console.error(e);
  }
};

export const deleteParty = async (partyToDelete: Party) => {
  try {
    const response = await fetch(`${baseUrl}/api/party/${partyToDelete.id}`, {
      method: "DELETE",
      headers: headers,
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
    const response = await fetch(`${baseUrl}/api/character`, {
      method: "POST",
      headers: headers,
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
    await fetch(`${baseUrl}/api/character/${updatedCharacter.id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(updatedCharacter),
    });
  } catch (e) {
    console.error(e);
  }
};

export const deleteCharacter = async (characterToDelete: Character) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/character/${characterToDelete.id}`,
      {
        method: "DELETE",
        headers,
        body: JSON.stringify(characterToDelete),
      },
    );

    const deletedItem: Party = await response.json();
    return deletedItem;
  } catch (e) {
    throw e;
  }
};
