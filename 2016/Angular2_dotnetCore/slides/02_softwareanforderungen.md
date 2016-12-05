Ist das wirklich so einfach?




# Install Marathon




## .NET Core 1.1 (Command Line)

* https://www.microsoft.com/net/core
* Direkter Windows Download: https://go.microsoft.com/fwlink/?LinkID=835014
* <small>Hinweis: Visual Studio 2015 / 2017 wird nicht benötigt</small>




![](img/logos/nodejs-logo.svg)
* https://nodejs.org/
* Direkter Windows Download: https://nodejs.org/dist/v6.9.1/node-v6.9.1-x64.msi




![](img/logos/vscode.png)<!-- .element: style="width:200px" -->
* https://code.visualstudio.com/
* Direkter Windows Download: https://go.microsoft.com/fwlink/?LinkID=623230




![Angular 2 TypeScript Snippets for VS Code](img/vscode.gif)  <!-- .element: width="80%" -->
## Visual Studio Code




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




## Fixme!<br><small>clean restore</small>
```bash
$ git clone https://git.io/v1lnP .
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




## VSCode Extensions

![tslint](img/vscode-ts/omnisharp.png) <!-- .element: style="width:120px" -->
![tslint](img/vscode-ts/tslint.svg) <!-- .element: style="width:120px" -->
![tslint](img/vscode-ts/EditorConfig.png) <!-- .element: style="width:120px" -->
![tslint](img/vscode-ts/vscode-icons.png) <!-- .element: style="width:120px" -->
![tslint](img/vscode-ts/autoimport.png) <!-- .element: style="width:120px" -->

* [`ext install csharp`](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
* [`ext install tslint`](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [`ext install EditorConfig`](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [`ext install vscode-icons`](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
* [`ext install autoimport`](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)