# Install Marathon




## .NET Core 1.1 (Command Line)

* https://www.microsoft.com/net/core
* Direkter Windows Download: https://go.microsoft.com/fwlink/?LinkID=835014
* Hinweis: Visual Studio 2015 / 2017 wird nicht benötigt




## Node.js v6 

* https://nodejs.org/
* Direkter Windows Download: https://nodejs.org/dist/v6.9.1/node-v6.9.1-x64.msi




## Visual Studio Code (optional)

* https://code.visualstudio.com/
* Direkter Windows Download: https://go.microsoft.com/fwlink/?LinkID=623230




## Windows Build Tools
* nur unter Windows
* nachdem Node.js installiert wurde

```bash
npm install -g windows-build-tools
```




## Yeoman
* nachdem Node.js installiert wurde

```bash
npm install -g yo
```




## ASP.NET Core + Angular Seeed
<small>(aspnet/JavaScriptServices)</small>
```bash
$ npm install -g yo generator-aspnetcore-spa
$ yo aspnetcore-spa
$ dotnet run
```
oder
```bash
$ git clone https://github.com/JohannesHoppe/angularCore.git .
```




## Hinweis: bei Github Clone 
```bash
$ dotnet restore
$ npm install
$ npm run fixme
$ dotnet run
```
→ siehe project.json / [Issue #99](https://github.com/aspnet/JavaScriptServices/issues/99#issuecomment-221802504)

<!--
Execute webpack --config webpack.config.vendor.js before run application.
This issue addressed to new CLI behaivor. By some reason after dotnet restore it not run second command from prepare section of project.json by default.
-->