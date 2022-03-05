

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { userActions } from '../_actions';


import { Table } from '../AgGrid'; 




class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData: [
                {make: 'Toyota', model: 'Celica', price: 35000},
                {make: 'Ford', model: 'Mondeo', price: 32000},
                {make: 'Porsche', model: 'Boxter', price: 72000}
            ]
        }
    }
    componentDidMount() {   
        this.onSortChanged();
    }
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div style={{   margin: "0px",
            padding: "0px",
            height: "100vh",
            width: "100%",
            backgroundColor:"#E9DAC1" }}>


                <div style={{ backgroundColor: "black", height: "50px", display: "flex", justifyContent: "space-between", alignContent: "center" }}>

                    <div >
                        <img src="https://prominance.co.za/assets/images/prominance-upvc-windws-company-footer-logo-242x100.png" height="50px" />
                    </div>


                    <div style={{ display: "flex", justifyContent: "space-between", color: "white", width: "30%" }}>
                        <h4>Home</h4>
                        <h4>About</h4>
                        <h4>Blog</h4>
                    </div>
                    <div style={{}}>
                        <img style={{ borderRadius: "30px 30px 30px 30px", padding: "5px", paddingRight: "10px" }} height="50px" width="55px" src="https://www.seekpng.com/png/small/960-9607343_priya-female-profile-icon-in-circle.png" />
                    </div>


                </div>


                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1>Hi {user.firstName}!</h1>

                </div>

                <center>   <h3>All registered users:</h3></center>

                <div style={{ textAlign: "center", fontSize: "20px", fontFamily: "italic", width: "50%" }}>

               
                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    {users.items && 
                        <ul style={{ marginRight: "20px" }}>
                            {users.items.map((user, index) =>
                                <li key={user.id}>
                                    {user.firstName + ' ' + user.lastName}
                                    {
                                        user.deleting ? <em> - Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                    }
                                </li>
                            )}
                        </ul>
                         
                    }
                  
                 
<Table/>
                </div>
          
             

                 
                <center><h3><Link to="/login">Logout</Link></h3> </center>

             
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };

