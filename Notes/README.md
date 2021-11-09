# Manejo de eventos
> Los eventos en React por estandar  todo lo que empiece por `on` nos va a ayudar a recibir los eventos.

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
> Estos eventos pueden recibir el parametro `e` (event), con  el cual tenemos acceso a los atributos que posee el elemento