const TalentFilter = () => {
    return (
        <>
            <select className="filter-box">
                <option value=''>Filter</option>
                <option value='-price'>Price low to high</option>
                <option value='price'>price high to low</option>
                <option value='-rating'>Rating low to high</option>
                <option value='rating'>Rating high to low</option>
            </select>

        </>
    )
};

export default TalentFilter;