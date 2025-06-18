# Capitole-Bershka Exercise
¡Hola! Esta es mi propuesta de solución del ejercicio técnico proporcionado por Capitole Consulting para trabajar con Bershka.

## Problema
El ejercicio consiste en implementar un método que, dada una jerarquía de categorías y un nombre de categoría, devuelva la ruta completa que nos indique dónde se encuentra esa categoría en la estructura jerárquica.

## Solución
Primero de todo, iteramos los elementos del array `categories`, y buscamos en él si hay coincidencias del nombre en el primer nivel jerárquico. Si es así, ya lo tenemos. El método devuelve '/' seguido del nombre de la categoría.

Si no es así, habrá que iterar también el array dentro de la propiedad `subcategories`. Para ello, y para no hacer un bucle dentro de otro y así sucesivamente (ya que no sabemos cuántos niveles de jerarquía nos podemos encontrar) lo mejor es llamar al mismo método recursivamente, pero esta vez pasando por parámetro el array `subcategories`.

Dentro del array `subcategories` buscaremos el nombre de la categoría y si lo encontramos lo devolveremos como '/' + el nombre de la categoría y lo guardaremos en la variable `subPath` del método original. Finalmente, como hemos encontrado el subpath, devolveremos el nombre de la categoría que estamos iterando + el subpath, obteniendo así la ruta o path completo. 

Si no se encuentra el subpath en el array `subcategories`, se seguirá iterando de manera recursiva hasta encontrar la coincidencia con el nombre de la categoría. Si no se encuentra, simplemente devolverá un valor null.

## Implementación de Typescript
He querido dar un paso más y añadir tipado al método. 

El array `categories` es un array de `Category`. 

`Category` contiene las propiedades `name`y `subcategories`. Así mismo, siendo una estructura jerárquica, el tipo de `subcategories` es un array de `Category`, igual que el array `categories`.

```
interface Category {
  name: string;
  subcategories: Category[];
}

type Categories = Category[];
```

El método `getCategoryPath` tiene como parámetros el array `categories`, que es del tipo `Categories`, y el `categoryName`, que es una string. Devuelve o el path completo o null si no encuentra coincidencias con el nombre de la cetegoría, por lo tanto devuelve `string | null`.

## Ejecución del ejercicio
He dejado los logs en el código que permiten ver que los outputs son iguales a los esperados. Simplemente hay que ejecutar el archivo Javascript en el terminal:

```
node Claudia_Abate_Ortiz_Bershka_Exercise.js
```
