import {useState,useEffect} from 'react'

const useWindowSize=()=>{
    const [windowsize,setWindowSize]=useState({
        width:undefined,
        height:undefined
    })
    useEffect(()=>{
        const initialSize=()=>{
            setWindowSize(
                {
                    width:window.innerWidth,
                    height:window.innerHeight
                }
            )
        }
        initialSize()
        window.addEventListener("resize",initialSize)
        return ()=>{window.removeEventListener("resize",initialSize)}
    },[])
    return windowsize
}

export default useWindowSize
