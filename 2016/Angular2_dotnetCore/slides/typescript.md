![TypeScript Logo](img/logos/typescript-logo.svg) <!-- .element: width="50%" -->




<div class="cross-through">
![TypeScript ES6/ES7](img/es5-es6-typescript.svg) <!-- .element: width="60%" margin-top: 100px;-->
</div>




![TypeScript ES6/ES8](img/es5-es6-es8-typescript.svg) <!-- .element: width="60%" -->




## Wieso TypeScript?

<ul class="fragments">
  <li class="fragment">Neuste JS-Features</li>
  <li class="fragment">Abwärtskompatibilität</li>
  <li class="fragment">Typsystem ermöglicht besseres Tooling</li>
  <li class="fragment">Weniger Fehleingaben</li>
  <li class="fragment">Fehler schneller erkennen</li>
  <li class="fragment">Bessere Dokumentation bereits in der IDE</li>
</ul>




## TS Setup

```bash
$ npm install typescript@2.0.0
```




# Los geht's
<small>[Visual Studio Code einrichten](https://code.visualstudio.com/Docs/languages/typescript)</small>

![TS](img/vscode-ts/typescript_jsconfigintellisense.png)  <!-- .element: align="left" style="margin-left: 170px" -->
![TS](img/vscode-ts/typescript_taskSelection.png)         <!-- .element: align="left" style="margin-left: 170px" -->

handsOn:
* manuell `tsconfig.json` erstellen, IntelliSense: compilerOptions
* `tasks.json` erstellen via F1 > Configure Task Runner  > TypeScript - tsconfig.json
* `Ctrl+Shift+B` - Run Build Task




## Klassen

```typescript
// customer.ts

class Customer {
  // property
  id: number;
  
  // constructor
  constructor(id: number) {
    this.id = id;
  }

  // method
  loadOrders() {
    // load orders soon
  }
}
```

handsOn:
- Lege die Klasse `Customer` an.
- Erstelle eine Instanz.
- Gib die `id` von Customer auf der Konsole aus.




## Arrow Functions
<small>werden wir bei HTTP kennenlernen</small>

```typescript
(param) => { this.do(param); }
```




## ES6-Modulsystem

```typescript
// app.ts

import { Customer } from './customer'

var customer = new Customer(1);
```




## TypeScript debuggen

![Debugging](./img/tooling/typescript-debugging.png)

handson:
```js
// launch.json
{
  "configurations": [
    "program": "${workspaceRoot}/app.js",
    "sourceMaps": true
  ]
}
```




## Module Loader

```bash
$ npm i -g webpack
$ npm i --save-dev webpack typescript ts-loader
```




## Webpack konfigurieren

```js
// webpack.config.js
module.exports = {
  entry: './app.ts',
  output: { filename: 'bundle.js' },
  resolve: {
    extensions: ['', '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  }
};
```




## Webpack ausführen

```bash
$ webpack
```




## Bundle optimieren

```js
module.exports = {
  /* ... */
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: { /* ... */ }
};
```




## Decorators
<small>begleiten uns überall</small>

```typescript
// Class
@Component({...})
@Directive({...})
@Pipe({...})
@Injectable()

// Class properties
@Input()
@Output()
```





## 1. Version: Logging-Decorator
<small>Tipp: es wird nicht Instanzierung bzw. Methodenaufruf geloggt!</small>

```typescript
export function Log(message: string) {
	return function(target, key = null, descriptor = null) {
		console.log(message, target, key, descriptor);
	}
}
```

handsOn:
- Nutze den Decorator `@Log('Lognachricht')`.
- Annotiere 
  - die Klasse `Customer`
  - eine Methode von `Customer`

