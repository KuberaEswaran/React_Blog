import {createStore,action,computed, thunk} from 'easy-peasy'
import api from './api/posts.js'

export default createStore({
    post:[],
    setPost:action((state,payload)=>{
        state.post=payload;
    }),
    title:'',
    setTitle:action((state,payload)=>{
        state.title=payload;
    }),
    body:'',
    setBody:action((state,payload)=>{
        state.body=payload;
    }),
    search:'',
    setSearch:action((state,payload)=>{
        state.search=payload;
    }),
    editTitle:'',
    setEditTitle:action((state,payload)=>{
        state.editTitle=payload;
    }),
    editBody:'',
    setEditBody:action((state,payload)=>{
        state.editBody=payload;
    }),
    searchResult:[],
    setSearchResult:action((state,payload)=>{
        state.searchResult=payload;
    }),
    postCount:computed((state)=>state.post.length),
    getElementById:computed((state)=>{
        return (id)=>state.post.find((u)=>(u.id).toString()===id)
    }),
    savePost:thunk(async (actions,newPost,helpers)=>{
        const {post}=helpers.getState();

        try{
            const response=await api.post('/posts',newPost)
            actions.setPost([...post,response.data])
            actions.setTitle('')
            actions.setBody('')
            }
            catch(err){
              console.log(err)
            }
    }),
    deletePost:thunk(async (actions,id,helpers)=>{
        const {post}=helpers.getState();

        try{
            await api.delete(`/posts/${id}`)
            actions.setPost(post.filter((pos)=>(pos.id!==id)))
            }
            catch(err){
              console.log(err)
            }
    }),
    updatePost:thunk(async (actions,updatedData,helpers)=>{
        const {post}=helpers.getState();
        const {id}=updatedData
        try{
            const response=await api.put(`/posts/${id}`,updatedData);
            actions.setPost(post.map((pos) => (id === pos.id ? { ...response.data } : pos)))
            actions.setEditTitle('')
            actions.setEditBody('')
            }
            catch(err){
              console.log(err)
            }
    })
    

})