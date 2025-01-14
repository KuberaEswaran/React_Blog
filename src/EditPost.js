import { useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { format } from "date-fns"
import { useStoreActions,useStoreState } from "easy-peasy"

const EditPost = () => {
  const setEditTitle=useStoreActions((actions)=>actions.setEditTitle)
  const setEditBody=useStoreActions((actions)=>actions.setEditBody)
  const editBody=useStoreState((state)=>state.editBody)
  const editTitle=useStoreState((state)=>state.editTitle)
  const getElementById=useStoreState((state)=>state.getElementById)
  const updatePost=useStoreActions((actions)=>actions.updatePost)

        const navigate=useNavigate()


        const {id}=useParams()
        const data=getElementById(id)
        console.log(editTitle)
        useEffect(()=>{
            if(data){
            setEditBody(data.body)
            
            setEditTitle(data.title)
            }
        },[data])

        const handleEditSubmit=async (id)=>{

              const datetime=format(new Date(),'MMMM dd, yyyy pp')
              const data={id,title:editTitle,datetime,body:editBody}
             updatePost(data)
             navigate('/')
          
            }
       
      
  return (
    <main className="NewPost">
        {editTitle && <>
        <form onSubmit={(e)=>(e.preventDefault()) }>
        <label htmlFor="title">
        Title</label>
        <input 
        type="text"
        id="title"
        value={editTitle}
        onChange={(e)=>{setEditTitle(e.target.value)}}
        required
        />
      
        <br/>
        <label htmlFor="body">
        body</label>
        <textarea
        type="text"
        id="body"
        value={editBody}
        onChange={(e)=>{setEditBody(e.target.value)}}
        required
        />
        <br/>
        <button type="submit" onClick={()=>{handleEditSubmit(Number(id))}
        }>Submit</button>
        </form>
        </>
}
        </main>
  )
}

export default EditPost