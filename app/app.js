function theme() {
    const toggleTheme = document.querySelector('.toggle-theme')

    toggleTheme.addEventListener('click', () => {
        let el = document.documentElement
        if (el.hasAttribute('data-theme')) {
            el.removeAttribute('data-theme')
        } else {
            el.setAttribute('data-theme', 'dark')
        }


    })

}

theme()