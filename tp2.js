console.log("Bienvenido a Mercado")

let producto = prompt("Ingrese el producto");
let precioProducto = parseInt(prompt("Ingrese el precio"));
let cantidadProducto = parseInt(prompt("Ingrese la cantidad a comprar"));
let cuotasProducto = parseInt(prompt("Ingrese en cuantas cuotas 3/6/12"));

function precioTotal (precioProducto, cantidadProducto){
    let precio = precioProducto * cantidadProducto;
    return precio;
}

function precioEnCuotas(){
    if(cuotasProducto == 3){
        let porx3 = ((precioTotal(precioProducto, cantidadProducto) * 15) / 100);
        let precioFinal = precioTotal(precioProducto, cantidadProducto) + porx3;
        return ("El precio en 3 cuotas de es de " + precioFinal);
    }
    else if(cuotasProducto == 6){
        let porx6 = ((precioTotal(precioProducto, cantidadProducto) * 30) / 100);
        let precioFinal = precioTotal(precioProducto, cantidadProducto) + porx6;
        return ("El precio en 6 cuotas de es de " + precioFinal);
    }
    else(cuotasProducto == 12);{
        let porx12 = ((precioTotal(precioProducto, cantidadProducto) * 70) / 100);
        let precioFinal = precioTotal(precioProducto, cantidadProducto) + porx12;
        return ("El precio en 12 cuotas de es de " + precioFinal);
    };
}

console.log(precioEnCuotas());



