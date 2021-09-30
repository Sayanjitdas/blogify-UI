import './detail.css'
import Postsub from '../posts/Postsub'
import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/context'
import { useParams } from 'react-router-dom'
import { articleDetails,LikePost,disLikePost } from '../../apiservices'
import Loader from '../loader/Loader'
import GiveLikeDislike from './GiveLikeDislike'

export default function Details() {

    const globalData = useContext(GlobalContext)
    const [post,setPost] = useState(null)
    //get the slug from params
    const {slug} = useParams()

    //API call to detail posts after fetching the id from Params
    useEffect(() => {
        (async() => {
            let response = await articleDetails(slug,globalData.token.token)
            setPost(response)
        })()
        
    },[])

    //API call to like the post
    const postLike = async () => {
        let data = {
            article_id: post.id,
            user: globalData.userData.user
        }
        await LikePost(globalData.token.token,data)
        let response = await articleDetails(slug,globalData.token.token)
        setPost(response)
        return response.likes
    }

    //API call to dislike the post
    const postDisLike = async () => {
        let data = {
            article_id: post.id,
            user: globalData.userData.user
        }
        await disLikePost(globalData.token.token,data)
        let response = await articleDetails(slug,globalData.token.token)
        setPost(response)
        console.log(response)
        return response.dislikes
    }

    return (
        <div className="container-lg py-5 minimum-height">
            {post ? 
                    <>
                        <h1 className="fw-bold display-4 mt-5">{post.title}</h1>
                        <Postsub post={post} />
                        <hr />
                        {post.description && <div  className="resetting" dangerouslySetInnerHTML={{ __html: post.description }} />}
                        <GiveLikeDislike 
                            initlikedisabled={post.likes > 0 ? true : false} 
                            initdislikedisabled={post.like > 0 ? true : false}
                            initlike={post.likes > 0 ? 'likeFilled' : 'like'}
                            initdislike={post.dislikes > 0 ? 'likeFilled' : 'like'}
                            postLike={postLike} 
                            postDislike={postDisLike}
                        />
                    </> 
                :
            <Loader />
        }
        </div>
    )
}
