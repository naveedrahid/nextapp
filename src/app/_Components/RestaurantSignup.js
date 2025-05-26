import { useState } from "react";

const RestaurantSignup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setC_password] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const handleSingup = async () => {
        console.log(email, password, c_password, name, city, address, contact);
        let result = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password, name, city, address, contact }),
        });

        result = await result.json();
        // console.log(result);
    }

    return (
        <div className="signupWrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        {/* <form className="signupForm"> */}
                        <div className="form-group">
                            <input type="email" placeholder="Enter email address" className="mb-3 form-control"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Enter your password" className="mb-3 form-control"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Confirm your password" className="mb-3 form-control"
                                value={c_password} onChange={(e) => setC_password(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Restaurant name" className="mb-3 form-control"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="City name" className="mb-3 form-control"
                                value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Address" className="mb-3 form-control"
                                value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Contact number" className="mb-3 form-control"
                                value={contact} onChange={(e) => setContact(e.target.value)} />
                        </div>
                        <button className="btn btn-primary" onClick={handleSingup}>SignUp</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantSignup;