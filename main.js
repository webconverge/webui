


import { select } from "select.js"


// importing font awesome library

const fa = document.createElement("link")

fa.rel = "stylesheet"

fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"

document.head.appendChild(fa)



// adding composnents style

const style = ""

style += select.style

const sheet = new CSSStyleSheet()

sheet.replaceSync(style)

document.adoptedStyleSheets = [sheet]


// initializing component logic

document.querySelectorAll(".webui-select").forEach(component => {
    
    select.script(component)

})