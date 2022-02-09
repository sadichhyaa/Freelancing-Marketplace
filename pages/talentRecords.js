import TalentFilter from "../components/talentFilter";
import Records from "../components/Records";

const TalentRecords = () => {

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="record-content-container shadow">
                    <div className="record-header">
                        <h2>blah</h2>
                        <TalentFilter />
                    </div>
                    <div className="records">
                        <Records />

                    </div>

                </div>
            </div>
        </>
    )

};

export default TalentRecords;