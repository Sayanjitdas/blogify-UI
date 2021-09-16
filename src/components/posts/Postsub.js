
import thumb from '../../assets/thumb.jpg'

export default function Postsub({post}) {
    return (
        <div className="d-md-flex flex-row justify-content-between align-items-center">
            <div className="link-text">
                <img className="img-thumbnail rounded-circle" src={post.author.profile_pic ? post.author.profile_pic : thumb } alt="author" width="50px" />
                <p className="text-muted mb-0">{post.author.email}</p>
            </div>
            <div className="text-md-end my-1 my-md-0">
                <p className="text-muted fs-6 mb-0">{post.created_date}</p>
            </div>
        </div>
    )
}
