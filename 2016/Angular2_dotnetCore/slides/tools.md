## Tooling

![Studentenfutter](./img/tooling/studentenfutter.jpg)  <!-- .element: style="width:50%" -->





![NPM](./img/tooling/npm.png) <!-- .element: style="width:50%" -->

Paketverwaltung durch Node





![NPM-Install](./img/tooling/npm-install.png)





![VS-Code](./img/tooling/vscode.png)

Open Source Editor von Microsoft<br>für die Entwicklung mit TypeScript




![Webpack](./img/tooling/webpack-flow.png)




<i class="ng-shield fa fa-github "></i>
## <a href="https://github.com/angular/angular-cli" style="color: #a1292b" target="_blank">Angular CLI</a>

**version** 1.0.0-beta.17




# <i class="fa fa-github"></i> <i class="ion ion-social-nodejs"></i> <i class="ion ion-social-angular"></i>

```bash
# Wenn ältere Version installiert ist
$ npm uninstall -g angular-cli
$ npm cache clean

$ npm install -g angular-cli@1.0.0-beta.17
```




## Projekt erzeugen

```bash
$ ng new book-rating
$ cd book-rating
$ npm start
```




# <i class="fa fa-exclamation-triangle"></i>
### Prefix nicht vergessen!

```js
// angular-cli.json
{
  "defaults": {
    "prefix": "br"
  }
}
```

```js
// tslint.json
{
  "directive-selector-prefix": [true, "br"],
  "component-selector-prefix": [true, "br"],
}
```




# <i class="fa fa-exclamation-triangle"></i>
### VSCode autosave (.vscode/settings.json)

```js
// settings.json
// Place your settings in this file to overwrite the default settings
{
    "files.autoSave": "onFocusChange"
}
```




