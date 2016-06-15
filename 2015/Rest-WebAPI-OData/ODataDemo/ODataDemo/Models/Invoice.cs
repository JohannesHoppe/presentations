namespace ODataDemo.Models
{
    public class Invoice
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }

        public int CustomerId { get; set; }                     
        public virtual Customer Customer { get; set; } 
    }
}
