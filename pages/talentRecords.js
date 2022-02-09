import TalentFilter from "../components/talentFilter";
import Records from "../components/Records";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../services/api";

const TalentRecords = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [records, setRecords] = useState([]);
    const router = useRouter();

    const { servicesOffered, sort } = router.query;

    useEffect(() => {
        api.get('/talentsAll', {
            params: {
                servicesOffered: servicesOffered,
                sort: sort,
            }
        }).then(({ data }) => {
            console.log(data.talents);
            setRecords([...data.talents]);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <NavBar />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="record-content-container shadow">
                    <div className="record-header d-flex">
                        <h2>{servicesOffered}</h2>
                        <TalentFilter />
                    </div>
                    <div className="records">
                        {
                            !isLoading && records.length > 0 && records.map((r, i) => (
                                <div className="records-main" key={`talent-${i}`}>
                                    <div className="records-box shadow p-2">
                                        <div className="records-photo mx-3">
                                            <img src="./images/banner2.jpg" />
                                        </div>
                                        <div className="record-info mx-3">
                                            <div className="talent-name p-2"><p>{r.fullName}</p></div>
                                            <div className="talent-description p-2"><p>{r.description}</p></div>
                                        </div>
                                        <div className="records-price p-2 m-3">
                                            <div className="price">
                                                <h2>{r.price}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {!isLoading && records.length == 0 && <div className="no-record">
                            <div><p>No Records Found</p></div>
                        </div>}
                        {isLoading && "Loading..."}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

};

export default TalentRecords;