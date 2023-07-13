function total(){
    const precio = 249990; /*Definición de variable precio. Almacena el valor númerico en ls variable "precio"*/
    let cantidad = document.querySelector('.multiplicador').value; /*Captura el valor definido por el usuario en el input "Cantidad"*/
    let final = Number(precio) * Number(cantidad); /*Almacena el resultado de la multiplicación de precio x cantidad en la variable "final"*/
        document.querySelector('.resultado').innerHTML = '$' + final; /*Reemplaza el span .resultado de "flex_product_total" por el signo $ y el valor almacenado en la variable "final"*/
        document.querySelector('.cantidad').innerHTML = cantidad; /*Reemplaza el span .cantidad de "flex_product_total" por el valor almacenado en la variable "cantidad"*/

        /*Configuración de color*/
    const elegido = document.querySelector('.color').value; /*Captura el color definido por el usuario en el input "Color"*/
    let coloreado = document.querySelector('.color_picker'); /*Almacena en la variable "coloreado" el div .color_picker*/
        coloreado.style.backgroundColor = elegido; /*Iguala el valor almacenado en la variable "elegido" ingresada por el usuario en el input ".color"*/
        elegido.innerHTML = coloreado; /*Reemplaza el contenido de la variable "coloreado"=div por la variable "elegido"=input (transforma el fondo del div al color elegido por el usuario)*/
}