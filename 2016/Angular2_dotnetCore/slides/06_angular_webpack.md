![](img/logos/angular2-logo.svg) <!-- .element: style="width:200px; margin-bottom: -10px" -->
# Angular 2<br><small>mit ASP.NET Core Middlewares</small>




![Webpack](./img/tooling/webpack-flow.png)




## Webpack dev middleware

```csharp
app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
    HotModuleReplacement = true
});
```

----

* Normale watch +
* Hot module replacement (HMR) 

aber _NUR_ im Debug Modus




# <i class="fa fa-exclamation-triangle"></i>

```bash
$ set ASPNETCORE_ENVIRONMENT=Development
$ dotnet run
```

![](img/ASPNETCORE_ENVIRONMENT.png)




# Let's code!