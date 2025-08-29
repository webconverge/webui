
import "./css/colors.css"

import "./css/select.css"

import select from "./js/select.js"


// initialize component logic

document.querySelectorAll("wui-select").forEach(comp => {

    select(comp)
})


// import font awesome library

const fa = document.createElement("link")

fa.rel = "stylesheet"

fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"

document.head.appendChild(fa)


