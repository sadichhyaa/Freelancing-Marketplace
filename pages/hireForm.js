import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HireForm = () => {
    return (
        <>
            <NavBar />
            <div className="hire-main mt-5">
                <div className="hire-container p-5 shadow">
                    <form className="hire-form">
                        <div className="input-group mb-4">
                            <label className="form-label me-3 mb-0">Full Name</label>
                            <input type="text" className="form-control ms-3" placeholder="FullName" aria-label="FullName" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-4">
                            <label className="form-label me-3 mb-0">Mobile Number</label>
                            <input type="text" className="form-control ms-3" placeholder="Mobile Number" aria-label="Mobile Number" aria-describedby="basic-addon2" />
                        </div>


                        <div className="input-group mb-4">
                            <label className="form-label me-3 mb-0">Address</label>
                            <input type="text" className="form-control ms-3" placeholder="Address" aria-describedby="basic-addon3" />
                        </div>
                        <div className="input-group mb-4">
                            <label className="form-label me-3 mb-0">Hire Duration</label>
                            <input type="text" className="form-control ms-3" placeholder="Hire Duration" aria-describedby="basic-addon4" />
                        </div>
                        <div className="input-group mb-4">
                            <label className="form-label me-3 mb-0">Message</label>
                            <input type="text" className="form-control ms-3" placeholder="Message" aria-describedby="basic-addon5" />
                        </div>
                        <div className="hire-btn-div">
                            <button className="btn hire-btn">Confirm</button>
                        </div>
                    </form>


                </div>

            </div>
            <Footer />
        </>
    )

};

export default HireForm;