
var pedidos = [];
var clienteEncontrado = [];
var productoEncontrado = [];
var nroPedido = 0;
var totalPedido = 0.00;
//fecha
const fechaDeHoy = new Date();

function generarPedidos(){
    console.log('CLIENTES');
    console.table(clientes);

    let menu1 = parseInt(prompt('Ingresa Opcion Deseada\n1-Filtrar Clientes por Nombre\n2-Buscar Cliente\n3-Mostrar Clientes Con Pedidos\n4-Mostrar Pedido\n0-PARA SALIR'));

    while (menu1 != 0) {
        switch (menu1) {
            case 1:
                //filtrado
                let opcion = prompt('Ingrese Nombre Cliente a Filtrar: ');
                filtrarClientes(opcion);
                break;
            case 2:
                //buscar por nombre de cliente
                let encotreCliente = 0;
                let nombre = prompt('Ingresa el Nombre del Cliente a Buscar');
                if (nombre != '') {
                    encotreCliente=buscarCliente(nombre)
                    if (encotreCliente>0){
                        let menu2 = parseInt(prompt('Cliente Seleccionado\n\nID:'+clienteEncontrado.id+'\nNOMBRE:'+clienteEncontrado.name+'\n\n1-Crear Pedido\n0-PARA SALIR'));
                        while (menu2 != 0) {
                            switch (menu2) {
                                case 1:
                                    // console.log('PRODUCTOS');
                                    // console.table(productos);
                                    crearPedido(encotreCliente);
                                    break;
                                default:
                                    break;
                            }
                            menu2 = parseInt(prompt('Cliente Seleccionado\n\nID:'+clienteEncontrado.id+'\nNOMBRE:'+clienteEncontrado.name+'\n\n1-Crear Pedido\n0-PARA SALIR'));
                        }
                    }
                } else {
                    alert('No ingreso ningun Nombre')
                }
                break;
            case 3:
                //funcion para filtrar clientes con pedidos realizados
                clientesConPedidos();
                break;
            case 4:
                //funcion para filtrar un pedido realizado
                //  filtrarPedido();
                alert('Opcion no Disponible.');
                break;
            default:
                alert('Opcion Incorrecta!');
                break;
        }

        menu1 = parseInt(prompt('Ingresa Opcion Deseada\n1-Filtrar Clientes por Nombre\n2-Buscar Cliente\n3-Mostrar Clientes Con Pedidos\n4-Mostrar Pedido\n0-PARA SALIR'));
    }
}


function filtrarClientes(nombre) {
    let filtroCliente = [];

    filtroCliente = clientes.filter(clientes => clientes.name.toLowerCase().includes(nombre.toLowerCase()));
    if(filtroCliente.length > 0){
        console.log('CLIENTES Encotrados con: '+nombre);
        console.table(filtroCliente);
    }else{
        console.log('Ningun Nombre de Cliente Coincide con el dato Ingresado!')
    }
}


function buscarCliente(nombre) {
    clienteEncontrado = clientes.find(clientes => clientes.name.toLowerCase().includes(nombre.toLowerCase()));

    if (clienteEncontrado != undefined) {
        alert(`Cliente encontrado:\nID: ${clienteEncontrado.id} \nNOMBRE: ${clienteEncontrado.name} \nEMAIL: ${clienteEncontrado.email} \nPEDIDO: ${clienteEncontrado.numeroDePedido} \nTOTAL PEDIDO: $ ${clienteEncontrado.totalPedido} \nFECHA PEDIDO: ${clienteEncontrado.fechaPedido}`);
        return clienteEncontrado.id
    } else {
        console.log('Cliente no encontrado');
        return 0
    }
}



function buscarProducto(idProducto) {
    productoEncontrado = productos.find(productos => productos.id===idProducto);

    if (productoEncontrado != undefined) {
        alert(`Producto encontrado:\nID:${productoEncontrado.id} \nDESCRIPCION:${productoEncontrado.nombre} \nPRECIO: $${productoEncontrado.precio}`);
        return productoEncontrado.id
    } else {
        console.log('Producto no encontrado');
        return 0
    }
}

