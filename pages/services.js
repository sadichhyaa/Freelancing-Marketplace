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
                                    <a className="border rounded-pill m-3 px-3 py-2">Plumber
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Maid
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Electrician
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Carpenter
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Pest Control
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Movers
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Cook
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Gardener
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Baby Sitter
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2">Laundry
                                    </a>

                                </div>

                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    IT
                                </h1>
                                <div className="d-flex flex-wrap">
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Web Developer
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Graphics Designer
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">App Developer
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Networking
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Web Hosting
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Data Analysist
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">UI/UX Designer
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Ethical Hacking
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    Health
                                </h1>
                                <div className="d-flex">
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Doctor
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Therapits
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Old Age Care
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Nurse
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Veterarian
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row-12">
                            <div className="shadow p-3 mb-5 service-content bg-white">
                                <h1 className="service-category m-3">
                                    Others
                                </h1>
                                <div className="d-flex flex-wrap">
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Beautician
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Home Tutor
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Artist
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Tailor
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">language Translator
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Event Manager
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Security Guard
                                    </a>
                                    <a className="border rounded-pill m-3 px-3 py-2 text-nowrap">Driver
                                    </a>
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