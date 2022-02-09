import Link from "next/link";

const TalentFilter = () => {
    return (
        <>
            <select className="filter-box">
                <option value=''>Filter</option>
                <Link href="/talentRecords?sort='-price'">
                    <option value='-price'>Price low to high</option>
                </Link>
                <Link href="/talentRecords?sort='price'">
                    <option value='price'>price high to low</option>

                </Link>
                <Link href="/talentRecords?sort='-averageRating'">
                    <option value='-averageRating'>Rating low to high</option>

                </Link>
                <Link href="/talentRecords?sort='averageRating'">
                    <option value='averageRating'>Rating high to low</option>
                </Link>
            </select>

        </>
    )
};

export default TalentFilter;