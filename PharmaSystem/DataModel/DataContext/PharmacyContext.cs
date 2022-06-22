using Microsoft.EntityFrameworkCore;
using PharmaSystem.DataModel.Mappings;
using PharmaSystem.DataModel.Model;

namespace PharmaSystem.DataModel.DataContext
{
    public class PharmacyContext : DbContext
    {

        public PharmacyContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CostumerMap());
            modelBuilder.ApplyConfiguration(new BasketMap());
            modelBuilder.ApplyConfiguration(new EmployeeMap());
            modelBuilder.ApplyConfiguration(new MedicineMap());
            modelBuilder.ApplyConfiguration(new PermissionsMap());

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Costumer> Costumers { get; set; }
        public DbSet<Basket> Baskets { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<Employee> Employees { get; set; }  
        public DbSet<Permissions> Permissions { get; set; }

    }
}
