using Microsoft.EntityFrameworkCore;
using TheGeeksBank.Api.Models;

namespace TheGeeksBank.Api.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Summation> Summation { get; set; }
    }
}