import {Link } from 'react-router-dom'
import {useStoreState,useStoreActions} from 'easy-peasy'
const Nav = () => {
    const search=useStoreState((state)=>state.search)
    const setSearch=useStoreActions((actions)=>actions.setSearch)
    return (
      <nav className="Nav">
        <form className="searchForm" onSubmit={(e)=>(e.preventDefault())}>
          <label htmlFor="search">search post  </label>
          <input 
            id="search"
            type="text"
            placeholder="Search Post"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }
  
  export default Nav