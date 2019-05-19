export type Party = {
    id: number;
    name: string;
    tagline: string;
    logoUrl: string;
    characters: Character[];
};

export type Character = {
    id: number;
    name: string;
    race: string;
    class: string;
    imageUrl: string;
    health: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
};
