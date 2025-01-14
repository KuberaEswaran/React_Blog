import {Link} from 'react-router-dom'

const Feed = ({pos}) => {
  return (
    <article className="post">
        <Link to={`/post/${pos.id}`}>
        <h3 >{pos.title}</h3>
        <p className="postdate">{pos.datetime}</p>
        </Link>
        <p className="postbody">{pos.length<=25?pos.body:pos.body.slice(0,24)}</p>
    </article>
  )
}

export default Feed