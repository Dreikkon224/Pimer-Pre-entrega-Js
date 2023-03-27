let precioItem;
let cantidad;
let total=0;
let seguir;
let nombreUser;

nombreUser = prompt("Porfavor ingrese su nombre")

do
{
    precioItem = parseFloat(prompt("Ingrese precio del item"));
    if(precio <= 0)
    {
        alert(`El precio no puede ser 0 o menor a 0!`);
    }
    else{
        cantidad = parseInt(prompt("ingrese su cantidad"));
        total = total + precioItem*cantidad;
        seguir = prompt ("Desea ingresar otro item? s/n");
    }
}while(seguir == 's');

alert(`El total es: ${total}`);