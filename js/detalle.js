const urlParams = new URLSearchParams(window.location.search);
        const destino = urlParams.get('destino');
        const destinos = {
            'playa-tropical': {
                titulo: 'Playa Tropical',
                imagen: 'img/saopablo.jpg',
                descripcion: 'Disfruta de unas vacaciones inolvidables en una de las playas más hermosas del mundo. Incluye vuelo ida y vuelta, alojamiento en hotel 5 estrellas, excursiones y actividades acuáticas.'
            },
            'montanas-nevadas': {
                titulo: 'Montañas Nevadas',
                imagen: 'img/argentina.jpg',
                descripcion: 'Experimenta la belleza de las montañas nevadas con este paquete que incluye alojamiento en un resort de lujo, actividades de esquí y transporte desde y hacia el aeropuerto.'
            },
            'ciudad-europea': {
                titulo: 'Ciudad Europea',
                imagen: 'img/malasia.jpg',
                descripcion: 'Explora la rica historia y cultura de una vibrante ciudad europea. El paquete incluye vuelo, alojamiento en un hotel céntrico y tours guiados por la ciudad.'
            }
        };

        const destinoData = destinos[destino];
        if (destinoData) {
            document.getElementById('titulo-destino').textContent = destinoData.titulo;
            document.getElementById('imagen-destino').src = destinoData.imagen;
            document.getElementById('descripcion-destino').textContent = destinoData.descripcion;
        } else {
            document.getElementById('titulo-destino').textContent = 'Destino no encontrado';
            document.getElementById('descripcion-destino').textContent = 'Lo sentimos, no encontramos información sobre el destino seleccionado.';
        }