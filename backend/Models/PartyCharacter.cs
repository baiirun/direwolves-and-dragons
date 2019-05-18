namespace Models
{
    public class PartyCharacter
    {
        public int PartyId { get; set; }
        public Party Party { get; set; }
        public int CharacterId { get; set; }
        public Character Character { get; set; }
    }
}