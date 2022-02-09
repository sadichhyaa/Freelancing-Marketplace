import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const TalentProfile = () => {
    return (
        <>
            <NavBar />
            <div className=" profile-main container mt-5">
                {profile && (
                    <div className=" row main-card shadow p-0">
                        <div className="col p-0" style={{ borderRight: "2px solid #FFD3B2" }}>
                            <div className="profile-col1 col">
                                <div className="row talent-image mx-auto m-4"><img style={{ width: "100%", height: "100%" }} src={profile.profilePicture ?? './images/user-placeholder.jpg'}></img></div>
                                <div className="row talent-name mb-3 p-2 mx-0" style={{ borderBottom: " 2px solid #FFD3B2" }}><p className="name-p">{profile.fullName}</p></div>
                                <div className="row talent-price mb-3 p-2"><p className="price-p">{profile.price}</p></div>
                                <div className="row talent-projects mb-3 p-2 ps-3">
                                    <p className="mb-2" style={{ fontWeight: "600", fontSize: "18px" }}>Projects Done</p>
                                    {profile.projectsDone.map((p, i) => {
                                        return <p className="mb-2" key={`profile-project-${i}`}>{p.project}</p>
                                    })}</div>

                            </div>

                        </div>
                        <div className="col p-0">
                            <div className="profile-col2 col">
                                <div className="row talent-status mx-auto m-3 p-2" style={{ borderBottom: " 2px solid #FFD3B2" }} >
                                    <div className="col">
                                        <i class="fa fa-circle"></i>
                                        <span className="ms-2">Available</span>
                                    </div>
                                    <div className="col">
                                        <i class="fa fa-star m-1"></i>
                                        <i class="fa fa-star m-1"></i>
                                        <i class="fa fa-star m-1"></i>
                                        <i class="fa fa-star m-1"></i>
                                        <i class="fa fa-star m-1"></i>
                                    </div>
                                </div>
                                <div className="row talent-description mx-auto m-3 p-2" style={{ borderBottom: " 2px solid #FFD3B2" }} >
                                    <p className="mb-2" style={{ fontWeight: "600", fontSize: "18px" }}>Description</p>
                                    <p className="mb-3">{profile.description}</p></div>
                                <div className="row talent-skill shadow m-3 p-3 ps-4 ">
                                    <p className="mb-2" style={{ fontWeight: "600", fontSize: "18px" }}>Skills</p>
                                    {profile.listOfSkills.map((p, i) => {
                                        return <p className="" key={`profile-skills-${i}`}>{p.skill}</p>
                                    })}</div>
                            </div>
                        </div>
                        <div style={{ borderTop: " 2px solid #FFD3B2" }} >

                            <div className="col profile-button">
                                <Link href="./hireForm">
                                    <a className=" btn hire-btn px-5">Hire</a>
                                </Link>

                            </div>
                        </div>

                    </div>

                )}
            </div>
            <Footer />

        </>
    )

};

export default TalentProfile;