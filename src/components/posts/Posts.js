import { Link } from 'react-router-dom'
import faceIcon from '../../assets/face.jpg'
import thumb from '../../assets/thumb.jpg'

export default function Posts({post}) {
    return (
        <div className="card p-4 mb-2 shadow-sm" key={post.id}>
            <Link className="display-5 fw-bold link-text text-dark mb-md-2 mb-1" to="/">
                {post.title}
            </Link>
            <div className="d-md-flex flex-row justify-content-between align-items-center">
                <Link className="link-text" to="/login">
                    <img className="img-thumbnail rounded-circle" src={thumb} alt="author" width="50px" />
                    <p className="text-muted mb-0">{post.author}</p>
                </Link>
                <div className="text-md-end my-1 my-md-0">
                    <p className="text-muted fs-6 mb-0">Wed Sep 01 2021</p>
                </div>
            </div>
            <hr />
            <div className="d-flex flex-row justify-content-start">
                <div>
                    <span className="fw-light pe-2">20</span><i class="bi bi-hand-thumbs-up-fill text-success"></i>
                </div>
                <div className="ms-2">
                    <span className="fw-ligt pe-2">20</span><i class="bi bi-hand-thumbs-down-fill text-warning"></i>
                </div>
                <div className="ms-2">
                    <span className="fw-light pe-2">20</span><i class="bi bi-chat-left-text-fill text-muted"></i>
                </div>
            </div>
        </div>
    )
}
