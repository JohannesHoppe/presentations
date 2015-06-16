using System.Web.Optimization;

namespace ODataDemo
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));            
            
            bundles.Add(new StyleBundle("~/Content/kendouicss").Include(
                      "~/Content/kendo/kendo.common.min.css",
                      "~/Content/kendo/kendo.default.min.css",
                      "~/Content/kendo/kendo.dataviz.min.css",
                      "~/Content/kendo/kendo.dataviz.default.min.css"));

            // Set EnableOptimizations to false for debugging.
            // BundleTable.EnableOptimizations = true;
        }
    }
}
