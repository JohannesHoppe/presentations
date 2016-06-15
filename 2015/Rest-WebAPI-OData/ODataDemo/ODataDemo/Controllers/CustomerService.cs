using System.Collections.Generic;
using ODataDemo.Models;

namespace ODataDemo.Controllers
{
    /// <summary>
    /// Just demo code
    /// </summary>
    public static class CustomerService
    {
        public static IList<Invoice> PurchaseShoesAndSendMail(Customer customer, int amount)
        {
            return new[]
                   {
                       new Invoice
                       {
                           Amount = 12.99M,
                           Customer = customer
                       }
                   };
        }
    }
}