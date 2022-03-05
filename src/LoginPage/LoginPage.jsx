import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaGoogle, FaFacebook, FaTwitter, FaEmail, FaPasword } from 'react-icons/fa';
import { userActions } from '../_actions';
// import { Color } from 'ag-grid-community';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E9DAC1",
                    height: "100%",
                }}>
                <div
                    style={{

                        width: "26%",
                        height: "500px"
                    }}>


                    <div className="col-md-12 " style={{ backgroundColor: "white", height: "95%" }}>
                        <h2
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "30px",
                                padding: "10px",
                                fontFamily: "italick"
                            }}>Login Form</h2>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%"

                            }}>

                            <div class="col-12">

                                <Link to="/register" className="btn btn" >< img src="https://developers.google.com/homepage-assets/images/chromeos-logo.png"
                                    alt="" width="50" height="50" ></img></Link>
                            </div>
                            <div class="col-12">

                            <Link to="/register" className="btn btn">< img src="https://affieswildsfees.co.za/wp-content/uploads/2020/03/hiclipart.com-2.png"
                                    alt="" width="50" height="50" ></img></Link>
                            </div>
                            <div class="col-12">

                                <Link to="/register" className="btn btn">< img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4HPEX-ppGCkxFvTXwFgMW4Qjb-Wk84ITii7K4QbHKJBjRPiejlbadUNncCr5WJMLGHw&usqp=CAU"
                                    alt="" width="50" height="50" ></img></Link>
                            </div>

                        </div>

                        <div style={{
                            padding: "10px"
                        }}>
                            <center><h4>
                                or use your email account
    </h4></center>
                        </div>



                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>

                                <input type="text" className="form-control" name="username" placeholder='Email' value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>

                                <input style={{ marginTop: "10px" }} type="password" className="form-control" name="password" placeholder='Password' value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div
                                style={{

                                    display: "flex", justifyContent: "flex-end  ",


                                }}>
                                <Link to="/ForgetPage" style={{ fontSize: "12px" }}>Forget your password?</Link>
                            </div>
                            <div className="form-group" style={{marginTop:"20px",paddingTop:"20px"  }} >
                               
                                <button  class="form-control btn btn-primary"  >Login</button>
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                               
                                </div>
                                <div className="" > 
                              <center>  <Link to="/register" style={{ marginTop: "8px",  fontSize: "12px", borderRadius: "50px", }}>Register</Link></center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };