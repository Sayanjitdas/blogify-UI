import { useEffect, useState } from 'react'
import Posts from '../posts/Posts'
import './home.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/context'
import { articleList } from '../../apiservices'

export default function Home() {

    // const globalData = useContext(GlobalContext)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        (async () => {
            let response = await articleList()
            if (response.error) {
                console.log("error")
            } else {
                console.log(response)
                setPosts(response)
            }
        })()
    }, [])


    return (
        <div className="container-lg">
                {posts ?
                    <div className="row justify-content-center my-5 py-3">
                        <div className="col-md-8 col-12">
                            {
                                posts.map(post => (
                                    <Posts post={post} key={post.slug_field} />
                                ))
                            }
                        </div>
                    </div> 
                    :
                    <div className="col-12 d-flex justify-content-center align-items-center minimum-height">
                        <div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
           
        </div>
    )
}
