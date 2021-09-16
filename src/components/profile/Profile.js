import './profile.css'
import thumb from '../../assets/thumb.jpg'

export default function Profile() {
    let profile_pic = null;
    
    const uploadProfilePic = (e) => {
        e.preventDefault()
        e.target.value = null
        let input = document.createElement('input')
        input.type = 'file'
        input.onchange = () => {
            profile_pic = input.files[0]
            console.log(profile_pic)
        }
        input.click()
    }

    return (
        <div className="container-lg minimum-height pt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <form>
                    <div className="text-center mt-5">
                        <img className="img-thumbnail rounded-circle img-fluid" src={thumb} alt="author" />
                    </div>
                    <div className="my-3 d-grid col-lg-3 mx-auto">
                        <button className="btn btn-sm btn-outline-success" onClick={uploadProfilePic}>Upload Profile Pic</button>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <label htmlFor="Firstname" className="form-label text-muted fw-bold">Firstname</label>
                                <input id ="Firstname" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <label htmlFor="Lastname" className="form-label text-muted fw-bold">Lastname</label>
                                <input id ="Lastname" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="Bio" className="form-label text-muted fw-bold">Bio</label>
                        <textarea className="form-control" rows="10"></textarea>
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
