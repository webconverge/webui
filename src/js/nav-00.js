
/*

    html template

*/

/*

    <wui-nav-00>
        <a href="">My Site</a>
        <div></div>
        <div>
            <button><i class="fa-solid fa-xmark"></i></button>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <button><i class="fa-solid fa-bars"></i></button>
    </wui-nav-00>


*/

/*

    script

*/

export default function nav_00(ref){

    const navWrapper = ref.querySelector("&>div:last-of-type")
    
    const nav = ref.querySelector("ul")

    const navClose = ref.querySelector("&>div:last-of-type button")

    const navOpen = ref.querySelector("&>button")

    const pageOverlay = ref.querySelector("&>div:first-of-type")

    const resize = new ResizeObserver(entries => {
        
        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 800){

                    if(navWrapper.hasAttribute("mobile")) navWrapper.removeAttribute("mobile")
                    
                    if(nav.hasAttribute("mobile")) nav.removeAttribute("mobile")

                    if(navClose.hasAttribute("mobile")) navClose.removeAttribute("mobile")
                    
                    if(navOpen.hasAttribute("mobile")) navOpen.removeAttribute("mobile")

                    if(navWrapper.hasAttribute("nav-open")) navWrapper.removeAttribute("nav-open")
        
                    if(pageOverlay.hasAttribute("nav-open")) pageOverlay.removeAttribute("nav-open")
                }
                else{
                    
                    if(!navWrapper.hasAttribute("mobile")) navWrapper.setAttribute("mobile", "")
                    
                    if(!nav.hasAttribute("mobile")) nav.setAttribute("mobile", "")

                    if(!navClose.hasAttribute("mobile")) navClose.setAttribute("mobile", "")
                    
                    if(!navOpen.hasAttribute("mobile")) navOpen.setAttribute("mobile", "")
                }
            }
        })
    })

    resize.observe(document.body)

    navOpen.addEventListener("click", ()=>{

        if(!navWrapper.hasAttribute("nav-open")) navWrapper.setAttribute("nav-open", "")
        
        if(!pageOverlay.hasAttribute("nav-open")) pageOverlay.setAttribute("nav-open", "")
    })
    
    navClose.addEventListener("click", ()=>{

        if(navWrapper.hasAttribute("nav-open")) navWrapper.removeAttribute("nav-open")
        
        if(pageOverlay.hasAttribute("nav-open")) pageOverlay.removeAttribute("nav-open")
    })

    pageOverlay.addEventListener("click", e => {

        if(e.target == pageOverlay){

            if(navWrapper.hasAttribute("nav-open")) navWrapper.removeAttribute("nav-open")
        
            if(pageOverlay.hasAttribute("nav-open")) pageOverlay.removeAttribute("nav-open")
        }
    })

    ref.querySelectorAll("ul a").forEach(item => {

        item.addEventListener("click", ()=>{

            if(navWrapper.hasAttribute("nav-open")) navWrapper.removeAttribute("nav-open")
        
            if(pageOverlay.hasAttribute("nav-open")) pageOverlay.removeAttribute("nav-open")

        })
    })
}