import { useState,useContext, useEffect } from 'react';
import './profile.css'
import thumb from '../../assets/thumb.jpg'
import { userDetails } from '../../apiservices'
import { GlobalContext } from '../context/context';

export default function Profile() {
    const [profilePic,setProfilePic] = useState(null)
    const [uploadPic,setUploadPic] = useState(null)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [bio,setBio] = useState('')

    const globalData = useContext(GlobalContext)
    
    useEffect(() => {
        (async() => {
            let response = await userDetails(globalData.token.token)
            if(!response.error){
                console.log(response)
                setFirstName(response.first_name)
                setLastName(response.last_name)
                setBio(response.bio)
                setProfilePic(response.profile_pic)
            }
        })()
    },[])

    useEffect(() => {
        const previewImage = new File([uploadPic,],'profile_pic.jpg')
        const url = window.URL.createObjectURL(previewImage)
        setProfilePic(url)
    },[uploadPic])
    
    const uploadProfilePic = (e) => {
        e.preventDefault()
        e.target.value = null
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = () => {
            let profile_pic = input.files[0]
            setUploadPic(profile_pic)

        }
        input.click()
    }

    return (
        <div className="container-lg minimum-height pt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <form>
                    <div className="text-center mt-5">
                        <img className="img-thumbnail rounded-circle img-fluid" src={profilePic ? profilePic : thumb } alt="author" />
                    </div>
                    <div className="my-3 d-grid col-lg-3 mx-auto">
                        <button className="btn btn-sm btn-outline-success" onClick={uploadProfilePic} >Upload Profile Pic</button>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <label htmlFor="Firstname" className="form-label text-muted fw-bold">Firstname</label>
                                <input id ="Firstname" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <label htmlFor="Lastname" className="form-label text-muted fw-bold">Lastname</label>
                                <input id ="Lastname" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="Bio" className="form-label text-muted fw-bold">Bio</label>
                        <textarea className="form-control" rows="10" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                    </div>
                    <div className="d-grid col-md-2">
                        <button type="submit" className="btn btn-lg btn-success mt-3"><span className="fw-bold lead">Submit</span></button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
