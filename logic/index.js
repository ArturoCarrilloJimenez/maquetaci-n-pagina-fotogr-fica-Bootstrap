const temaOscuro = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'dark')
    document.querySelector('#icono-change-tema').setAttribute('class', 'bi bi-brightness-low-fill')
    document.querySelector('#logo').setAttribute('src', 'images/logo_blanco.png')
    document.querySelector('#logo2').setAttribute('src', 'images/logo_blanco.png')
}

const temaClaro = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'light')
    document.querySelector('#icono-change-tema').setAttribute('class', 'bi bi-moon-stars-fill')
    document.querySelector('#logo').setAttribute('src', 'images/logo.png')
    document.querySelector('#logo2').setAttribute('src', 'images/logo.png')
}

const cambiarTema = () => {
    document.querySelector('body').getAttribute('data-bs-theme') === 'light' ? temaOscuro() : temaClaro()
}