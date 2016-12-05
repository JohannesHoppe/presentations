![TypeScript Logo](img/logos/typescript-logo.svg) <!-- .element: width="50%" -->




## Wieso TypeScript
<ul class="fragments">
  <li class="fragment">Neuste JS-Features</li>
  <li class="fragment">Abwärtskompatibilität</li>
  <li class="fragment">Typsystem ermöglicht besseres Tooling</li>
  <li class="fragment">Weniger Fehleingaben</li>
  <li class="fragment">Fehler schneller erkennen</li>
  <li class="fragment">Bessere Dokumentation bereits in der IDE</li>
</ul>
![TypeScript](img/typescript-es6-es5.jpg) <!-- .element: width="40%" style="margin-top: -200px; margin-right: -300px;" -->




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




# <i class="fa fa-exclamation-triangle"></i>
### .vscode/settings.json

```js
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
