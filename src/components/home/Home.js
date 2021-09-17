import { useEffect, useState } from 'react'
import Posts from '../posts/Posts'
import './home.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/context'
import { articleList } from '../../apiservices'
import Loader from '../loader/Loader'

export default function Home() {

    // const globalData = useContext(GlobalContext)
    const [posts, setPosts] = useState(null)
    const [error,setError] = useState(false)

    useEffect(() => {
        (async () => {
            let response = await articleList()
            if (response.error) {
                console.log("error")
                setError(true)
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
                    error ?
                        <div className="d-flex justify-content-center align-items-center minimum-height">
                            <p className="lead">Some issue in connection &#128528;</p>
                        </div>
                        :
                    <Loader />
                }
           
        </div>
    )
}
