# R7 React II - Web textos de teatre
## Nivel 1  - Ejercicio 1
Se mostran algunas líneas de texto importadas desde un file JSON. Se recorre el JSON con el metodo .map() creando un array de componentes Line, a los cuales se les pasa como prop el texto.
## Nivel 2 - Ejercicio 2
Se cambian los estilos de la web a través de la librería styled-components. Se usa en App y en Line, el body se deja con CSS.
## Nivel 3
### Ejercicio 3
Se enseña solo una línea a la vez, empezando por la primera. Se pasa de una línea a otra con los botones Anterior/Següent, los cuales son deshabilitados respectivamente si me encuentro en la primera línea o en la última.
Se añade un estado a App compuesto por: currentLineIndex (indica el index dónde nos encontramos en el array de textos), linesText (array de componentes Line), previousIsEnabled y nextIsEnabled (dos booleanos que determinan si los botones para retroceder o avanzar tienen que estar habilitados o no).
Se añade un metodo handleClick que se activa cuando se clican los botones. Este metodo acepta un número como parametro, que será el incremento deseado en currentLineIndex (-1 si es el botón para retroceder, +1 si es el botón para avanzar). Este metodo modifica currentLineIndex, previousIsEnabled y nextIsEnabled según el botón que se clica. En App luego se enseña solamente la línea de texto que corresponde al currentLineIndex.
### Ejercicio 4
Se vuelven a enseñar todas las líneas, pero la línea que corresponde al currentLineIndex se resalta con fondo amarillo. Se añade a linesText una prop isCurrent, un booleano que devuelve TRUE cuando el index de la línea es igual al currentLineIndex (se inicializa con TRUE para la línea en la posición 0); además el metodo handleClick ahora también modifica esta prop en las líneas. isCurrent se incluye en el componente Line como propiedad del paragrafo que contiene el texto, y usando conditional rendering y styled-components, se resalta con background amarillo la línea corriente.

## Disclaimer
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
