import TalentFilter from '../components/talentFilter';
import Records from '../components/Records';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../services/api';
import axios from 'axios';

const TalentRecords = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const router = useRouter();

  const onClickHandler = (abc) => {
    router.push(`/talentProfiles?abc=${abc}`);
  };

  const fetchRecords = (servicesOffered, sort) => {
    api
      .get('/talentsAll', {
        params: {
          servicesOffered: servicesOffered,
          sort: sort,
        },
      })
      .then(({ data }) => {
        console.log(data.talents);

        setRecords([...data.talents]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    fetchRecords(params.get('servicesOffered'), params.get('sort'));
  }, []);

  useEffect(() => {
    if (router.query.sort) {
      fetchRecords(router.query.servicesOffered, router.query.sort);
    }
  }, [router.query.sort]);

  return (
    <>
      <NavBar />
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='record-content-container shadow'>
          <div className='record-header d-flex'>
            <h2>{router.query.servicesOffered}</h2>
            <TalentFilter />
          </div>
          <div className='records'>
            {!isLoading &&
              records.length > 0 &&
              records.map((r, i) => (
                <div className='records-main' key={`talent-${i}`}>
                  <div className='records-box shadow p-2'>
                    <div className='records-photo mx-3'>
                      <img src={r.profilePicture} />
                    </div>
                    <div className='record-info mx-3'>
                      <div
                        className='talent-name p-2'
                        onClick={() => onClickHandler(r._id)}
                      >
                        <p>{r.fullName}</p>
                      </div>
                      <div className='talent-description p-2'>
                        <p>{r.description}</p>
                      </div>
                    </div>
                    <div className='records-price p-2 m-3'>
                      <div className='price'>
                        <h2>Rs.{r.price}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {!isLoading && records.length == 0 && (
              <div className='no-record'>
                <div>
                  <p>No Records Found</p>
                </div>
              </div>
            )}
            {isLoading && 'Loading...'}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TalentRecords;
