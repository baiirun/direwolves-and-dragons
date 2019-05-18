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
            if (context.Parties.Any() && context.Characters.Any())
            {
                return;   // Data was already seeded
            }

            context.Characters.AddRange(
                new Models.Character()
                {
                    Name = "Melisandre",
                    Race = Race.Human,
                    Class = Class.Warlock,
                    Health = 1,
                    Strength = 4,
                    Dexterity = 2,
                    Constitution = 2,
                    Intelligence = 18,
                    Wisdom = 18,
                    Charisma = 18
                },
                new Models.Character()
                {
                    Name = "Barristan Selmy",
                    Race = Race.Human,
                    Class = Class.Paladin,
                    Health = 51,
                    Strength = 14,
                    Dexterity = 16,
                    Constitution = 12,
                    Intelligence = 7,
                    Wisdom = 15,
                    Charisma = 12
                },
                new Models.Character()
                {
                    Name = "Varys the Spider",
                    Race = Race.Human,
                    Class = Class.Bard,
                    Health = 24,
                    Strength = 4,
                    Dexterity = 2,
                    Constitution = 2,
                    Intelligence = 18,
                    Wisdom = 18,
                    Charisma = 18
                });

            // High Sparrow?
            // Melisandre?
            // Sandor Clegane?
            // Baratheons?
            // Dorne?
            // Essos characters?
            context.SaveChanges();

            context.Parties.AddRange(
                new Models.Party
                {
                    Name = "Starks",
                    Tagline = "Winter is Coming.",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Jon Snow",
                            Race = Race.Human,
                            Class = Class.Ranger,
                            Health = 50,
                            Strength = 16,
                            Dexterity = 15,
                            Constitution = 14,
                            Intelligence = 8,
                            Wisdom = 12,
                            Charisma = 16
                        },
                        new Models.Character()
                        {
                            Name = "Arya Stark",
                            Race = Race.Human,
                            Class = Class.Rogue,
                            Health = 35,
                            Strength = 10,
                            Dexterity = 18,
                            Constitution = 8,
                            Intelligence = 12,
                            Wisdom = 12,
                            Charisma = 16
                        },
                        new Models.Character()
                        {
                            Name = "Sansa Stark",
                            Race = Race.Human,
                            Class = Class.Bard,
                            Health = 28,
                            Strength = 6,
                            Dexterity = 6,
                            Constitution = 18,
                            Intelligence = 18, // Apparently she's the smartest person Arya knows...
                            Wisdom = 14,
                            Charisma = 16
                        },
                        new Models.Character()
                        {
                            Name = "Bran Stark",
                            Race = Race.Human,
                            Class = Class.Druid,
                            Health = 1,
                            Strength = 1,
                            Dexterity = 1,
                            Constitution = 1,
                            Intelligence = 99,
                            Wisdom = 99,
                            Charisma = 1
                        },
                    }
                },
                new Models.Party
                {
                    Name = "Targaryens",
                    Tagline = "Fire and Blood.",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Daenerys",
                            Race = Race.Human,
                            Class = Class.Sorcerer,  // Her Targaryen linear allows her to be Mother of Dragons
                            Health = 22,
                            Strength = 12,
                            Dexterity = 12,
                            Constitution = 18,
                            Intelligence = 8,
                            Wisdom = 12,
                            Charisma = 18
                        },
                        new Models.Character()
                        {
                            Name = "Jorah Mormont",
                            Race = Race.Human,
                            Class = Class.Paladin,
                            Health = 65,
                            Strength = 16,
                            Dexterity = 15,
                            Constitution = 14,
                            Intelligence = 8,
                            Wisdom = 15,
                            Charisma = 8
                        },
                        new Models.Character()
                        {
                            Name = "Grey Worm",
                            Race = Race.Human,
                            Class = Class.Monk,
                            Health = 65,
                            Strength = 16,
                            Dexterity = 18,
                            Constitution = 14,
                            Intelligence = 8,
                            Wisdom = 12,
                            Charisma = 1
                        },
                        new Models.Character()
                        {
                            Name = "Tyrion Lannister",
                            Race = Race.Dwarf,
                            Class = Class.Bard,
                            Health = 24,
                            Strength = 4,
                            Dexterity = 8,
                            Constitution = 8,
                            Intelligence = 18,
                            Wisdom = 18,
                            Charisma = 18
                        },
                    }
                },
                new Models.Party
                {
                    Name = "Lannisters",
                    Tagline = "Hear Me Roar!",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Jamie Lannister",
                            Race = Race.Human,
                            Class = Class.Fighter,
                            Health = 50,
                            Strength = 16,
                            Dexterity = 12,
                            Constitution = 18,
                            Intelligence = 1,
                            Wisdom = 12,
                            Charisma = 18
                        },
                        new Models.Character()
                        {
                            Name = "Cersei Lannister",
                            Race = Race.Human,
                            Class = Class.Bard,
                            Health = 18,
                            Strength = 8,
                            Dexterity = 12,
                            Constitution = 5,
                            Intelligence = 8, // "You're not half as smart as you think you are." - Tywin, to Cersei
                            Wisdom = 12,
                            Charisma = 9
                        },
                        new Models.Character()
                        {
                            Name = "Gregor Clegane",
                            Race = Race.Human,
                            Class = Class.Barbarian,
                            Health = 99,
                            Strength = 18,
                            Dexterity = 10,
                            Constitution = 18,
                            Intelligence = 1,
                            Wisdom = 1,
                            Charisma = 1
                        },
                        new Models.Character()
                        {
                            Name = "Maester Qyburn",
                            Race = Race.Human,
                            Class = Class.Warlock,
                            Health = 24,
                            Strength = 8,
                            Dexterity = 8,
                            Constitution = 8,
                            Intelligence = 18,
                            Wisdom = 18,
                            Charisma = 14
                        },
                    }
                },
                new Models.Party
                {
                    Name = "White Walkers",
                    Tagline = "Army of the Dead.",
                    Characters = new List<Models.Character>()
                    {
                        // Typically we would use an ID, but we know the character names
                        // are unique and it's easier to swap around characters this way.
                        // This isn't _super_ performant either, but it's not a huge deal
                        // since the dataset is so small.
                        new Models.Character()
                        {
                            Name = "The Night King",
                            Race = Race.DeathKnight,
                            Class = Class.Sorcerer,
                            Health = 85,
                            Strength = 18,
                            Dexterity = 18,
                            Constitution = 18,
                            Intelligence = 18,
                            Wisdom = 18,
                            Charisma = 18
                        },
                        new Models.Character()
                        {
                            Name = "Wight Giant",
                            Race = Race.Giant,
                            Class = Class.Barbarian,
                            Health = 150,
                            Strength = 18,
                            Dexterity = 10,
                            Constitution = 18,
                            Intelligence = 1,
                            Wisdom = 1,
                            Charisma = 1
                        },
                        new Models.Character()
                        {
                            Name = "Viserion",
                            Race = Race.IceDragon,
                            Class = Class.Wizard,
                            Health = 350,
                            Strength = 18,
                            Dexterity = 18,
                            Constitution = 18,
                            Intelligence = 18,
                            Wisdom = 18,
                            Charisma = 1
                        },
                        new Models.Character()
                        {
                            Name = "Wight",
                            Race = Race.Zombie,
                            Class = Class.Barbarian,
                            Health = 25,
                            Strength = 12,
                            Dexterity = 18,
                            Constitution = 8,
                            Intelligence = 1,
                            Wisdom = 1,
                            Charisma = 1
                        }
                    }
                },
                new Models.Party
                {
                    Name = "We Exist!",
                    Tagline = "We're characters, too, you know...",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Brienne of Tarth",
                            Race = Race.Human,
                            Class = Class.Paladin, // Closest thing to knight I think
                            Health = 40,
                            Strength = 17,
                            Dexterity = 10,
                            Constitution = 18,
                            Intelligence = 10,
                            Wisdom = 10,
                            Charisma = 6    // Arguable
                        },
                        new Models.Character()
                        {
                            Name = "Davos Seaworth",
                            Race = Race.Human,
                            Class = Class.Rogue,
                            Health = 24,
                            Strength = 12,
                            Dexterity = 16,
                            Constitution = 12,
                            Intelligence = 12,
                            Wisdom = 18,
                            Charisma = 12
                        },
                        new Models.Character()
                        {
                            Name = "Bronn",
                            Race = Race.Human,
                            Class = Class.Rogue,
                            Health = 48,
                            Strength = 14,
                            Dexterity = 16,
                            Constitution = 12,
                            Intelligence = 14,
                            Wisdom = 14,
                            Charisma = 14
                        },
                        new Models.Character()
                        {
                            Name = "Petyr Baelish",
                            Race = Race.Human,
                            Class = Class.Wizard,
                            Health = 24,
                            Strength = 4,
                            Dexterity = 2,
                            Constitution = 2,
                            Intelligence = 18,
                            Wisdom = 18,
                            Charisma = 18
                        }
                    }
                },
                new Models.Party
                {
                    Name = "Night's Watch",
                    Tagline = "And now our watch has ended...",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Samwell Tarly",
                            Race = Race.Human,
                            Class = Class.Bard,
                            Health = 24,
                            Strength = 14,
                            Dexterity = 8,
                            Constitution = 8,
                            Intelligence = 18,
                            Wisdom = 18,
                            Charisma = 6
                        },
                        new Models.Character()
                        {
                            Name = "Jeor Mormont",
                            Race = Race.Human,
                            Class = Class.Fighter,
                            Health = 55,
                            Strength = 15,
                            Dexterity = 8,
                            Constitution = 18,
                            Intelligence = 12,
                            Wisdom = 14,
                            Charisma = 16
                        },
                        new Models.Character()
                        {
                            Name = "Eddison Tollett",
                            Race = Race.Human,
                            Class = Class.Fighter,
                            Health = 38,
                            Strength = 14,
                            Dexterity = 12,
                            Constitution = 12,
                            Intelligence = 10,
                            Wisdom = 10,
                            Charisma = 10
                        },
                        new Models.Character()
                        {
                            Name = "Maester Aemon",
                            Race = Race.Human,
                            Class = Class.Wizard,
                            Health = 24,
                            Strength = 4,
                            Dexterity = 2,
                            Constitution = 2,
                            Intelligence = 18,
                            Wisdom = 18,
                            Charisma = 18
                        }
                    }
                });

            context.SaveChanges();

            foreach (var p in context.Parties)
            {
                p.Characters = context.Characters.Where(c => c.PartyId == p.Id);
            };

            context.SaveChanges();
        }
    }
}