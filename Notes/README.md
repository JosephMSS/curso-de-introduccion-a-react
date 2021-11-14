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
