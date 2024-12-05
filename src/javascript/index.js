$(function () {
    const contenedorMaestro = $("#maestro");
    var solicitudes = [{
        "id": 1,
        "nombre": "Jose",
        "apellidos": "Calatayud Ruiz"
    },
    {
        "id": 1,
        "nombre": "Jose",
        "apellidos": "Calatayud Ruiz"
    },
    {
        "id": 1,
        "nombre": "Jose",
        "apellidos": "Calatayud Ruiz"
    }];
    ;
    solicitudes.forEach(element => {

        $('<li>').text(element.nombre).append(($('<button>')).text('Ver detalles').addClass('botones')).appendTo($('<ul>').appendTo(contenedorMaestro))
        $('<input type="hidden">').text('Id: ').val(element.id).appendTo($('#detalle'))
        $('<label for="nombre">').text('Nombre: ').appendTo($('#detalle'))
        $('<br>').appendTo($('#detalle'))
        $('<input type="text" name="nombre">').val(element.nombre).appendTo($('#detalle'))
        $('<br>').appendTo($('#detalle'))
        $('<label for="apellidos">').text('Nombre: ').appendTo($('#detalle'))
        $('<br>').appendTo($('#detalle'))
        $('<input type="text" name="apellidos">').val(element.apellidos).appendTo($('#detalle'))

    });


})
