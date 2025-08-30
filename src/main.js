
// import font awesome library

const fa = document.createElement("link")

fa.rel = "stylesheet"

fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"

document.head.appendChild(fa)



// import component style and logic

import "./css/colors.css"

import "./css/select.css"

import "./css/nav-00.css"

import select from "./js/select.js"

import nav_00 from "./js/nav-00.js"

import sectionTracker from "./js/sectionTracker.js"



// initialize component logic

document.querySelectorAll("wui-select").forEach(comp => {

    select(comp)
})

document.querySelectorAll("wui-nav-00").forEach(comp => {

    nav_00(comp)
})

window.wuiapi = {
    sectionTracker:sectionTracker
}





