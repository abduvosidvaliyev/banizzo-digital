let fix = document.querySelector(".fix")

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        fix.style.display = "flex" 
    }
    else{
        fix.style.display = "none"
    }

})

let search = document.querySelector(".bi-search")
let bi = document.querySelector(".bi-x")

search.addEventListener("click", () => {
    search.style.display = "none"
    bi.style.display = "block"
    let inp = document.createElement("input")
    inp.classList.add("input")
    document.body.appendChild(inp)
    inp.setAttribute("placeholder", "Search")

    bi.addEventListener("click", () => {
        search.style.display = "block"
        bi.style.display = "none"
        document.body.removeChild(inp)
    })
})

let togglee = document.querySelector(".toggle-div")
let divv = document.querySelector(".toggle-div div")
let h11 = document.querySelector(".h11")
let h12 = document.querySelector(".h12")
let h13 = document.querySelector(".h13")

let fal = true

togglee.addEventListener("click", () => {
    if (fal) {
        divv.style.marginLeft = "50px"
        fal = false
        h11.innerHTML = "$59"
        h12.innerHTML = "$99"
        h13.innerHTML = "$149"
    } else {
        divv.style.marginLeft = "0px"
        fal = true
        h11.innerHTML = "$39"
        h12.innerHTML = "$59"
        h13.innerHTML = "$99"
    }
})