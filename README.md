Proyecto Buenas Vibras
Bibliotecas Usadas:
-Bootstrap
-SweetAlert

Firebase:
Se utilizo Firebase para:
-Crear un ID aleatorio y unico a cada producto.
-Crear un ID aleatorio y unico a cada orden donde en la misma se detalla: Nombre, Apellido, Telefono, Email, el prodcuto elegido, la cantidad del mismo, el precio total y fecha y hora en la que se creo la orden.

Inicio:
Pra iniciar la pagina lo primero que hay que hacer es entrar a la terminal e ingresar los siguientes comandos:
-cd comida-comerce para ingresar al proyecto
-npm run dev para inicializar la pagina

Luego de que se inicialice, en la terminal les dara el siguiente link http://localhost:5173/ para que puedan ingresar a la misma.

Al ingresar al link se le mostrara la pagina principal donde se mostraran todos los productos que ofrece Burger Vibras y el precio de cada uno de ellos.
Si el cliente desea comprar o saber mas detalles de alguno de los productos va a poder acceder a cada uno haciendo click sobre el producto que desea, eso lo va redirigir a otra ruta donde 
aparece el producto, su imagen, el stock que tiene actualmente y la opcion de agregar al carrito la cantidad deseada (no se permitira ingresar nùmeros negativos, ni sobrepasar el stock).
Si el cliente desea comprar se puede dirigir al carrito donde le aparecera todos los productos que eligio, dandole la opción de eliminar un producto si se arrepintio, vaciar todo el carrito o finalizar la compra.

Si se vacia el carrito automaticamente le saldra una alerta donde le indicara que el carrito esta vacio y un link que lo reedirije a la pagina principal.
En caso de que se finalice la compra, se lo redirije a un formulario donde el cliente deberá rellenar cada uno de los campos requeridos, en caso de no copmpletar alguno o completarlo de forma incorrecta, saldra un error que no permitira finalizar la compra.
En caso de que se haya rellenado correctamente los campos solicitados, se mostrara una alerta de SwewetAlert donde se le dara al cliente un ID aleatorio creado automaticamente por FIREBASE y se dara un link a la pagina principal.

Espero la pagina sea de tu agrado.
Saludos! 
