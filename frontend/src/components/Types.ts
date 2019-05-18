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
    race: Race;
    class: Class;
    imageUrl: string;
    health: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
};

export enum Race {
    Human = 'Human',
    Dwarf = 'Dwarf',
    DeathKnight = 'Death Knight',
    Zombie = 'Wight',
    Giant = 'Wight Giant',
    IceDragon = 'Wight Dragon', // blue eyes btw
}

export enum Class {
    Barbarian = 'Barbarian',
    Bard = 'Bard',
    Cleric = 'Cleric',
    Druid = 'Druid',
    Fighter = 'Fighter',
    Monk = 'Monk',
    Paladin = 'Paladin',
    Ranger = 'Ranger',
    Rogue = 'Rogue',
    Sorcerer = 'Sorcerer',
    Warlock = 'Warlock',
    Wizard = 'Wizard',
}
