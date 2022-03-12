import NavBar from '../components/NavBar';
import Script from 'next/script';
import Footer from '../components/Footer';
import Rating from '../components/Rating';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';
import Link from 'next/link';
import Cookies from 'js-cookie';
const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/profile/me').then(({ data }) => {
      console.log(data);
      
      if (data.profile) {
        setProfile(data.profile);
        Cookies.set("talent", JSON.stringify(data));

      } else {
        router.push('/profile-form');
      }

    }).catch((err) => {err.response?.data && alert(err.response?.data.error)
                       router.push('/')     
    })
  }, []);

  const router = useRouter();

  const onClickHandler = () => {
    api
      .delete(`/talent/profile/${profile._id}`)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => err.response?.data && alert(err.response?.data.error))
      .finally(() => {
        router.push('/');
      });
  };

  return (
    <>
      <NavBar />
      <div className=' profile-main container mt-5'>
        {profile && (
          <div className=' row main-card shadow p-5 pb-2'>
            <div
<<<<<<< HEAD
              className='col p-0 d-flex justify-content-center align-items-center'>
              <div className='profile-col1 col  d-flex justify-content-center align-items-center mt-2' style={{ flexDirection: 'column' }}>
                <div className=' talent-image shadow'>
=======
              className='col p-0'
              // style={{ borderRight: '2px solid #FFD3B2' }}
            >
              <div className='profile-col1 col p-3' style={{ width: '100%' }}>
                <div className='row talent-image mx-auto m-4'>
>>>>>>> ae1f71abbd0902df9ba533053b77c725bbb09043
                  <img
                    style={{ width: '100%', height: '100%', padding: '0px', borderRadius: '4px' }}
                    src={
                      profile.profilePicture ?? './images/user-placeholder.jpg'
                    }
                  ></img>
                </div>
<<<<<<< HEAD
=======
                <div
                  className='row talent-name mb-3 p-2 mx-0'
                  // style={{ borderBottom: ' 2px solid #FFD3B2' }}
                >
                  <p className='name-p d-flex justify-content-center align-items-center'>{profile.fullName}</p>
                </div>
                <div className='row profile-price mb-3 p-2'>
                  <p className='price-p' style={{ color: 'black' }}>Rs.{profile.price}/hour</p>
                </div>
                <div className='row talent-projects mb-3 p-2 ps-3'>
                  <p
                    className='mb-2'
                    style={{ fontWeight: '600', fontSize: '18px' }}
                  >
                    Projects Done
                  </p>
                  {profile.projectsDone.map((p, i) => {
                    return (
                      <p className='mb-2' key={`profile-project-${i}`}>
                        {p.project}
                      </p>
                    );
                  })}
                </div>
>>>>>>> ae1f71abbd0902df9ba533053b77c725bbb09043
              </div>
            </div>
            <div className='col talent-name-box p-2' >
              <div className='profile-col2 col'>

                <div
<<<<<<< HEAD
                  className='talent-status pb-3 mb-5' style={{ borderBottom: '1px solid rgb(117, 111, 111)' }}
                //  style={{ borderBottom: ' 2px solid #FFD3B2' }}
                >
                  <div
                    className='talent-name column p-0 '
                  //  style={{ borderBottom: ' 2px solid #FFD3B2' }}
=======
                  className='row talent-status mx-auto m-3 p-2'
                  // style={{ borderBottom: ' 2px solid #FFD3B2'}}
                >
                  <div className='col'>
                    <i className='fa fa-circle'></i>
                    <span className='ms-2'>Available</span>
                  </div>
                  <div className='col'>
                    {/* <Rating rating={profile.averageRating}/> */}
                  </div>
                </div>
                <div
                  className='row talent-description mx-auto m-3 p-2'
                  // style={{ borderBottom: ' 2px solid #FFD3B2' }}
                >
                  <p
                    className='mb-2'
                    style={{ fontWeight: '600', fontSize: '18px' }}
>>>>>>> ae1f71abbd0902df9ba533053b77c725bbb09043
                  >
                    <p className='name-p'>{profile.fullName}</p>
                  </div>

                  <div className='p-0 column ms-4'>
                    <i className='fa fa-circle '></i>
                    <span className=' p-2'>Available</span>
                  </div>

                </div>
<<<<<<< HEAD

                <div className='row talent-price mb-0 ms-1 p-2'>
                  <span className='price-p'>Rs.{profile.price}/hour</span>
=======
                <div className='row talent-skill shadow m-3 p-3 ps-0 '>
                  <p
                    className='mb-2'
                    style={{ fontWeight: '600', fontSize: '18px' }}
                  >
                    Skills
                  </p>
                  {profile.listOfSkills.map((p, i) => {
                    return (
                      <p className='' key={`profile-skills-${i}`}>
                        {p.skill}
                      </p>
                    );
                  })}
>>>>>>> ae1f71abbd0902df9ba533053b77c725bbb09043
                </div>


              </div>

            </div>
<<<<<<< HEAD
            <div
              className='row talent-description my-3 mx-4 mt-4 px-4'

            >
              <p
                className='mb-3 mt-2 p-0'
                style={{ fontWeight: '600', fontSize: '18px' }}
              >
                Description
              </p>
              <p className='mb-3 pb-4 p-0' style={{ borderBottom: '1px solid #756f6f  ' }}>{profile.description}</p>
            </div>

            <div className='row p-0 d-flex flex-row' style={{ borderBottom: '1px solid rgb(117, 111, 111)' }}>
              <div className='col talent-projects mb-3 mt-2 p-3'>
                <p
                  className='mb-3'
                  style={{ fontWeight: '600', fontSize: '18px' }}
                >
                  Projects Done
                </p>
                {profile.projectsDone.map((p, i) => {
                  return (
                    <p className='mb-3' key={`profile-project-${i}`}>
                      ● {p.project}
                    </p>
                  );
                })
                }
              </div>
              <div className='col talent-skill  mb-3 p-3 mt-3 '>
                <p
                  className='mb-3'
                  style={{ fontWeight: '600', fontSize: '18px' }}
                >
                  Skills
                </p>
                {profile.listOfSkills.map((p, i) => {
                  return (
                    <p className='' key={`profile-skills-${i}`}>
                      ●{p.skill}
                    </p>
                  );
                })}
              </div>

            </div>
            <div style={{ borderTop: ' 2 px solid #FFD3B2' }}>
=======
            <div >
>>>>>>> ae1f71abbd0902df9ba533053b77c725bbb09043
              <div className='row profile-buttons my-4'>
                <div className='col profile-button'>
                  <Link href='./profile-form?update=true'>
                    <a className=' btn edit-btn px-5'>Edit</a>
                  </Link>
                </div>
                <div className='col profile-button'>
                  <Link href='#'>
                    <a
                      onClick={onClickHandler}
                      className=' btn delete-btn px-5'
                    >
                      Delete
                    </a>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Profile;
