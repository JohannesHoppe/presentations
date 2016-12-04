![](img/logos/core-logo.svg) <!-- .element: style="width:200px" -->
# ASP.NET Core




![](img/asp_net_core.png)
<small>Quelle: [Hanselman](http://www.hanselman.com/blog/ASPNET5IsDeadIntroducingASPNETCore10AndNETCore10.aspx)</small>




# Vorteile
* C# 6.0
* alles per >CMD
* echtes Cross-Plattform
* Self-Hosting
* Runtimes Side-by-Side
* F5-Compile-to-Memory
* "optimiert für die Cloud"

![](img/cloud.svg) <!-- .element: style="margin-right: -1000px; margin-top: -500px; width: 800px;" -->




# Nachteile
* WCF und Web Forms
* viele NS fehlen, u.a. System.Drawing<br><small>(man merkt erst das man es braucht wenn es nicht da ist)</small>
* NuGet-Pakete müssen noch migriert werden
* riesige Deplyoment-Pakete (alles drinn




# Hosting

* Kestrel \* (Cross-Plattform, Self-Host )
* [WebListener](https://www.nuget.org/packages/Microsoft.AspNetCore.Server.WebListener/) (Windows, Self-Host)
* IIS + Kestrel
* Nginx + Kestrel

<small>\* Kestrel ist __nicht__ als direkter produktiver Server gedacht</small>
<!-- Kestrel is not certified for direct exposure / https://neelbhatt40.wordpress.com/2016/10/08/weblistener-a-windows-http-server-for-asp-net-core/ -->





### Vor Core
__ASP.NET MVC__  
__ASP.NET Web API__  
__ASP.NET Web Pages__  
__ASP.NET WebForms__  





### Nach Core
__ASP.NET MVC inkl. Web API__  
(__ASP.NET Web Pages__)  




![](img/concept-middleware.png) <!-- .element: style="width: 800px;" -->




```csharp
public class Program
{
    public static void Main(string[] args)
    {
        // yay! endlich
    }
}
```




```csharp
public class Startup
{
    public void Configure(IApplicationBuilder app)
    {
        app.UseStaticFiles();
        app.UseMvc();
    }
}
```




# <i class="fa fa-exclamation-triangle"></i>
Neu:
* Keine Konventionen für HTTP Verben mehr 
  z.B. GetAllBooks() → GET, PostBook() → POST