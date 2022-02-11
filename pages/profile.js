import NavBar from "../components/NavBar";
import Script from "next/script";
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../services/api";
import Link from "next/link";


const Profile = () => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        api.get('/profile/me').then(({ data }) => {
            console.log(data);
            if (data.profile) {
                setProfile(data.profile);
            } else {
                router.push('/profile-form');
            }
        });
    }, []);

    const router = useRouter();

    const onClickHandler = () => {
        api.delete(`/talent/profile/${profile._id}`)
            .then((res) => {
                alert(res.data.message);
            }).catch((err) => err.response?.data && alert(err.response?.data.error))
            .finally(() => {
                router.push('/');
            });
    };


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
                                    <div className="col ratings">
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
                            <div className="row profile-buttons my-4">
                                <div className="col profile-button">
                                    <Link href="./profile-form?update=true">
                                        <a className=" btn edit-btn px-5">Edit</a>
                                    </Link>

                                </div>
                                <div className="col profile-button">
                                    <Link href="#">
                                        <a onClick={onClickHandler} className=" btn delete-btn px-5">Delete</a>
                                    </Link>

                                </div>
                            </div>

                        </div>

                    </div>

                )}
            </div>
            <Footer />
            <Script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous" />

        </>
    );

};

export default Profile;