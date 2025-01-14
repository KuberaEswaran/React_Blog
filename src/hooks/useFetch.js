import {useEffect,useState} from 'react'
import axios from 'axios'

const useFetch=(dataUrl)=>{
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        const source=axios.CancelToken.source()

        const fetch=async (url)=>{
            try{
            const response=await axios.get(url,{
                cancelToken:source.token
            })
            setData(response.data)
            console.log(data)
            setLoading(false)
            setError(null)
        }
        catch(err){
            console.log(err)
            console.log('not fetching data')
            setError(err)
        }
        finally{
            setLoading(false)
        }

        }
        fetch(dataUrl)

        return ()=>{source.cancel('hi')}

    },[dataUrl])

    return {data,error,loading}
}

export default useFetch