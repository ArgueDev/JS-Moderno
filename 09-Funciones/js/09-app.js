const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el id: ${id}`);
    },
    pausar: function () {
        console.log('Pausando');
    },
    borrar: function (id) {
        console.log(`Borrando la cancion ${id}`);
    },
    crearPlaylist: function (playlist) {
        console.log(`Creando la playlist: ${playlist}`);
    },
    reproducirPlaylist: function (playlist) {
        console.log(`Reproduciendo ${playlist}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(15);

reproductor.crearPlaylist('Rock');
reproductor.crearPlaylist('Reguetton');
reproductor.reproducirPlaylist('Electro');