using System.IO;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Breeze.ContextProvider.EF6;
using Newtonsoft.Json;
using ODataDemo.Models;

namespace ODataDemo
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            IocConfig.Register();

            var formatters = GlobalConfiguration.Configuration.Formatters;
            formatters.Remove(formatters.XmlFormatter);

            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.Formatting = Formatting.Indented;
            jsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore; 

            WriteMetadata(Server.MapPath("~/Scripts/app/entityMetadata.js"));
        }

        public static void WriteMetadata(string path)
        {
            var provider = new EFContextProvider<DataContext>();
            using (var writer = new StreamWriter(path))
            {
                writer.Write("define(" + provider.Metadata() + ");");
            }
        }
    }
}