function clientesConPedidos() {
    let filtroClientesPedidos = [];

    filtroClientesPedidos = clientes.filter(clientes => clientes.numeroDePedido > 0);
    if(filtroClientesPedidos.length > 0){
        console.log('CLIENTES CON PEDIDOS');
        console.table(filtroClientesPedidos);
    }else{
        console.log('Ningun Cliente tiene Pedidos!')
    }
}

function crearPedido(idCliente) {
    const pedido = [];
    totalPedido = 0.00;
    
    let menu1 = parseInt(prompt('Cliente Seleccionado\n\nID: '+clienteEncontrado.id+'\nNOMBRE: '+clienteEncontrado.name+'\n\n1-Buscar Producto\n2-Confirmar Pedido y SALIR\n0-PARA SALIR'));
    while (menu1 != 0) {
        switch (menu1) {
            case 1:
                //buscar por id de producto
                console.log('PRODUCTOS');
                console.table(productos);

                let idProducto = parseInt(prompt('Ingresa el ID de Producto a Seleccionar'));
                if (idProducto != 0) {
                    encotreProducto=buscarProducto(idProducto)
                    if (encotreProducto>0){
                        let cantidadProducto = parseInt(prompt('Ingresa Cantidad del Producto Seleccionado'));
                        if (cantidadProducto != 0) {
                            pedido.push({idPedido: nroPedido,idCliente: clienteEncontrado.id,idProducto: productoEncontrado.id,nombreProducto: productoEncontrado.nombre,precioProducto: productoEncontrado.precio,cantidadProducto: cantidadProducto,totalProductos: productoEncontrado.precio*cantidadProducto,fechaPedido: fechaDeHoy});
                            pedidos.push({idPedido: nroPedido,idCliente: clienteEncontrado.id,idProducto: productoEncontrado.id,nombreProducto: productoEncontrado.nombre,precioProducto: productoEncontrado.precio,cantidadProducto: cantidadProducto,totalProductos: productoEncontrado.precio*cantidadProducto,fechaPedido: fechaDeHoy});
                            
                            console.log('PEDIDO Sin Confirmar');
                            console.table(pedido);

                            // acumular segun una columna con reduce
                            totalPedido = pedido.reduce((prev, curr) => prev + curr.totalProductos, 0);

                            console.log('TOTAL PEDIDO: $ '+totalPedido);
                        } else {
                            alert('No ingreso Cantiad del Producto')
                        }
                    }
                } else {
                    alert('No ingreso ningun Id de Producto')
                }
                break;
            case 2:
                //Confirmar Pedido y Salir
                if (pedido.length > 0) {
                    let indice = clientes.findIndex(index => index.id == clienteEncontrado.id);
                    if (indice >= 0) {
                        nroPedido += 1;
                        clientes[indice].numeroDePedido = nroPedido;
                        clientes[indice].totalPedido = totalPedido;
                        console.log('PEDIDO CONFIRMADO.');
                    } else {
                        alert('No se pudo obtener el idice del cliente a actualizar.')
                    }
                } else {
                    alert('Pedido no Generado.')
                }
                break;
            default:
                break;
        }
        menu1 = parseInt(prompt('Cliente Seleccionado\n\nID: '+clienteEncontrado.id+'\nNOMBRE: '+clienteEncontrado.name+'\n\n1-Buscar Producto\n2-Confirmar Pedido y SALIR\n0-PARA SALIR'));
    }
}

function buscarPedido(idPedido) {
    let pedidoEncontrado = pedidos.filter(pedidos => pedidos.id == idPedido);

    if(pedidoEncontrado.length > 0){
        console.log('Datos del Pedido: '+idPedido);
        console.table(pedidoEncontrado);
    } else {
        console.log('Pedido no encontrado');
    }
}

function filtrarPedido(){
    let idPedido = parseInt(prompt('Ingresa Numero de Pedido'));
    if (idPedido != 0) {
        buscarPedido(idPedido);
    } else {
        alert('No ingreso Numero de Pedido.')
    }
}

