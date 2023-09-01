import Navbar from "../components/Navbar";

const Header = () => {
    return (
        <header>
            <div className="d-flex  mt-3 justify-content-center align-items-center">
            <img src="/crown.png" alt="" height={30} className="me-1" />
            <h3 style={{color: "#ffcd34 "}} className="mb-0">Clash Royale Info</h3>
            </div>
            <a
                href="https://github.com/11Dwiwijaya"
                className="created-by text-white"
            >
                <small className="created-by text-white">
                    created by :&nbsp;
                    Dwi Wijaya <li className="fa-brands fa-github"></li>
                </small>
            </a>
            <Navbar />
        </header>
    );
};
export default Header;
