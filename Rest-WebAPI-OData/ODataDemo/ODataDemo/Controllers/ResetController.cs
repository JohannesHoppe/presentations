using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoPoco;
using AutoPoco.DataSources;
using AutoPoco.Engine;
using ODataDemo.Models;

namespace ODataDemo.Controllers
{
    public class ResetController : ApiController
    {
        private readonly IDataContext dataContext;

        public ResetController(IDataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        /// <summary>
        /// Resets the demo data to its initial state
        /// </summary>
        /// <returns>200 and a text</returns>
        public HttpResponseMessage Get()
        {
            var DemoData = GenerateDemoCustomers();

            dataContext.Invoices.RemoveRange(dataContext.Invoices.Select(i => i));
            dataContext.Customers.RemoveRange(dataContext.Customers.Select(c => c));
            dataContext.SaveChanges();

            foreach (var customer in DemoData)
            {
                dataContext.Customers.Add(customer);
                dataContext.SaveChanges();

                var invoices = GenerateDemoInvoices(customer.Id);

                foreach (var invoice in invoices)
                {
                    invoice.Customer = customer;
                    invoice.CustomerId = customer.Id;
                    customer.Invoices.Add(invoice);
                }

                dataContext.SaveChanges();
            }
            

            return Request.CreateResponse(HttpStatusCode.OK, "Demo Data was resetted!");
        }

        private static IEnumerable<Customer> GenerateDemoCustomers()
        {
            IGenerationSessionFactory factory = AutoPocoContainer.Configure(x =>
            {
                x.Conventions(c => c.UseDefaultConventions());
                x.AddFromAssemblyContainingType<Customer>();

                x.Include<Customer>()
                    .Setup(c => c.FirstName).Use<FirstNameSource>()
                    .Setup(c => c.LastName).Use<LastNameSource>()
                    .Setup(c => c.Mail).Use<EmailAddressSource>()
                    .Setup(c => c.DateOfBirth).Use<DateOfBirthSource>();
            });

            IGenerationSession session = factory.CreateSession();
            return session.List<Customer>(1000).Get();
        }

        private static IEnumerable<Invoice> GenerateDemoInvoices(int customerId)
        {
            Random rnd = new Random(customerId);
            int amountOfInvoices = rnd.Next(0, 10);

            IGenerationSessionFactory factory = AutoPocoContainer.Configure(x =>
            {
                x.Conventions(c => c.UseDefaultConventions());
                x.AddFromAssemblyContainingType<Invoice>();

                x.Include<Invoice>()
                    .Setup(c => c.Amount).Use<DecimalSource>(1m, 200m);
            });

            IGenerationSession session = factory.CreateSession();
            return session.List<Invoice>(amountOfInvoices).Get();
        }
    }
}
