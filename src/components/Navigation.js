import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"
import $ from "jquery";


    class Navigation extends React.Component{

        componentDidMount() {
            $(".login-btn").on('click',function (){
                console.log("asdasdasdasd")
            })
        }


        render() {

            return (
                <div className="navbox">
                    <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>

                    <div className="loginbox">
                        <div className="dsadsa">
                            <input type="text" className="asd"/>
                            <input type="text" className="asd"/>
                            <button className="login-btn">로그인</button>
                            <button className="join-btn">회원가입</button>
                        </div>
                    </div>

                </div>

            );
        }
}

export default Navigation;