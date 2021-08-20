using Microsoft.EntityFrameworkCore;
using uxchange.Models;

namespace uxchange.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<User> users { get; set; }
    }
}
