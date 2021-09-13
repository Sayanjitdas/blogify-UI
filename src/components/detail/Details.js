import './detail.css'
import Postsub from '../posts/Postsub'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Details() {

    //get the id from params
    const {id} = useParams()
    console.log(`The id is ${id}`)
    //API call to detail posts after fetching the id from Params

    //dummy
    let data = {
        id: 1,
        title: "dummy title 1",
        author: "john doe",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
    }

    const [posts] = useState(data)

    return (
        <div className="container-lg py-5 minimum-height">
            <h1 className="fw-bold display-4 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
            <Postsub post={posts} />
            <hr />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore nemo libero optio numquam quibusdam labore odit vero. 
                    Debitis eius ratione culpa veritatis reiciendis provident reprehenderit eaque, consequatur laudantium sunt?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore nemo libero optio numquam quibusdam labore odit vero. 
                Debitis eius ratione culpa veritatis reiciendis provident reprehenderit eaque, consequatur laudantium sunt?Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Nostrum laudantium fugiat accusamus aliquid quos ipsam est veniam autem, asperiores at 
                voluptatem illum, minus amet quas rem quasi. Voluptate, ullam accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Beatae inventore nemo libero optio numquam quibusdam labore odit vero. 
                Debitis eius ratione culpa veritatis reiciendis provident reprehenderit eaque, consequatur laudantium sunt?Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Nostrum laudantium fugiat accusamus aliquid quos ipsam est veniam autem, asperiores at 
                voluptatem illum, minus amet quas rem quasi. Voluptate, ullam accusamus?</p>
            </div>
        </div>
    )
}
