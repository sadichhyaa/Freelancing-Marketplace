import NavBar from "../components/NavBar";
import { api } from "../services/api";

const ProfileForm = () => {

    const onSubmit = (data) => {
        api.post('/talent/my_portfolio', data)
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err));
    }
    return (
        <>
            <NavBar />
            <div className="container d-flex justify-content-center align-content-center my-5" style={{ width: "70%" }}>

                <div className=" col mt-3 p-3 shadow">
                    <div className="row m-3  ">
                        <h2>Join As Freelancer</h2>
                    </div>
                    <div className="row m-3">
                        <form>
                            <div className="input-group mt-3 mb-5">
                                <span className="details me-5 d-flex align-items-center justify-content-center">Full Name*</span>
                                <input type="text" className="form-control " placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-5">
                                <span className="details me-5  d-flex align-items-center justify-content-center">Profile
                                    Picture*</span>
                                <input type="file" className="form-control" id="inputGroupFile02" />
                                <label className="input-group-text">Upload</label>
                            </div>
                            <div className="input-group mb-5">
                                <span className="details me-5  d-flex align-items-center justify-content-center">Description*</span>
                                <textarea className="form-control ms-1" aria-label="With textarea"
                                    placeholder="Enter your description" style={{ resize: "none" }}></textarea>
                            </div>
                            <div className="input-group mb-5">
                                <span className="details me-5  d-flex align-items-center justify-content-center">List of
                                    skills*</span>
                                <textarea className="form-control ms-2" aria-label="With textarea"
                                    placeholder="Enter the list of your skills" style={{ resize: "none" }}></textarea>
                            </div>
                            <div className="input-group mb-5">
                                <span className="details me-5  d-flex align-items-center justify-content-center">Project
                                    done*</span>
                                <textarea className="form-control" aria-label="With textarea" style={{ resize: "none" }}></textarea>
                            </div>
                            <div className="input-group mb-5">
                                <span className="details me-5  d-flex align-items-center justify-content-center">Price*</span>
                                <input type="text" className="form-control " placeholder="" aria-label="Username"
                                    aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group category-select-div mb-3">
                                <span className="details me-5  d-flex align-items-center justify-content-center">Category*</span>
                                <select className="form-select" id="category-select" defaultValue={""}>
                                    <option>Choose...</option>
                                    <option value="1">Home</option>
                                    <option value="2">IT</option>
                                    <option value="3">Health</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>

                            <div className="input-group mb-3 serviceOffered-select-div ">
                                <span className="details me-5  d-flex align-items-center justify-content-center">Service
                                    Offered*</span>
                                <select className="form-select" id="serviceOffered-select" defaultValue={""}>
                                    <option>Choose...</option>
                                    <option value="1">Electrician</option>
                                    <option value="2">Plumber</option>
                                    <option value="3">Health</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>


                            <div className="d-flex justify-content-center align-content-center">
                                <button type="submit" className="btn my-3  "
                                    style={{ backgroundColor: "#fe8529", color: "var(--white)" }}>Submit </button>
                            </div>

                        </form>



                    </div>
                </div>

            </div>
        </>
    )
};

export default ProfileForm;