import { useEffect, useState } from "react/cjs/react.development"

const likedislikestyle = {
    like: "bi bi-hand-thumbs-up",
    likeFilled: "bi bi-hand-thumbs-up-fill text-muted"
} 

export default function GiveLikeDislike({initdisabled,initlike,postLike}) {
    const [like,setLike] = useState(likedislikestyle[initlike])
    const [disabled,setdDisabled] = useState(initdisabled)
    
    const LikePostHandler = async () => {
        let response = await postLike()
        if(response > 0){
            setLike(likedislikestyle.likeFilled)
            setdDisabled(true)
        }
    }
    

    return (
        <div className="mt-5 d-inline-block">
            <button className="btn btn-sm" disabled={disabled} onClick={LikePostHandler}>
                <span className="px-2">Like</span><i className={like}></i>
            </button>
            <button className="btn btn-sm ms-4"><span className="px-2">DisLike</span><i className="bi bi-hand-thumbs-down"></i></button>
        </div>
    )
}
