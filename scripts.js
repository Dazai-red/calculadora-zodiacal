import signs from './signs.json' assert {type: 'json'}

// guardamos el array de objetos en la variable signs cuando hacemos el import (es necesario modificar etiqueta script en html)

const form = document.getElementById('form')
const range = document.getElementById('range')
const day = document.getElementById('day')
const month = document.getElementById('month')
const date = document.getElementById('date')
const output = document.getElementById('output')
const choose = document.getElementById('choose')

range.addEventListener('change', (e) => {
    day.textContent = e.target.value
    date.textContent = `${day.innerText} de ${month.value}`
    const signId = getSignId(day.innerText,month.value)
    printSign(signId)
})

month.addEventListener('change', (e) =>{
    date.textContent = `${day.innerText} de ${e.target.value}`
    const signId = getSignId(day.innerText,e.target.value)
    printSign(signId)
})

choose.addEventListener('click', (e)=>{
    e.preventDefault()
    form.textContent = ''
    createSignButtons()
})

const getSignId = (day,month) =>{
    day=parseInt(day)
    switch(month){
        case 'Enero':
            if(day >= 20){
                // Capricornio
                return 10
            }else{
                // acuario
                return 11
            }
        case 'Febrero':
            if(day <= 19){
                // acuario
                return 11
            }else if(day >= 20){
                // piscis
                return 12
            }
        case 'Marzo':
            if(day <= 20){
                // acuario
                return 11
            }else if(day >= 20){
                // aries
                return 1
            }
        case 'Abril':
            if(day <= 20){
                // aries
                return 1
            }else if(day >= 21){
                // tauro
                return 2
            }
        case 'Mayo':
            if(day <= 20){
                // tauro
                return 2
            }else if(day >= 21){
                // geminis
                return 3
            }
        case 'Junio':
            if(day <= 20){
                // geminis
                return 3
            }else if(day >= 21){
                // cancer
                return 4
            }
        case 'Julio':
            if(day <= 20){
                // cancer
                return 4
            }else if(day >= 20){
                // leo
                return 5
            }
        case 'Agosto':
            if(day <= 20){
                // leo
                return 5
            }else if(day >= 21){
                // virgo
                return 6
            }
        case 'Septiembre':
            if(day <= 20){
                // virgo
                return 6
            }else if(day >= 21){
                // libra
                return 7
            }
        case 'Octubre':
            if(day <= 20){
                // libra
                return 7
            }else if(day >= 21){
                // escorpio
                return 8
            }
        case 'Noviembre':
            if(day <= 20){
                // escorpio
                return 8
            }else if(day >= 21){
                // sagitario
                return 9
            }
        case 'Diciembre':
            if(day <= 20){
                // sagitario
                return 8
            }else if(day >= 21){
                // capricornio
                return 6
            }
    }
}

const printSign = (id) => {
    const results = signs.filter(function (signs) { return signs.id == id; });
    const objectSign = results[0]
    console.table(objectSign)
    const fragment = document.createDocumentFragment()
    const imgContainer = document.createElement('DIV')
    imgContainer.classList.add('img-container')
    const img = document.createElement('IMG')
    img.setAttribute('src', objectSign.imagePath)
    img.setAttribute('alt', 'logo del signo '+objectSign.name)
    imgContainer.appendChild(img)
    const header = document.createElement('H2')
    header.innerText = objectSign.name
    const idealPairs = document.createElement('DIV')
    idealPairs.classList.add('ideal-pair-container')
    idealPairs.innerText = objectSign.idealPair
    const text = document.createElement('DIV')
    text.innerHTML = objectSign.personality
    fragment.appendChild(imgContainer)
    fragment.appendChild(header)
    fragment.appendChild(idealPairs)
    fragment.appendChild(text)
    output.innerHTML=''
    output.append(fragment)
}

const createSignButtons = () => {
    let fragment = document.createDocumentFragment()
    
    for(const sign of signs){
        const button = document.createElement('BUTTON')
        button.textContent = sign.name
        button.classList.add('btn')
        button.classList.add('btn--info')
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            printSign(sign.id)
        })
        fragment.appendChild(button)
    }
    form.appendChild(fragment)
}
