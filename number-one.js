let precioItem;
let cantidad;
let total=0;
let seguir;
let nombreUser;

nombreUser = prompt("Porfavor ingrese su nombre")

do
{
    precioItem = parseFloat(prompt("Ingrese precio del item"));
    while(precioItem <=0)
    {
        precioItem = parseFloat(prompt("precio invalido, vuelva a ingresarlo"));
    }
    cantidad = parseInt(prompt("ingrese su cantidad"));
    while(cantidad <= 0)
    {
        cantidad = parseInt(prompt("cantidad invalida, vuelve a ingresarla"));
    }
    total = total + precioItem*cantidad;
    seguir = prompt ("Desea ingresar otro item? s/n");
    
}while(seguir == 's');

alert(`El total es: ${total}`);