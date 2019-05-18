using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

public class DataGenerator
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new InMemoryDbContext(
            serviceProvider.GetRequiredService<DbContextOptions<InMemoryDbContext>>()))
        {
            // Look for any board games.
            if (context.Parties.Any())
            {
                return;   // Data was already seeded
            }

            context.Characters.AddRange(
                new Models.Character
                {
                    Id = 1,
                    Name = "Jon Snow",
                    Race = Race.Human,
                    Class = Class.Ranger,
                    Stats = new Stats()
                    {
                        Health = 50,
                        Strength = 16,
                        Dexterity = 15,
                        Constitution = 14,
                        Intelligence = 8,
                        Wisdom = 12,
                        Charisma = 16
                    }
                },
                new Models.Character
                {
                    Id = 2,
                    Name = "Arya Stark",
                    Race = Race.Human,
                    Class = Class.Rogue,
                    Stats = new Stats()
                    {
                        Health = 35,
                        Strength = 10,
                        Dexterity = 18,
                        Constitution = 8,
                        Intelligence = 12,
                        Wisdom = 12,
                        Charisma = 16
                    }
                },
                new Models.Character
                {
                    Id = 3,
                    Name = "Sansa Stark",
                    Race = Race.Human,
                    Class = Class.Bard,
                    Stats = new Stats()
                    {
                        Health = 28,
                        Strength = 6,
                        Dexterity = 6,
                        Constitution = 18,
                        Intelligence = 18, // Apparently she's the smartest person Arya knows...
                        Wisdom = 14,
                        Charisma = 16
                    }
                },
                new Models.Character
                {
                    Id = 4,
                    Name = "Bran Stark",
                    Race = Race.Human,
                    Class = Class.Druid,
                    Stats = new Stats()
                    {
                        Health = 1,
                        Strength = 1,
                        Dexterity = 1,
                        Constitution = 1,
                        Intelligence = 99,
                        Wisdom = 99,
                        Charisma = 1
                    }
                },
                new Models.Character
                {
                    Id = 5,
                    Name = "Daenerys",
                    Race = Race.Human,
                    Class = Class.Sorcerer,  // Her Targaryen linear allows her to be Mother of Dragons
                    Stats = new Stats()
                    {
                        Health = 22,
                        Strength = 12,
                        Dexterity = 12,
                        Constitution = 18,
                        Intelligence = 8,
                        Wisdom = 12,
                        Charisma = 18
                    }
                },
                new Models.Character
                {
                    Id = 6,
                    Name = "Jorah Mormont",
                    Race = Race.Human,
                    Class = Class.Paladin,
                    Stats = new Stats()
                    {
                        Health = 65,
                        Strength = 16,
                        Dexterity = 15,
                        Constitution = 14,
                        Intelligence = 8,
                        Wisdom = 15,
                        Charisma = 8
                    }
                },
                new Models.Character
                {
                    Id = 7,
                    Name = "Grey Worm",
                    Race = Race.Human,
                    Class = Class.Monk,
                    Stats = new Stats()
                    {
                        Health = 65,
                        Strength = 16,
                        Dexterity = 18,
                        Constitution = 14,
                        Intelligence = 8,
                        Wisdom = 12,
                        Charisma = 1
                    }
                },
                new Models.Character
                {
                    Id = 8,
                    Name = "Tyrion Lannister",
                    Race = Race.Dwarf,
                    Class = Class.Bard,
                    Stats = new Stats()
                    {
                        Health = 24,
                        Strength = 4,
                        Dexterity = 8,
                        Constitution = 8,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 18
                    }
                },
                new Models.Character
                {
                    Id = 9,
                    Name = "Jamie Lannister",
                    Race = Race.Human,
                    Class = Class.Fighter,
                    Stats = new Stats()
                    {
                        Health = 50,
                        Strength = 16,
                        Dexterity = 12,
                        Constitution = 18,
                        Intelligence = 1,
                        Wisdom = 12,
                        Charisma = 18
                    }
                },
                new Models.Character
                {
                    Id = 10,
                    Name = "Cesei Lannister",
                    Race = Race.Human,
                    Class = Class.Bard,
                    Stats = new Stats()
                    {
                        Health = 18,
                        Strength = 8,
                        Dexterity = 12,
                        Constitution = 5,
                        Intelligence = 8, // "You're not half as smart as you think you are." - Tywin, to Cersei
                        Wisdom = 12,
                        Charisma = 9
                    }
                },
                new Models.Character
                {
                    Id = 11,
                    Name = "Gregor Clegane",
                    Race = Race.Human,
                    Class = Class.Barbarian,
                    Stats = new Stats()
                    {
                        Health = 99,
                        Strength = 18,
                        Dexterity = 10,
                        Constitution = 18,
                        Intelligence = 1,
                        Wisdom = 1,
                        Charisma = 1
                    }
                },
                new Models.Character
                {
                    Id = 12,
                    Name = "Maester Qyburn",
                    Race = Race.Human,
                    Class = Class.Warlock,
                    Stats = new Stats()
                    {
                        Health = 24,
                        Strength = 8,
                        Dexterity = 8,
                        Constitution = 8,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 14
                    }
                },
                new Models.Character
                {
                    Id = 13,
                    Name = "Samwell Tarly",
                    Race = Race.Human,
                    Class = Class.Bard,
                    Stats = new Stats()
                    {
                        Health = 24,
                        Strength = 14,
                        Dexterity = 8,
                        Constitution = 8,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 6
                    }
                },
                new Models.Character
                {
                    Id = 14,
                    Name = "Jeor Mormont",
                    Race = Race.Human,
                    Class = Class.Fighter,
                    Stats = new Stats()
                    {
                        Health = 55,
                        Strength = 15,
                        Dexterity = 8,
                        Constitution = 18,
                        Intelligence = 12,
                        Wisdom = 14,
                        Charisma = 16
                    }
                },
                new Models.Character
                {
                    Id = 15,
                    Name = "Eddison Tollett",
                    Race = Race.Human,
                    Class = Class.Fighter,
                    Stats = new Stats()
                    {
                        Health = 38,
                        Strength = 14,
                        Dexterity = 12,
                        Constitution = 12,
                        Intelligence = 10,
                        Wisdom = 10,
                        Charisma = 10
                    }
                },
                new Models.Character
                {
                    Id = 16,
                    Name = "Maester Aemon",
                    Race = Race.Human,
                    Class = Class.Wizard,
                    Stats = new Stats()
                    {
                        Health = 24,
                        Strength = 4,
                        Dexterity = 2,
                        Constitution = 2,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 18
                    }
                },
                new Models.Character
                {
                    Id = 17,
                    Name = "Brienne of Tarth",
                    Race = Race.Human,
                    Class = Class.Paladin, // Closest thing to knight I think
                    Stats = new Stats()
                    {
                        Health = 40,
                        Strength = 17,
                        Dexterity = 10,
                        Constitution = 18,
                        Intelligence = 10,
                        Wisdom = 10,
                        Charisma = 6    // Arguable
                    }
                },
                new Models.Character
                {
                    Id = 18,
                    Name = "Davos Seaworth",
                    Race = Race.Human,
                    Class = Class.Rogue,
                    Stats = new Stats()
                    {
                        Health = 24,
                        Strength = 12,
                        Dexterity = 16,
                        Constitution = 12,
                        Intelligence = 12,
                        Wisdom = 18,
                        Charisma = 12
                    }
                },
                new Models.Character
                {
                    Id = 19,
                    Name = "Bronn",
                    Race = Race.Human,
                    Class = Class.Rogue,
                    Stats = new Stats()
                    {
                        Health = 48,
                        Strength = 14,
                        Dexterity = 16,
                        Constitution = 12,
                        Intelligence = 14,
                        Wisdom = 14,
                        Charisma = 14
                    }
                },
                new Models.Character
                {
                    Id = 20,
                    Name = "Petyr Baelish",
                    Race = Race.Human,
                    Class = Class.Wizard,
                    Stats = new Stats()
                    {
                        Health = 24,
                        Strength = 4,
                        Dexterity = 2,
                        Constitution = 2,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 18
                    }
                },
                new Models.Character
                {
                    Id = 21,
                    Name = "Melisandre",
                    Race = Race.Human,
                    Class = Class.Warlock,
                    Stats = new Stats()
                    {
                        Health = 1,
                        Strength = 4,
                        Dexterity = 2,
                        Constitution = 2,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 18
                    }
                },
                new Models.Character
                {
                    Id = 22,
                    Name = "Barristan Selmy",
                    Race = Race.Human,
                    Class = Class.Paladin,
                    Stats = new Stats()
                    {
                        Health = 51,
                        Strength = 14,
                        Dexterity = 16,
                        Constitution = 12,
                        Intelligence = 7,
                        Wisdom = 15,
                        Charisma = 12
                    }
                },
                new Models.Character
                {
                    Id = 23,
                    Name = "Varys the Spider",
                    Race = Race.Human,
                    Class = Class.Bard,
                    Stats = new Stats()
                    {
                        Health = 24,
                        Strength = 4,
                        Dexterity = 2,
                        Constitution = 2,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 18
                    }
                },
                new Models.Character
                {
                    Id = 24,
                    Name = "The Night King",
                    Race = Race.DeathKnight,
                    Class = Class.Sorcerer,
                    Stats = new Stats()
                    {
                        Health = 85,
                        Strength = 18,
                        Dexterity = 18,
                        Constitution = 18,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 18
                    }
                },
                new Models.Character
                {
                    Id = 25,
                    Name = "Wight Giant",
                    Race = Race.Giant,
                    Class = Class.Barbarian,
                    Stats = new Stats()
                    {
                        Health = 150,
                        Strength = 18,
                        Dexterity = 10,
                        Constitution = 18,
                        Intelligence = 1,
                        Wisdom = 1,
                        Charisma = 1
                    }
                },
                new Models.Character
                {
                    Id = 26,
                    Name = "Viserion",
                    Race = Race.IceDragon,
                    Class = Class.Wizard,
                    Stats = new Stats()
                    {
                        Health = 350,
                        Strength = 18,
                        Dexterity = 18,
                        Constitution = 18,
                        Intelligence = 18,
                        Wisdom = 18,
                        Charisma = 1
                    }
                },
                new Models.Character
                {
                    Id = 27,
                    Name = "Wight",
                    Race = Race.Zombie,
                    Class = Class.Barbarian,
                    Stats = new Stats()
                    {
                        Health = 25,
                        Strength = 12,
                        Dexterity = 18,
                        Constitution = 8,
                        Intelligence = 1,
                        Wisdom = 1,
                        Charisma = 1
                    }
                });

            // High Sparrow?
            // Melisandre?
            // Sandor Clegane?
            // Baratheons?
            // Dorne?
            // Essos characters?

            context.Parties.AddRange(
                new Models.Party
                {
                    Id = 1,
                    Name = "Starks",
                    Tagline = "Winter is Coming.",
                },
                new Models.Party
                {
                    Id = 2,
                    Name = "Targaryens",
                    Tagline = "Fire and Blood.",
                },
                new Models.Party
                {
                    Id = 3,
                    Name = "Lannisters",
                    Tagline = "Hear Me Roar!",

                },
                new Models.Party
                {
                    Id = 4,
                    Name = "White Walkers",
                    Tagline = "Army of the Dead.",
                },
                new Models.Party
                {
                    Id = 5,
                    Name = "We Exist!",
                    Tagline = "We're characters, too, you know..."
                },
                new Models.Party
                {
                    Id = 6,
                    Name = "Night's Watch",
                    Tagline = "And now our watch has ended..."
                });

            context.PartyCharacters.AddRange(
                // Starks
                new Models.PartyCharacter()
                {
                    PartyId = 1,
                    CharacterId = 1 // Jon
                },
                new Models.PartyCharacter()
                {
                    PartyId = 1,
                    CharacterId = 2 // Arya
                },
                new Models.PartyCharacter()
                {
                    PartyId = 1,
                    CharacterId = 3 // Sansa
                },
                new Models.PartyCharacter()
                {
                    PartyId = 1,
                    CharacterId = 4 // Bran
                },

                // Targs
                new Models.PartyCharacter()
                {
                    PartyId = 2,
                    CharacterId = 5 // Dany
                },
                new Models.PartyCharacter()
                {
                    PartyId = 2,
                    CharacterId = 6 // Jorah
                },
                new Models.PartyCharacter()
                {
                    PartyId = 2,
                    CharacterId = 7 // Grey Worm
                },
                new Models.PartyCharacter()
                {
                    PartyId = 2,
                    CharacterId = 8 // Tyrion
                },

                // Lannisters
                new Models.PartyCharacter()
                {
                    PartyId = 3,
                    CharacterId = 9 // Jamie
                },
                new Models.PartyCharacter()
                {
                    PartyId = 3,
                    CharacterId = 10 // Cersei
                },
                new Models.PartyCharacter()
                {
                    PartyId = 3,
                    CharacterId = 11 // Mountain
                },
                new Models.PartyCharacter()
                {
                    PartyId = 3,
                    CharacterId = 12 // Qyburn
                },

                // White Walkers
                new Models.PartyCharacter()
                {
                    PartyId = 4,
                    CharacterId = 24 // Night King
                },
                new Models.PartyCharacter()
                {
                    PartyId = 4,
                    CharacterId = 25 // Wight Giant
                },
                new Models.PartyCharacter()
                {
                    PartyId = 4,
                    CharacterId = 26 // Zombie Viserion
                },
                new Models.PartyCharacter()
                {
                    PartyId = 4,
                    CharacterId = 27 // Wight
                }
            );

            context.SaveChanges();
        }
    }
}