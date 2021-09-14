import { useState } from 'react'
import Posts from '../posts/Posts'
import './home.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/context'

export default function Home() {

    const {token} = useContext(GlobalContext)

    let data = [
        {
            id: 1,
            title: "dummy title 1",
            author: "john doe",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
        },
        {
            id: 2,
            title: "dummy title 2",
            author: "john doe",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
        },
        {
            id: 3,
            title: "dummy title 3",
            author: "john doe",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
        },
        {
            id: 4,
            title: "dummy title 4",
            author: "john doe",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
        },
        {
            id: 5,
            title: "dummy title 1",
            author: "john doe",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
        },
        {
            id: 6,
            title: "dummy title 2",
            author: "john doe",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
        },
        {
            id: 7,
            title: "dummy title 3",
            author: "john doe",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
        },
        {
            id: 8,
            title: "dummy title 4",
            author: "john doe",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad iure vero accusantium ex consequatur voluptas illum deleniti, fugit quas."
        }
    ]

    const [posts] = useState(data)

    return (
        <div className="container-lg">
            <div className="row justify-content-center my-5 py-3">
                <div className="col-md-8 col-12">
                    {
                        posts.map(post => (
                            <Posts post={post} key={post.id}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
