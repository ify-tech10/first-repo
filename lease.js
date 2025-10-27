const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
 const select = dropdown.querySelector('.select')
 select.addEventListener("click", () => {
    

 const caret = dropdown.querySelector('.caret')
 const menu = dropdown.querySelector('.menu')
 const options = dropdown.querySelectorAll('.menu li')
 const selected = dropdown.querySelector('.selected')


select.addEventListener('click', () => {
    select.classList.toggle('select-clicked')

    caret.classList.toggle('caret-rotate')

    menu.classList.toggle('menu-open')

})

options.forEach(options => {

    options.addEventListener('click', () => {

        selected.innertext = options.innertext;

        select.classList.remove('select-clicked')

        caret.classList.remove('caret-rotate')

        menu.classList.remove('menu-open')

        options.foreach(options => {
            options.classList.remove('active')
        })
        options.forEach(options => {
            options.classList.add('active')
        })
    })
})
 })
 })


