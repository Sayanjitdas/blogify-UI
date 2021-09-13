import './createpost.css'
import thumb from '../../assets/thumb.jpg'
import Richtexteditor from './Richtexteditor'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreatePost() {

    const [value, setValue] = useState('');

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
                        <img className="img-thumbnail rounded-circle img-fluid" src={thumb} alt="author" />
                    </div>
                    <p className="fw-bold text-center text-muted">John doe</p>
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
                        {value && <div dangerouslySetInnerHTML={{ __html: value }} />}
                    </div>
                </div>
            </div>
        </div>
    )
}


