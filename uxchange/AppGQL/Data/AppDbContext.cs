using Microsoft.EntityFrameworkCore;
using uxchange.Models;

namespace uxchange.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Item> Item { get; set; }
        public DbSet<AddItem> AddItem { get; set; }
        public DbSet<User> users { get; set; }

         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Item>()
                .HasOne(p => p.User)
                .WithMany(s => s.Item)
                .HasForeignKey(p => p.Id);

            modelBuilder.Entity<AddItem>()
                .HasOne(c => c.User)
                .WithMany(s => s.AddItem)
                .HasForeignKey(c => c.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<AddItem>()
                .HasOne(c => c.Item)
                .WithMany(p => p.AddItem)
                .HasForeignKey(c => c.ItemId);
        }
    }
}
