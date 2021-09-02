import './createpost.css'
import thumb from '../../assets/thumb.jpg'
import Footer from '../footer/Footer'

export default function CreatePost() {
    return (
        <div className="container-lg">
            <div className="row">
                {/* on bigger screen */}
                <div className=" col-md-2 d-none d-md-block create-post-height border-end g-5">
                    <div className="text-center py-3">
                        <img className="img-thumbnail rounded-circle img-fluid" src={thumb} alt="author" />
                    </div>
                    <p class="fw-bold text-center text-muted">John doe</p>
                    <a href="#" className="btn btn-sm btn-outline-success d-grid">Edit Profile</a>
                </div>

                <div className="col-12 col-md-10 create-post-height g-5">
                    <h2 className="fw-bold display-5 text-muted">What you want to share ??</h2>
                    <div className="my-md-5">
                    <form>
                        <div className="py-2">
                            <label htmlFor="title" className="fs-2 form-label">Title</label>
                            <input id="title" type="text" className="form-control" />
                        </div>
                        <div className="py-2">
                            <label htmlFor="description" className="fs-2 form-label">Description</label>
                            <textarea class="form-control" id="description" rows="10"></textarea>
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
