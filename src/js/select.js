

/*

    --html template--

*/

/*

    <wui-select>
        <button>
            <span></span>
            <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div>
            <button>one</button>
            <button>two</button>
            <button>three</button>
            <button>four</button>
        </div>
    </wui-select>

*/



/*

    --logic--

*/

export default function select(ref){

    const itemList = ref.querySelector("div")

    const icon = ref.querySelector("i")

    let currentItem = ref.querySelector("div button:first-child ")
    
    currentItem.setAttribute("selected", "")
    
    ref.querySelector("button > span").innerHTML = currentItem.innerHTML
    
    ref.querySelectorAll("div button").forEach(item => {
       
        item.addEventListener("click", ()=>{

            itemList.removeAttribute("open")

            icon.removeAttribute("open")

            currentItem.removeAttribute("selected")

            currentItem = item

            currentItem.setAttribute("selected", "")

            ref.querySelector("button > span").innerHTML = currentItem.innerHTML
        })
    })

    ref.querySelector("button").addEventListener("click", ()=>{

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

