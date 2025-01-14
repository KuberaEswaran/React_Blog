
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'

const NewPost = () => {
  const navigate=useNavigate()
  const savePost=useStoreActions((actions)=>actions.savePost)
  const setTitle=useStoreActions((actions)=>actions.setTitle)
  const setBody=useStoreActions((actions)=>actions.setBody)
  const body=useStoreState((state)=>state.body)
  const title=useStoreState((state)=>state.title)
  const post=useStoreState((state)=>state.post)
  
   const createPost= async (e)=>{
      e.preventDefault()
        const id=post.length?String(Number(post[post.length-1].id)+1):"1";
        const datetime=format(new Date(),'MMMM dd, yyyy pp')
        const data={id,title,datetime,body}
        savePost(data)
        navigate('/')
        
    }
   
    return (
      <main className="NewPost">
        <form onSubmit={createPost} className='newPostForm'>
        <label htmlFor="title">
        Title</label>
        <input 
        type="text"
        id="title"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        required
        />
      
        <br/>
        <label htmlFor="body">
        body</label>
        <textarea
        type="text"
        id="body"
        value={body}
        onChange={(e)=>{setBody(e.target.value)}}
        required
        />
        <br/>
        <button>Submit</button>
        </form>
        
        </main>
    )
  }
  
  export default NewPost