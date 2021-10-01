import { useParams } from "react-router-dom"
import { useState,useEffect,useContext } from "react"
import { GlobalContext } from "../context/context"
import { MiniLoader } from "../loader/Loader"
import thumb from '../../assets/thumb.jpg'
import { authorDetails } from "../../apiservices"

export default function AuthorProfile() {


    const [profilePic, setProfilePic] = useState(null)
    const [imageLoader,setimageLoader] = useState(true)
    const [name,setName] = useState(null)
    const [bio,setbio] = useState(null)

    const globalData = useContext(GlobalContext)
    const {author} = useParams()

    useEffect(() => {
        (async() => {
            let response = await authorDetails(globalData.token.token,author)
            console.log(response)
            setProfilePic(response.profile_pic)
            setimageLoader(false)
            setName(`${response.first_name} ${response.last_name}`)
            setbio(response.bio)
        }
        )()
    },[])


    return (
        <div className="container-lg minimum-height pt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mt-5">
                        {imageLoader ?
                            <MiniLoader />
                            :
                            <img className="img-thumbnail rounded-circle img-fluid" src={profilePic ? profilePic : thumb} alt="author" />
                        }
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <p className="text-muted fw-bold m-0">Author Name:</p>
                                <p className="lead fw-bold">{name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                    <p className="text-muted fw-bold m-0">Bio:</p>
                        <p className="lead">
                        {bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
