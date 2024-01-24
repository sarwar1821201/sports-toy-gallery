import { useEffect } from "react"

const useTitle=  (title) => {
    useEffect ( ()=>{

       document.title= `${title} - our site `;

    } , [title] )
}

export default useTitle;