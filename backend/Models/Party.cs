namespace Models
{
    public class Party
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LogoUrl { get; set; }   // We'll use a CDN to host our images
        // Alternatively we could assign a Party to a Character. Either of these 
        // setups aren't a big deal since we're doing this in memory. Normally, both
        // setups **could** create performance issues in a database. I'd probably
        // create a join table and associate Character IDs and Party IDs together.
        public Character[] PartyMembers { get; set; }
    }
}