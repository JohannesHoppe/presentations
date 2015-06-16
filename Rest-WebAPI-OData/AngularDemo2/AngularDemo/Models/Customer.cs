using System;
using System.Collections.Generic;

namespace AngularDemo.Models
{
    public class Customer
    {
        public Customer()
        {
            Invoices = new List<Invoice>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Mail { get; set; }
        public DateTime DateOfBirth { get; set; }
        public virtual ICollection<Invoice> Invoices { get; set; }
    }
}
