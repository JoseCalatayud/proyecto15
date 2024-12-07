$(function () {
    const contenedorMaestro = $("#maestro");
    const contenedorDetalle = $("#detalle");
    var solicitudes = [
        {
            "id": 1,
            "nombre": "Jose",
            "apellidos": "Calatayud Ruiz",
            "edad": 34,
            "direccion": "Calle Mayor 123, Madrid",
            "profesion": "Ingeniero de software",
            "correo": "jose.calatayud@example.com"
        },
        {
            "id": 2,
            "nombre": "Roque",
            "apellidos": "Calatayud Marcos",
            "edad": 100,
            "direccion": "Avenida Libertad 45, Barcelona",
            "profesion": "Jugador de futbol",
            "correo": "roque.calatayud@example.com"
        },
        {
            "id": 3,
            "nombre": "Vanessa",
            "apellidos": "Marcos Mosquera",
            "edad": 29,
            "direccion": "Calle Falsa 456, Valencia",
            "profesion": "Médica",
            "correo": "vanessa.marcos@example.com"
        },
        {
            "id": 4,
            "nombre": "Sandra",
            "apellidos": "Marcos Mosquera",
            "edad": 32,
            "direccion": "Calle Sol 78, Sevilla",
            "profesion": "Arquitecta",
            "correo": "sandra.marcos@example.com"
        },
        {
            "id": 5,
            "nombre": "Nacho",
            "apellidos": "Calvo Vega",
            "edad": 40,
            "direccion": "Plaza Mayor 90, Bilbao",
            "profesion": "Abogado",
            "correo": "nacho.calvo@example.com"
        },
        {
            "id": 6,
            "nombre": "Rosa",
            "apellidos": "Mosquera Azcona",
            "edad": 36,
            "direccion": "Calle Luna 23, Zaragoza",
            "profesion": "Contadora",
            "correo": "rosa.mosquera@example.com"
        },
        {
            "id": 7,
            "nombre": "Amparo",
            "apellidos": "Ruiz Gutierrez",
            "edad": 45,
            "direccion": "Calle Río 12, Salamanca",
            "profesion": "Profesora",
            "correo": "amparo.ruiz@example.com"
        },
        {
            "id": 8,
            "nombre": "Fernando",
            "apellidos": "Calvo Marcos",
            "edad": 28,
            "direccion": "Avenida Paz 67, Málaga",
            "profesion": "Diseñador gráfico",
            "correo": "fernando.calvo@example.com"
        },
        {
            "id": 9,
            "nombre": "Lucia",
            "apellidos": "Calatayud Ruiz",
            "edad": 22,
            "direccion": "Calle Verde 89, Granada",
            "profesion": "Estudiante de arte",
            "correo": "lucia.calatayud@example.com"
        },
        {
            "id": 10,
            "nombre": "Jose",
            "apellidos": "Calatayud Marcos",
            "edad": 38,
            "direccion": "Calle Roble 100, Valencia",
            "profesion": "Analista de datos",
            "correo": "jose.marcos@example.com"
        }
        
    ];
    
    ;
    function crearMaestroTabla(array) {
        let longitudTabla  = solicitudes.length;
        contenedorMaestro.append($('<table>').append($('<thead>').append($('<th>Nombre</th>')).append($('<th>Apellidos</th>'))));
        
        $('table').append($('<tbody>'));
        let contador = 0;
        array.forEach(element => {
            $('tbody').append($('<tr>').append($('<td>').text(element.nombre)))
            $('tr').eq(contador).append($('<td>').text(element.apellidos)).append($('<button>').text('VER DETALLES').on('click', ()=> mostrarDetalle(element.id)))
            contador++;
        });
        


    }
    crearMaestroTabla(solicitudes);
    
    function mostrarMaestro(array) {
        array.forEach(element => {
            $('<li>').text(element.nombre).append(($('<button>')).text('Ver detalles').addClass('botones')).on('click',()=>{mostrarDetalle(element.id)}).appendTo($('<ul>').appendTo(contenedorMaestro))
            $('<input type="hidden">').text('Id: ').val(element.id).appendTo($('#detalle'))
        });
    }

    function mostrarDetalle(id) {

        contenedorDetalle.empty();
        solicitudes.forEach(element => {
            if(element.id === id){

                $('<label for="nombre">').text('Nombre: ').appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<input type="text" name="nombre" readonly>').val(element.nombre).appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<label for="apellidos">').text('Apellidos: ').appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<input type="text" name="apellidos" readonly>').val(element.apellidos).appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<label for="Edad">').text('Edad: ').appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<input type="text" name="edad" readonly>').val(element.edad).appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<label for="direccion">').text('Dirección: ').appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<input type="text" name="direccion" readonly>').val(element.direccion).appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<label for="profesion">').text('Profesión: ').appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<input type="text" name="profesion" readonly>').val(element.profesion).appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<label for="correo">').text('E-mail: ').appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<input type="text" name="correo" readonly>').val(element.correo).appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
                $('<br>').appendTo($('#detalle'))
            }

        });
    }
    




})
