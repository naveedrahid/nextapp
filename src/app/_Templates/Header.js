import Link from "next/link";

const Header = () => {
    return(
        <div className="mainHeader">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <img src="/img/logo.jpg" className="img-fluid logoHeader" alt="" />
                    </div>
                    <div className="col-8">
                        <ul className="list-unstyled d-flex">
                            <li className="me-3">
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li className="me-3">
                                <Link href={'/resturant'}>Login</Link>
                            </li>
                            <li className="me-3">
                                <Link href={'/'}>Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;