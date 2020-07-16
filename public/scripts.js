let ingr = document.querySelector("#ingr")

ingr.addEventListener('click', function(event){
    let proximo = event.target.nextElementSibling
    if(ingr.innerHTML === "MOSTRAR"){
        proximo.classList.remove('inactive')
        ingr.innerHTML = "ESCONDER"
    }else if(ingr.innerHTML === "ESCONDER"){
        proximo.classList.add('inactive')
        ingr.innerHTML="MOSTRAR"
    }
})

let prep = document.querySelector("#prep")
prep.addEventListener('click', function(event){
    let proximo = event.target.nextElementSibling
    if(prep.innerHTML === "MOSTRAR"){
    proximo.classList.remove('inactive')
    prep.innerHTML = "ESCONDER"
}else if(prep.innerHTML === "ESCONDER"){
    proximo.classList.add('inactive')
    prep.innerHTML="MOSTRAR"
}
})

let info = document.querySelector("#info")
info.addEventListener('click', function(event){
    let proximo = event.target.nextElementSibling
    if(info.innerHTML === "MOSTRAR"){
        proximo.classList.remove('inactive')
        info.innerHTML = "ESCONDER"
    }else if(info.innerHTML === "ESCONDER"){
        proximo.classList.add('inactive')
        info.innerHTML="MOSTRAR"
    }
})


