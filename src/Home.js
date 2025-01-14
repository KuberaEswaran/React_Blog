import Feed from './Feed.js'
import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
const Home = ({error,loading}) => {

  const searchResult=useStoreState((state)=>state.searchResult)
  const post=useStoreState((state)=>state.post)
  const setSearchResult=useStoreActions((actions)=>actions.setSearchResult)
  const search=useStoreState((state)=>state.search)
  
  useEffect(()=>{
    const filteredSearch=post.filter((pos)=>(
        (((pos.title).toLowerCase()).includes(search.toLowerCase())) ||
        (((pos.body).toLowerCase()).includes(search.toLowerCase()))
    ))
    setSearchResult(filteredSearch)
    },[post,search])

    return (
      <main className='Home'>
        {loading && <p>loading...</p>}
        {!loading && error && <p style={{color:"red"}}>Network error</p>}
        {
        !loading && !error && 
        searchResult.length?
        searchResult.map((pos)=>(
          <Feed key={pos.id} pos={pos} />
        )):"no post"}
     
        
      </main>
    )
  }
  
  export default Home