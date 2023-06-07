import { useEffect } from "react"

export const useTitle = (event) => {
    useEffect(()=>{
        document.title=`AskMovie/${event}`;
    })
  return (
    <>

    </>
    
  )
}
