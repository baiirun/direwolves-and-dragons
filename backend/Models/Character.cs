using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Race Race { get; set; }
        public Class Class { get; set; }
        public string ImageUrl { get; set; } // We'll use a CDN to host our images
        public int Health { get; set; }
        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Constitution { get; set; }
        public int Intelligence { get; set; }
        public int Wisdom { get; set; }
        public int Charisma { get; set; }
        public int PartyId { get; set; }
    }
}