const abrirNav = document.getElementById('abrir-cerrar');
const navContenedor = document.querySelector('.nav-contenedor');
const bloquesSecciones = document.querySelectorAll('.seccion');

const toggleNav = () => {
    navContenedor.classList.toggle("active");
};

bloquesSecciones.forEach(seccion => {
    if(!seccion.classList.contains('mostrado')){
        seccion.classList.add('esconder');
    }
});

const filtroCategoria = e =>{
    if(!e.target.classList.contains('categoria')){
        return;
    }else {
        const categoria = e.target.dataset.categoria;
        console.log(categoria);

        bloquesSecciones.forEach(seccion => {
                seccion.classList.add('esconder');
        });

        const mostrarSeccion = document.getElementById(`seccion-${categoria}`);
        if(mostrarSeccion) {
            mostrarSeccion.classList.remove('esconder');
        }
        
        setTimeout(()=>{navContenedor.classList.toggle("active")},100);
    }
};

const init = () => {
    abrirNav.addEventListener('click',toggleNav);
    navContenedor.addEventListener('click',filtroCategoria);
}

init();