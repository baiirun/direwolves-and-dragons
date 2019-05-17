using Microsoft.EntityFrameworkCore;
using Models;

public class InMemoryDbContext : DbContext
{
    public InMemoryDbContext(DbContextOptions<InMemoryDbContext> options) : base(options)
    { }

    public DbSet<Models.Party> Parties { get; set; }
    public DbSet<Models.Character> Characters { get; set; }
}