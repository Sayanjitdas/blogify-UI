
import { Link } from 'react-router-dom'
import thumb from '../../assets/thumb.jpg'
import './post.css'

export default function Postsub({post}) {
    return (
        <div className="d-md-flex flex-row justify-content-between align-items-center">
            <Link to={`/profile/${post.author.email}`}>
                <div className="link-text">
                    <img className="img-thumbnail rounded-circle" src={post.author.profile_pic ? post.author.profile_pic : thumb } alt="author" width="50px" />
                    <p className="text-muted mb-0 text-small">{post.author.email}</p>
                </div>
            </Link>
            <div className="text-md-end my-1 my-md-0">
                <p className="text-muted mb-0 text-small">{post.created_date}</p>
                <p className="text-muted mb-0 text-small">{post.created_time}</p>
            </div>
        </div>
    )
}
