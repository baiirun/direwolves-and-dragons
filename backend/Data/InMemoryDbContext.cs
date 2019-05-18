using Microsoft.EntityFrameworkCore;
using Models;

public class InMemoryDbContext : DbContext
{
    public InMemoryDbContext(DbContextOptions<InMemoryDbContext> options) : base(options)
    { }

    public DbSet<Models.Party> Parties { get; set; }
    public DbSet<Models.Character> Characters { get; set; }
    public DbSet<Models.PartyCharacter> PartyCharacters { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PartyCharacter>()
                .HasKey(pc => new { pc.PartyId, pc.CharacterId });
        modelBuilder.Entity<PartyCharacter>()
            .HasOne(pc => pc.Character)
            .WithMany(c => c.PartyCharacters)
            .HasForeignKey(pc => pc.CharacterId);
        modelBuilder.Entity<PartyCharacter>()
            .HasOne(pc => pc.Party)
            .WithMany(p => p.PartyCharacters)
            .HasForeignKey(pc => pc.PartyId);
    }
}