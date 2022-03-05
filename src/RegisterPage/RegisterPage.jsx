import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
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

                    <div className="col-md-6 " style={{ backgroundColor: "white", height: "90%", width: "100%" }}>
                        <h2
                            style={{
                                
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "30px",
                                padding: "10px",
                                fontFamily: "italick"
                            }}>Create Account</h2>


                        <form name="form" style={{ height: "30px" }} onSubmit={this.handleSubmit}>
                            <div style={{ marginTop: "20px" }} className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>

                                <input type="text" className="form-control" placeholder='First Name' name="firstName" value={user.firstName} onChange={this.handleChange} />
                                {submitted && !user.firstName &&
                                    <div className="help-block">First Name is required</div>
                                }
                            </div>
                            <div style={{ marginTop: "20px" }} className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>

                                <input type="text" className="form-control" placeholder='Last Name' name="lastName" value={user.lastName} onChange={this.handleChange} />
                                {submitted && !user.lastName &&
                                    <div className="help-block">Last Name is required</div>
                                }
                            </div>
                            <div style={{ marginTop: "20px" }} className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>

                                <input type="text" className="form-control" name="username" placeholder='Username' value={user.username} onChange={this.handleChange} />
                                {submitted && !user.username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div style={{ marginTop: "20px" }} className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>

                                <input type="password" className="form-control" placeholder='Password' name="password" value={user.password} onChange={this.handleChange} />
                                {submitted && !user.password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group" style={{
                                marginBottom: "10px",
                                display: "flex",
                                justifyContent: "space-between",
                                position: "absolute",
                                bottom: "11px",
                                width: "86%",
                            }}>
                                <button className="btn btn-primary" style={{ width: "45%", marginTop: "7px", boxShadow: "0px 1px 0px 1px ", fontSize: "12px", borderRadius: "50px", }}>Register</button>
                                {registering &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Link to="/login" className="btn btn-primary" style={{ width: "45%",  marginTop: "7px", boxShadow: "0px 1px 0px 1px ", fontSize: "12px", borderRadius: "50px", }}>Back to login</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };