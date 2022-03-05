import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';

import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import  Forget  from '../forgetpassword/ForgetPage';



class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div
                style={{
                    margin: "0px",
                    padding: "0px",
                    height: "100vh",
                    width: "100%",
                    backgroundColor:"#E9DAC1"
                
                }}>

                <div  style={{height:"100%" ,width:"100%", backgroundColor:"#E9DAC1"}}>
                    {alert.message &&
                        <div style={{display:"flex",justifyContent:"center",alignContent:"center",marginRight:"37%",marginLeft:"37%"}}  className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/ForgetPage" component={Forget} />
          
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };