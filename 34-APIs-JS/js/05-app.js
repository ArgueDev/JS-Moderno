document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('reprodcuir');
    } else {
        console.log('pausa');
    }
})