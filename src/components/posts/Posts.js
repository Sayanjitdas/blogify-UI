import { Link } from 'react-router-dom'
import Postsub from './Postsub'
import LikeDisLikeCom from './LikeDisLikeCom'

export default function Posts({post}) {
    return (
        <div className="card p-4 mb-2 shadow-sm">
            <Link className="display-5 fw-bold link-text text-dark mb-md-2 mb-1" to={`/details/${post.slug_field}`}>
                {post.title}
            </Link>
            <Postsub post={post}/>
            <hr />
            <LikeDisLikeCom post={post} />
        </div>
    )
}
