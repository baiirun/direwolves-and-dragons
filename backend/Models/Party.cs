using System.Collections.Generic;

namespace Models
{
    public class Party
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tagline { get; set; }
        public string LogoUrl { get; set; }   // We'll use a CDN to host our images
        public IEnumerable<Character> Characters { get; set; }
    }
}
