export default function LikeDisLikeCom({post}) {
    return (
        <div className="d-flex flex-row justify-content-start">
        <div className="text-small">
            <span className="fw-light text-muted pe-2">{post.likes}</span><i className="bi bi-hand-thumbs-up-fill text-success"></i>
        </div>
        <div className="text-small">
            <span className="fw-ligt text-muted p-2">{post.dislikes}</span><i className="bi bi-hand-thumbs-down-fill text-warning"></i>
        </div>
        {/* <div className="ms-2">
            <span className="fw-light pe-2">20</span><i className="bi bi-chat-left-text-fill text-muted"></i>
        </div> */}
    </div>
    )
}
