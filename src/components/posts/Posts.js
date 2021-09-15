import { Link } from 'react-router-dom'
import Postsub from './Postsub'

export default function Posts({post}) {
    return (
        <div className="card p-4 mb-2 shadow-sm">
            <Link className="display-5 fw-bold link-text text-dark mb-md-2 mb-1" to={`/details/${post.slug_field}`}>
                {post.title}
            </Link>
            <Postsub post={post}/>
            <hr />
            <div className="d-flex flex-row justify-content-start">
                <div>
                    <span className="fw-light pe-2">20</span><i className="bi bi-hand-thumbs-up-fill text-success"></i>
                </div>
                <div className="ms-2">
                    <span className="fw-ligt pe-2">20</span><i className="bi bi-hand-thumbs-down-fill text-warning"></i>
                </div>
                <div className="ms-2">
                    <span className="fw-light pe-2">20</span><i className="bi bi-chat-left-text-fill text-muted"></i>
                </div>
            </div>
        </div>
    )
}
