function total(){
    let precio = 49990;
    let cantidad = document.querySelector('.multiplicador').value;
    let final = Number(precio) * Number(cantidad);
        document.querySelector('.resultado').innerHTML = '$' + final;
        document.querySelector('.cantidad').innerHTML = cantidad;
    let elegido = document.querySelector('.color').value;
    let coloreado = document.querySelector('.color_picker');
        coloreado.style.backgroundColor = elegido;
        elegido.innerHTML = coloreado;

}