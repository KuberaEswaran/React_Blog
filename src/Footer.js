import { useStoreState } from "easy-peasy"
const Footer = () => {
  const postCount=useStoreState((state)=>state.postCount)
    return (
      <footer className="Footer">
        {postCount} blog {postCount==0?"post":"posts"} 
        </footer>
    )
  }
  
  export default Footer