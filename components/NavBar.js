import Link from "next/link";
import api from "../services/api";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        api.get('/profile/me').then(({ data }) => {
            if (data.profile) {
                setProfile(data.profile);
            }
        });
    }, []);

    return (<>
        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light px-5">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand" style={{ fontWeight: "bold" }}>NEPLANCER<span
                        style={{ color: "var(--orange-ball)" }}>.</span></a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page" >Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services">
                                <a className="nav-link" >Services</a>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown me-5 ">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="login_text" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Log In
                            </a>
                            <ul className="dropdown-menu m-0 p-2" style={{ minWidth: '0' }}
                                aria-labelledby="navbarDropdownMenuLink">
                                <li className="m-0">
                                    <Link href="/taleng-login">
                                        <a className="dropdown-item p-1">Talent</a>
                                    </Link>
                                </li>
                                <li className="m-0">
                                    <Link href="/employer-login">
                                        <a className="dropdown-item p-1">Employer</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {profile ?
                                <Link href={"/profile"}>
                                    <a>{profile.fullName}</a>
                                </Link> :
                                <Link href="/sign-up">
                                    <a type="button"
                                        className="d-flex justify-content-center align-items-center get-started-btn app-btn"
                                        style={{ color: "white" }}>Get
                                        Started</a>
                                </Link>}

                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
};

export default NavBar;