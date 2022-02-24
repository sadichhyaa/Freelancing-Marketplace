import Router from 'next/router';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Rating from '../components/Rating';
import api from '../services/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Records from '../components/Records';
import Link from 'next/link';
import axios from 'axios';

const TalentProfile = () => {
    const router = useRouter();
    const [record, setRecord] = useState();
    const [talentId, setTalentID] = useState('');

    const [profile, setProfile] = useState(null);
    // const [value,setValue] = useState();

useEffect(()=>{
    onPageLoad();
},[])

const onPageLoad = ()=>{
    const url = new URL(window.location.href);
        const params = url.searchParams;
        fetchRecord(params.get('abc'));
        setTalentID(params.get('abc'))

    getProfile();
}

const getProfile =async ()=>{
    // let profileId = '';
    await api
        .get('/employer/me')
        .then(({ data }) => {
            console.log(data.profile)
            if (data.profile) {
                setProfile(data.profile);
                // profileId = data.profile._id;
            }
        })
        .catch((err) => {
            console.log('You should be logged in as employer');
            //router.push('/employer-login')
        });

}



    const onRatingClickHandler = async (rating)=>{
        // upama
        await api.post(`/employer/rating/${talentId}`,{rating})
        .then(({data}) =>{
            alert(data.message);
        })
        .catch((err) => err.response?.data && alert(err.response?.data.error))
        .finally(() => {
            // router.push('/pages/talentProfiles');
            onPageLoad();
        });
// error

    }

    const onClickHandler = async () => {
        if (profile) {
        await api
            .get(`/employer/talent/profile/hire/${profile._id}`)
            .then(({ data }) => {
                alert(data.message);
            })
            .catch((err) => {
                err.response?.data && alert(err.response?.data.error)
                alert('You are unauthorized. Please log in as Employer');
            })
            .finally(() => {
                router.push(`/hireForm?emp=${record._id}`);
            });
        } else {
            alert('You are not an Employer. Please log in');
            router.push('./sign-up');
        }
    };
    const fetchRecord = (abc) => {
        setRecord()
        api.get('/talent/profile/' + abc).then(({ data }) => {
            // console.log(data);
            setRecord(data.profile);
        });
    };

    // useEffect(() => {
    //     api.get('/employer/me').then(({ data }) => {
    //         console.log(data);
    //         console.log(data.profile);
    //         if(data.profile){
    //             setProfile(data.profile)
    //         }
    //     }).catch((err) => {
    //         console.log('You should be logged in as employer')
    //         router.push('/employer-login')
    //     })
    // }, [])


    return (
        <>
            <NavBar />
            <div className=' profile-main container mt-5'>
                {record && (
                    <div className=' row main-card shadow p-0'>
                        <div
                            className='col p-0'
                            style={{ borderRight: '2px solid #FFD3B2' }}
                        >
                            <div className='profile-col1 col'>
                                <div className='row talent-image mx-auto m-4'>
                                    <img
                                        style={{ width: '100%', height: '100%' }}
                                        src={
                                            record.profilePicture ?? './images/user-placeholder.jpg'
                                        }
                                    ></img>
                                </div>
                                <div
                                    className='row talent-name mb-3 p-2 mx-0'
                                    style={{ borderBottom: ' 2px solid #FFD3B2' }}
                                >
                                    <p className='name-p'>{record.fullName}</p>
                                </div>
                                <div className='row talent-price mb-3 p-2'>
                                    <p className='price-p'>{record.price}</p>
                                </div>
                                <div className='row talent-projects mb-3 p-2 ps-3'>
                                    <p
                                        className='mb-2'
                                        style={{ fontWeight: '600', fontSize: '18px' }}
                                    >
                                        Projects Done
                                    </p>
                                    {record.projectsDone?.map((p, i) => {
                                        return (
                                            <p className='mb-2' key={`profile-project-${i}`}>
                                                {p.project}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='col p-0'>
                            <div className='profile-col2 col'>
                                <div
                                    className='row talent-status mx-auto m-3 p-2'
                                    style={{ borderBottom: ' 2px solid #FFD3B2' }}
                                >
                                    <div className='col'>
                                        <i className='fa fa-circle'></i>
                                        <span className='ms-2'>Available</span>
                                    </div>
                                    <div className='col'>
                                        <Rating onRatingClick={onRatingClickHandler} rating={record.averageRating} />
                                    </div>
                                </div>
                                <div
                                    className='row talent-description mx-auto m-3 p-2'
                                    style={{ borderBottom: ' 2px solid #FFD3B2' }}
                                >
                                    <p
                                        className='mb-2'
                                        style={{ fontWeight: '600', fontSize: '18px' }}
                                    >
                                        Description
                                    </p>
                                    <p className='mb-3'>{record.description}</p>
                                </div>
                                <div className='row talent-skill shadow m-3 p-3 ps-4 '>
                                    <p
                                        className='mb-2'
                                        style={{ fontWeight: '600', fontSize: '18px' }}
                                    >
                                        Skills
                                    </p>
                                    {record.listOfSkills?.map((p, i) => {
                                        return (
                                            <p className='' key={`profile-skills-${i}`}>
                                                {p.skill}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div style={{ borderTop: ' 2px solid #FFD3B2' }}>
                            <div className='col profile-button'>
                                <a onClick={onClickHandler} className=' btn hire-btn px-5'>
                                    Hire
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default TalentProfile;
