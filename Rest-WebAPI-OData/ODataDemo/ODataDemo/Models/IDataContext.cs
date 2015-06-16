using System.Data.Entity;

namespace AngularDemo.Models
{
    public interface IDataContext
    {
        DbSet<Customer> Customers { get; set; }
        DbSet<Invoice> Invoices { get; set; }

        int SaveChanges();
    }
}