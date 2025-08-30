

/*

    --section tracker--

*/

/*

    Allow to style header item when the corresponding section reach a given threshold

    --input
        data:[
            {
                header: (dom element)

                section: (dom element)
            },

            {
                header: (dom element)

                section: (dom element)
            },

            ...
        ]

        threshold:(string value in pixel)

    --output
        header attribute: active (to allow custom styling) 

*/

export default function sectionTracker(data, threshold){

    let current = null


    window.addEventListener("scroll", ()=>{

        let temp = null

        data.forEach(item => {

            const rect = item.section.getBoundingClientRect()

            if(rect.top <= threshold){
                
                if(temp != null && temp.section.getBoundingClientRect().top < rect.top){

                    temp = item
                }
            }
        })

        if(current != null){

            current.header.removeAttribute("active")

            current = temp
            
            current.header.setAttribute("active", "")
        }

    })    

}





