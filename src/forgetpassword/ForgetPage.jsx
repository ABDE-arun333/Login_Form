import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { userActions } from '../_actions';
import { render } from 'react-dom';



class Forgot extends React.Component{
    constructor(props){
        super(props);
        this.state ={
             detail: {
                 forgotpassword:''
             },
           submitted:false

        };

    }

render(){
    const { forgot} =this.props;
    const {detail,submitted}=this.state;
    return (

        <div
            style={{
             
                    margin: "0px",
                    padding: "0px",
                    height: "100vh",
                    width: "100%",
                    backgroundColor:"#E9DAC1",
                
             
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
                    <div
                        style={{

                            alignContent: "center"
                        }} >
                        <div
                            style={{


                                height: "150px", width: "100%",


                            }}>

                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2fWEVg_Y4vPR9vlFkLWBYD7qYI78VxMPJ31ihv2sKXJUBwVbpgXMsCuIZgQJiC9Jqa4&usqp=CAU' alt='this is lock image' height="100%" width="100%" />
                        </div>
                        <div>
                            <h3 style={{
                                textAlign: "center",
                                marginTop: "10px"

                            }}>Forgot Password</h3>
                            <p style={{
                                textAlign: "center",
                                marginTop: "10px"

                            }}>Enter your phone number and well send you as link to reset your password</p>


                            <form name="form" onSubmit={this.handleSubmit}>



                                <div style={{height: "76px"}}>

                                </div>



                                <button type="" className="form-control" style={{ backgroundColor: "lightgreen", }} onClick={() => { alert("number is not defaind") }}  >submit</button>

                                <div style={{

                                    display: "flex",
                                    justifyContent: "center",
                                    alignContent: "center",

                                }}>

                                    <Link to="/login" className="btn btn" style={{ border: "none", backgroundColor: "white", marginTop: "10px" }}><FaArrowLeft style={{ paddingTop: "5px" }} />back to login</Link>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
                            }
}
export default Forgot;