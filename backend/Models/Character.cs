namespace Models   // This would be more meaningful in an actual application
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; } // We'll use a CDN to host our images
        public Stats Stats { get; set; }
    }
}