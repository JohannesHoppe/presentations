using System.Data.Entity;

namespace ODataDemo.Models
{
    public interface IDataContext
    {
        DbSet<Customer> Customers { get; set; }
        DbSet<Invoice> Invoices { get; set; }

        int SaveChanges();
    }
}