import './detail.css'
import Postsub from '../posts/Postsub'
import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/context'
import { useParams } from 'react-router-dom'
import { articleDetails } from '../../apiservices'
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

    return (
        <div className="container-lg py-5 minimum-height">
            {post ? 
                    <>
                        <h1 className="fw-bold display-4 mt-5">{post.title}</h1>
                        <Postsub post={post} />
                        <hr />
                        {post.description && <div  className="resetting" dangerouslySetInnerHTML={{ __html: post.description }} />}
                        <GiveLikeDislike 
                            initdisabled={post.likes > 0 ? true : false} 
                            initlike={post.likes > 0 ? 'likeFilled' : 'like'}/>
                    </> 
                :
            <Loader />
        }
        </div>
    )
}
