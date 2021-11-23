# Manejo de eventos

> Los eventos en React por estandar todo lo que empiece por `on` nos va a ayudar a recibir los eventos.

> Estos reciben como parametro una funcion, esto debe ser de esta manera, ya que, de lo constrario el codigo se va a ejecutar apenas se cargue la aplicacion.
> en caso de que se necesite enviar parametros a una funcion esta se puede envolver en una funcion en donde se le envie el parametro necesario:

```
const onClickEvent=(mjs)=>{
    console.log('Mensaje',mjs)
}
...
<button
onClick={()=>{onClickEvent("Mensaje generico")}}
>Enviar<button>
```

> Estos eventos pueden recibir el parametro `e` (event), con el cual tenemos acceso a los atributos que posee el elemento

## Manejo de estado

> Podemos manejar la informacion para que los valores que guardamos en los componentes pueda cambiar en el futuro.

> Para este proyecto se va a crear un estado en el componente padre y lo vamos a pasar por los props a los hijos para que todos ellos puedan reaccionar sin importar el componente con el que interactue el usuario

> Para el uso de estados en funciones se debe usar `React.useState()`.

> Estos `use` se conocen como rectHooks, estos se pueden inicializar pasando un parametro en la funcion `React.useState(Parametro)`

> El `React.useState()` nos va a retornar un array con dos opciones, la primera es el valor del array y el segundo es una funcion `setState()`, que nos permite cambiar el estado.
> Se puede obtener de la siguiente manera:

```
const [state,setState]=React.useState(true)

```

> Estos datos se pueden declarar con cualquier nombre, lo importante es el orden `[0]`=valor del estado,`[1]`=la funcion para cambiar los datos del estado.

## Contando y buscando TODOs

### Render

> Al actualizar el estado react re-renderiza los componentes para que la app reaccione a las interacciones de los usiarios
> Debemos tener cuidado con las re-rederizaciones ya que puede que la app estalle
> Para esta app lo que vamos a hacer es pasar por parametros las funciones `state` y `setState` desde el componente app

### useEffect

> Este se encarga de ejecutar un bloque de codigo una vez react finalize de realizar los calculos y justo antes de renderizar la aplicaion en el navegador.

> En caso de que querramos cambiar este comportamiento useEffect contiene un segundo parametro tipo array `[]` el cual hace que el hook se ejecute si esta variable tiene algun cambio

> Si enviamos esta variable como un array vacio el useEffect solamente se va ejecutar la primera vez que se renderise el componente.

### useContext

> Context nos viene a ayudar cunado tenemos que pasar props de un componete Padre > hijo >...etc, pasar esta cantidad de props en cadena puede ser muy tedioso y dificil de trabajar si son muchos, posr lo que podemos crear una contexto para podes pasar estas porp desde cualquier lado donde se necesiten siempre y cuando nuestros componentes esten suscritos a nuensto contexto

> Para ello primero creamos nuestro contexto con:

```
const claseContext= React createContext()
```

> Creamos una funcion llamada clase`Provider` la cual va a tener toda la logca de las props que necesitamos.
> Ademas esta clase va a retornar a nuestra clase`Context`.`Provider`

```
...
return (
    <claseContext.Provider
      value={{
        props
      }}
    >
      {children}
    </*claseContext.Provider>
  );
...
```

> El atributo `value` va a tener un objeto con todas las props que vayamos a necesitar en nuestros componentes

> Por ultimo, exportamos nuestros `claseContext` y nuestra funcion

```
export { claseProvider, claseContext };

```
