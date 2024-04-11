const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id: ${id}`),
    pausar: () => console.log('Pausando'),
    borrar: id => console.log(`Borrando la cancion ${id}`),
    crearPlaylist: playlist => console.log(`Creando la playlist: ${playlist}`),
    reproducirPlaylist: playlist => console.log(`Reproduciendo ${playlist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Agregando ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }

}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(15);

reproductor.crearPlaylist('Rock');
reproductor.crearPlaylist('Reguetton');
reproductor.reproducirPlaylist('Electro');