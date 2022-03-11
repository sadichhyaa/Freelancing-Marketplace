import Link from 'next/link';
import api from '../services/api';
import { useState, useEffect } from 'react';
import { Router } from 'next/router';
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

const NavBar = () => {
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = Cookies.get("auth_token");
    console.log(token);
    if (Cookies.get("talent")) {
      const profile = JSON.parse(Cookies.get("talent"));
      setProfile(profile)
      console.log(profile.profile.fullName);
    }
    setToken(token);



  }, []);

  const router = useRouter();


  const logout = () => {
    console.log('hello');
    document.cookie =
      'auth_token' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie =
      'talent' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';  
    alert('You have been logged out');
    location.reload(true);
    router.push('/');
  };

  return (
    <>
      <nav
        id='navbar_top'
        className='navbar navbar-expand-lg navbar-light px-5'
      >
        <div className='container-fluid'>
          <Link href='/'>
            <a className='navbar-brand' style={{ fontWeight: 'bold' }}>
              NEPLANCER<span style={{ color: 'var(--orange-ball)' }}>.</span>
            </a>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item pages-link'>
                <Link href='/'>
                  <a className='nav-link active' aria-current='page'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item pages-link'>
                <Link href='/services'>
                  <a className='nav-link'>Services</a>
                </Link>
              </li>
              <li className='nav-item pages-link'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              {token ? (<div></div>) : <li className='nav-item dropdown me-5 '>
                <a
                  className='nav-link dropdown-toggle ' style={{ color: "var(--orange-ball)" }}
                  href='#'
                  id='login_text'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Log In
                </a>

                <ul
                  className='dropdown-menu m-0 p-2'
                  style={{ minWidth: '0' }}
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li className='m-0'>
                    <Link href='/talent-login'>
                      <a className='dropdown-item p-1'>Talent</a>
                    </Link>
                  </li>
                  <li className='m-0'>
                    <Link href='/employer-login'>
                      <a className='dropdown-item p-1'>Employer</a>
                    </Link>
                  </li>
                </ul>
              </li>}

              {token ? <li className='nav-item pages-link'>
                <a className='nav-link'  onClick={() => logout()} >
                  
                  Logout
                </a>
              </li> : <div></div>}

              {/* {token ? <div></div> : <li className='nav-item'> */}
              {(token && profile) ? (
                  
                <li className='nav-item-name' >
                  <Link href='/profile'  >
                    <a className='nav-bar-name'>{profile.profile.fullName}</a>
                  </Link>
                </li>
              ) : (
                <Link href='/sign-up'>
                  <a
                    type='button'
                    className='d-flex justify-content-center align-items-center get-started-btn app-btn'
                    style={{ color: 'white' }}
                  >
          
                    Get Started
                  </a>
                </Link>

              )}
              {/* </li>} */}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
