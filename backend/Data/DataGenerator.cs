using System;
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
            // Look for any board games.
            if (context.Parties.Any())
            {
                return;   // Data was already seeded
            }

            context.Parties.AddRange(
                new Models.Party
                {
                    Id = 1,
                    Name = "Starks",
                },
                new Models.Party
                {
                    Id = 2,
                    Name = "Targaryens",
                },
                new Models.Party
                {
                    Id = 3,
                    Name = "Lannisters",
                },
                new Models.Party
                {
                    Id = 4,
                    Name = "White Walkers",
                });

            context.SaveChanges();
        }
    }
}