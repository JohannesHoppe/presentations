using System.Data.Entity;

namespace ODataDemo.Models
{
    public class DataContext : DbContext, IDataContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Invoice> Invoices { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new InvoiceMap());
        }
    }
}