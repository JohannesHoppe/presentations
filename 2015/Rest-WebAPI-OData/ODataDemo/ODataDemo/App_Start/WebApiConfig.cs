using System.Web.Http;
using System.Web.Http.OData.Batch;
using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Extensions;
using Microsoft.Data.Edm;
using ODataDemo.Models;

namespace ODataDemo
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // standard Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // OData
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Customer>("Customers");
            builder.EntitySet<Invoice>("Invoices");

            // OData Action
            ActionConfiguration purchase = builder.Entity<Customer>().Action("Purchase");
            purchase.Parameter<int>("AmountOfShoes");
            purchase.ReturnsFromEntitySet<Invoice>("Invoices");

            config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());

            // OData with fixed metadata
            // see: http://www.getbreezenow.com/documentation/odata-server
            config.Routes.MapODataServiceRoute("odataFixed", "odataFixed", EdmBuilder.GetEdm<DataContext>(), new DefaultODataBatchHandler(GlobalConfiguration.DefaultServer));
        }
    }
}

