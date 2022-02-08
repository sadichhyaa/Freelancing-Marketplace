import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HireForm = () => {
    return (
        <>
            <NavBar />
            <div className="hire-main">
                <div className="hire-container p-3">
                    <form className="hire-form">
                        <div className="input-group mb-3">
                            <label class="form-label me-3">Full Name</label>
                            <input type="text" class="form-control ms-3" placeholder="FullName" aria-label="FullName" aria-describedby="basic-addon1" />
                        </div>

                        <div class="input-group mb-3">
                            <label class="form-label me-3">Mobile Number</label>
                            <input type="text" class="form-control ms-3" placeholder="Mobile Number" aria-label="Mobile Number" aria-describedby="basic-addon2" />
                        </div>


                        <div class="input-group mb-3">
                            <label class="form-label me-3">Address</label>
                            <input type="text" class="form-control ms-3" placeholder="Address" aria-describedby="basic-addon3" />
                        </div>
                        <div class="input-group mb-3">
                            <label class="form-label me-3">Hire Duration</label>
                            <input type="text" class="form-control ms-3" placeholder="Hire Duration" aria-describedby="basic-addon4" />
                        </div>
                        <div class="input-group mb-3">
                            <label class="form-label me-3">Message</label>
                            <input type="text" class="form-control ms-3" placeholder="Message" aria-describedby="basic-addon5" />
                        </div>
                    </form>


                </div>

            </div>
            <Footer />
        </>
    )

};

export default HireForm;