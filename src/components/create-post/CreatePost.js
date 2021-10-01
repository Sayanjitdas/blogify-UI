import './createpost.css'
import thumb from '../../assets/thumb.jpg'
import Richtexteditor from './Richtexteditor'
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/context';
import { Link,useHistory } from 'react-router-dom';
import { userDetails,createArticle } from '../../apiservices';
import {MiniLoader} from '../loader/Loader';

export default function CreatePost() {

    const history = useHistory()
    const [value, setValue] = useState(null)
    const [title,setTitle] = useState(null)
    const globalData = useContext(GlobalContext)
    const [profilePic,setProfilePic] = useState(null)
    const [name,setName] = useState(null)
    const [spinner,setSpinner] = useState(false)
    const [imageLoader,setImageLoader] = useState(true)

    useEffect(() => {
        (async() => {
            let response = await userDetails(globalData.token.token)
            setProfilePic(response.profile_pic)
            setImageLoader(false)
            if(response.first_name && response.last_name) {
                setName(response.first_name + ' ' + response.last_name)
            }else{
                setName(globalData.userData.data)
            }
        })()
    })

    const postSubmission = async (e) => {
        e.preventDefault()
        setSpinner(true)
        let response = await createArticle(globalData.token.token,{title,description:value})
        if(!response.error){
            console.log(response)
            history.push(`/details/${response.slug_field}`)
        }else {
            console.log(response.error)
        }

    }

    return (
        <div className="container-lg">
            <div className="row">
                {/* on bigger screen only */}
                <div className=" col-md-2 d-none d-md-block create-post-height border-end g-5">
                    <div className="text-center py-3">
                        {imageLoader ?
                            <MiniLoader />
                            :    
                            <img className="img-thumbnail rounded-circle img-fluid" src={profilePic ? profilePic : thumb } alt="author" />
                        }
                    </div>
                    <p className="fw-bold text-center text-muted">{name}</p>
                    <Link to="/profile" className="btn btn-sm btn-outline-success d-grid">Edit Profile</Link>
                </div>

                <div className="col-12 col-md-10 create-post-height g-5">
                    <h2 className="fw-bold display-5 text-muted">What you want to share ??</h2>
                    <div className="my-md-5">
                        <form onSubmit={postSubmission}>
                            <div className="py-2">
                                <label htmlFor="title" className="fs-2 form-label">Title</label>
                                <input id="title" type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="py-2">
                                <label htmlFor="description" className="fs-2 form-label">Description</label>
                                <Richtexteditor value={value} setValue={setValue} />
                            </div>
                            <div className="d-grid col-md-2">
                                <button type="submit" className="btn btn-lg btn-success mt-3">
                                {
                                    spinner ?
                                    <div className="spinner-border text-light" role="status">
                                        <span clasName="visually-hidden"></span>
                                    </div>
                                    :
                                    <span className="fw-bold lead">Post</span>
                                }    
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


