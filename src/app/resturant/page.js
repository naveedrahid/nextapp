"use client";
import { useState } from "react";
import RestaurantLogin from "../_Components/RestaurantLogin";
import RestaurantSignup from "../_Components/RestaurantSignup";

const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (
        <div className="mainWrapper">
            <h1 className="text-center">Restaurant Page</h1>
            {login ? <RestaurantLogin /> : <RestaurantSignup />}

            <div className="text-center">
                <button onClick={() => setLogin(!login)} className="btn btn-link">
                    {login ? "Already have an account? Login" : "Do not have an account? SignUp"}
                </button>
            </div>
        </div>
    );
}

export default Restaurant;