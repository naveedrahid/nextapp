const RestaurantLogin = () => {
    return (
        <div className="loginWrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form className="loginForm">
                            <div className="form-group">
                                <input type="email" placeholder="Enter your Email" className="form-control mb-3"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Enter your Password" className="form-control mb-3"/>
                            </div>
                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantLogin;