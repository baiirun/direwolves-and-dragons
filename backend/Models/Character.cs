using System.Collections.Generic;

namespace Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Race Race { get; set; }
        public Class Class { get; set; }
        public string ImageUrl { get; set; } // We'll use a CDN to host our images
        public Stats Stats { get; set; }
        public IEnumerable<PartyCharacter> PartyCharacters { get; set; }
    }
}