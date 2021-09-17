import './createpost.css'
import thumb from '../../assets/thumb.jpg'
import Richtexteditor from './Richtexteditor'
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/context';
import { Link } from 'react-router-dom';
import { userDetails } from '../../apiservices';
import {stateToHTML} from 'draft-js-export-html';

export default function CreatePost() {

    const [value, setValue] = useState('')
    const globalData = useContext(GlobalContext)
    const [profilePic,setProfilePic] = useState(null)
    const [name,setName] = useState(null)

    useEffect(() => {
        (async() => {
            let response = await userDetails(globalData.token.token)
            setProfilePic(response.profile_pic)
            if(response.first_name && response.last_name) {
                setName(response.first_name + ' ' + response.last_name)
            }else{
                setName(globalData.userData.data)
            }
        })()
    },[])

    const postSubmission = (e) => {
        e.preventDefault()
        console.log(value);
    }

    return (
        <div className="container-lg">
            <div className="row">
                {/* on bigger screen only */}
                <div className=" col-md-2 d-none d-md-block create-post-height border-end g-5">
                    <div className="text-center py-3">
                        <img className="img-thumbnail rounded-circle img-fluid" src={profilePic ? profilePic : thumb } alt="author" />
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
                                <input id="title" type="text" className="form-control" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="description" className="fs-2 form-label">Description</label>
                                <Richtexteditor value={value} setValue={setValue} />
                            </div>
                            <div className="d-grid col-md-2">
                                <button type="submit" className="btn btn-lg btn-success mt-3"><span className="fw-bold lead">Post</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


