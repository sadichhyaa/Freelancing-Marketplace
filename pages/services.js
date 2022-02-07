import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Services = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className="container-fluid px-0 text-align-center position-relative">
                    <div className="banner2 d-flex align-items-center justify-content-center">

                    </div>
                    <div className="banner-overlay position-absolute top-0 left-0 w-100 h-100 ">
                    </div>
                    <div
                        className="banner-content position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center">
                        <h1 className="fw-bold" style={{ color: "var(--white)", letterSpacing: "0.095em" }}>Our Services
                        </h1>
                    </div>
                </div>

                <div className="container-fluid  pt-5 mt-5 ">
                    <div className="col px-5 service-col">
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">Home</h1>
                                <div className="d-flex">
                                    <div className="border rounded-pill m-3 px-3 py-2">Plumber
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Maid
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Electrician
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Carpenter
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Pest Control
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Movers
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Cook
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Gardener
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Baby Sitter
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2">Laundry
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    IT
                                </h1>
                                <div className="d-flex flex-wrap">
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Web Developer
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Graphics Designer
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">App Developer
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Networking
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Web Hosting
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Data Analysist
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">UI/UX Designer
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Ethical Hacking
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    Health
                                </h1>
                                <div className="d-flex">
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Doctor
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Therapits
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Old Age Care
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Nurse
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Veterarian
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    Others
                                </h1>
                                <div className="d-flex flex-wrap">
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Beautician
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Home Tutor
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Artist
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Tailor
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">language Translator
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Event Manager
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Security Guard
                                    </div>
                                    <div className="border rounded-pill m-3 px-3 py-2 text-nowrap">Driver
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );

};

export default Services;