import {useParams,Link, useNavigate} from 'react-router-dom'
import {useStoreActions, useStoreState} from 'easy-peasy'
const Postpage = () => {
  const {id}=useParams()
    const navigate=useNavigate()
    const deletePost=useStoreActions((actions)=>actions.deletePost)
    const getElementById=useStoreState((state)=>state.getElementById)
    const handledelete=(id)=>{
    deletePost(id)
      navigate('/') 
  }

    const data=getElementById(id)
    return (
      <main> 
        <form onSubmit={(e)=>{ e.preventDefault(); handledelete(data.id);}}>
        <article>{data &&
        
        <><h3 >{data.title}</h3>
      <p className="postdate">{data.datetime}</p>
     
      <p className="postbody">{data.body}</p>

      <button type="submit">delete</button>

      <Link to={`/EditPost/${id}`}>
      <button>edit</button>
      </Link>
      </>}

      {
        !data && <p>wrong url</p>
      }
     
      </article>
      </form>
      </main>
      
    )
  }
  
  export default Postpage