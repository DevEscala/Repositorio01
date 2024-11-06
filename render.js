const $ = selector => document.querySelector(selector)
const $count = $('#count')
const $button = $('button')

$button.addEventListener('click', ()=>{

    //Linea de Error
    /*const count = +$button.innerText
    $count.innerText = count + 1*/
    const count = +$count.innerHTML
    $count.innerHTML = (count + 1).toString()
    

})
window.electronAPI.onUpdateTheme((event, theme)=>{
    const root = document.documentElement
    console.log({theme})
    root.style.setProperty('--scheme',theme)
    //console.log(event,theme)
})