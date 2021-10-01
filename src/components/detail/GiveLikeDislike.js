import { useState } from "react/cjs/react.development"

const likedislikestyle = {
    like: "bi bi-hand-thumbs-up",
    likeFilled: "bi bi-hand-thumbs-up-fill text-muted"
} 

export default function GiveLikeDislike({initlikedisabled,initdislikedisabled,initlike,initdislike,postLike,postDislike}) {
    const [like,setLike] = useState(likedislikestyle[initlike])
    const [dislike,setdislike] = useState(likedislikestyle[initdislike])
    const [likedisabled,setlikeDisabled] = useState(initlikedisabled)
    const [dislikedisabled,setdislikeDisabled] = useState(initdislikedisabled)

    const LikePostHandler = async () => {
        let response = await postLike()
        if(response > 0){
            setLike(likedislikestyle.likeFilled)
            setdislike(likedislikestyle.like)
            setlikeDisabled(true)
            setdislikeDisabled(false)
        }
    }
    
    const DisLikePostHandler = async () => {
        let response = await postDislike()
        console.log(response)
        if(response > 0){
            setLike(likedislikestyle.like)
            setdislike(likedislikestyle.likeFilled)
            setlikeDisabled(false)
            setdislikeDisabled(true)
        }
    }

    return (
        <div className="mt-5 d-inline-block">
            <button className="btn btn-sm" disabled={likedisabled} onClick={LikePostHandler}>
                <span className="px-2">Like</span><i className={like}></i>
            </button>
            <button className="btn btn-sm ms-4" disabled={dislikedisabled} onClick={DisLikePostHandler}>
                <span className="px-2">DisLike</span><i className={dislike}></i>
            </button>
        </div>
    )
}
