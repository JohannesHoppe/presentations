using System.Data.Entity.ModelConfiguration;

namespace ODataDemo.Models
{
    public class InvoiceMap : EntityTypeConfiguration<Invoice>
    {
        public InvoiceMap()
        {
            HasKey(i => i.Id);

            HasRequired(i => i.Customer)
                .WithMany(i => i.Invoices)
                .HasForeignKey(t => t.CustomerId);
        }
    }
}