

/*

    html template

*/

/*

    <wui-select>
        <button>
            <span></span>
            <i class="fa-solid fa-chevron-down"></i>
        </button>
        <ul>
            <li><button>one</button></li>
            <li><button>two</button></li>
            <li><button>three</button></li>
            <li><button>four</button></li>
        </ul>
    </wui-select>

*/



/*

    script

*/

export default function select(ref){

    const itemList = ref.querySelector("ul")

    const icon = ref.querySelector("i")

    let currentItem = ref.querySelector("li:first-child button")
    
    currentItem.setAttribute("selected", "")
    
    ref.querySelector("&>button > span").innerHTML = currentItem.innerHTML
    
    ref.querySelectorAll("li button").forEach(item => {
       
        item.addEventListener("click", ()=>{

            itemList.removeAttribute("open")

            icon.removeAttribute("open")

            currentItem.removeAttribute("selected")

            currentItem = item

            currentItem.setAttribute("selected", "")

            ref.querySelector("&>button > span").innerHTML = currentItem.innerHTML
        })
    })

    ref.querySelector("&>button").addEventListener("click", ()=>{

        if(itemList.hasAttribute("open") && icon.hasAttribute("open")){
            
            itemList.removeAttribute("open")

            icon.removeAttribute("open")
        }
        else{
            
            itemList.setAttribute("open", "")

            icon.setAttribute("open", "")
        }
    })

    window.addEventListener("click", e => {

        if(!ref.contains(e.target)){

            itemList.removeAttribute("open")

            icon.removeAttribute("open")
        }
    })

}

