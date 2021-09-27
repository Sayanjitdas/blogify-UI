import { useState } from "react/cjs/react.development"

const likedislikestyle = {
    like: "bi bi-hand-thumbs-up",
    likeFilled: "bi bi-hand-thumbs-up-fill text-muted"
} 

export default function GiveLikeDislike({initdisabled,initlike}) {

    const [like,setLike] = useState(likedislikestyle[initlike])
    const [disabled,setdDisabled] = useState(initdisabled)

    //Api call to give like and dislike

    return (
        <div className="mt-5 d-inline-block">
            <button className="btn btn-sm" disabled={disabled}><span className="px-2">Like</span><i className={like}></i></button>
            <button className="btn btn-sm ms-4"><span className="px-2">DisLike</span><i className="bi bi-hand-thumbs-down"></i></button>
        </div>
    )
}
