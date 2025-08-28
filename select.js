


/*

    -------html template--------

    <div class="webui-select">
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
    </div>

*/


/*

    -------style--------

*/
const style = `

    .webui-select{
        position:relative;
        width:100px;
        border:1px solid black;

        &>ul{
            position:absolute;
            top:100%;
            display:flex;
            flex-direction:column;
            border:1px solid red;
        }
    }

`

/*

    -------script--------

*/
function script(ref){

    // initializing select with the first item

    ref.querySelector("&> button > span").innerHTML = ref.querySelector("&> ul > button:first-child").innerHTML

}



export const select = {
    
    style:style, 
    script:script
}






