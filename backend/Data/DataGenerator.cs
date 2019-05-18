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
                    Name = "The Starks",
                    Tagline = "Winter is Coming.",
                    LogoUrl = "https://res.cloudinary.com/byronguina/image/upload/c_fit,f_auto,h_180,w_250/v1558197113/Stark.jpg",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Jon Snow",
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558192953/Jon_Snow.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558192953/Arya_Stark.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558192954/Sansa_Stark.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558192953/Bran_Stark.jpg",
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
                    Name = "The Targaryens",
                    Tagline = "Fire and Blood.",
                    LogoUrl = "https://res.cloudinary.com/byronguina/image/upload/c_fit,f_auto,h_180,w_250/v1558196262/Targaryen.jpg",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Daenerys",
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558192953/Danaerys.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558192953/Jorah_Mormont.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558192953/Grey_Worm.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558192954/Tyrion_Lannister.jpg",
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
                    Name = "The Lannisters",
                    Tagline = "Hear Me Roar!",
                    LogoUrl = "https://res.cloudinary.com/byronguina/image/upload/c_fit,f_auto,h_180,w_250/v1558197786/Lannister.png",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Jamie Lannister",
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558198213/Jamie.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558198213/Cersei.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558198213/Gregor.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558198213/Qyburn.jpg",
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
                    LogoUrl = "https://res.cloudinary.com/byronguina/image/upload/c_fit,f_auto,h_180,w_250/v1558197787/White_Walkers.jpg",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "The Night King",
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Night_King.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Wight_Giant.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Viserion.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Wight.jpg",
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
                    LogoUrl = "https://res.cloudinary.com/byronguina/image/upload/c_fit,f_auto,h_180,w_250/v1558197786/Baelish.png",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Brienne of Tarth",
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Brienne.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Davos.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Bronn.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Littlefinger.jpg",
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
                    Name = "The Night's Watch",
                    Tagline = "And now our watch has ended...",
                    LogoUrl = "https://res.cloudinary.com/byronguina/image/upload/c_fit,f_auto,h_180,w_280/v1558197787/Night_Watch.png",
                    Characters = new List<Models.Character>()
                    {
                        new Models.Character()
                        {
                            Name = "Samwell Tarly",
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199541/Sam.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Jeor.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Ed.jpg",
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
                            ImageUrl = "https://res.cloudinary.com/byronguina/image/upload/v1558199320/Aemon.jpg",
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