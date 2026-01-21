import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

export default function Forgot_password_page() {

    return(
        <>
        <div className="all_items">
            <div><h1 className="title_logo">NAJIBOX</h1></div>
            <div className="border">
                <h1>Recover your password</h1>
            
                <form>
                <div className="inp">
                    <input type="email" placeholder="Email" required/>
                                      
                </div>
               
                <div className="btn">
                    <button type="submit">Send Me Email</button>
                </div></form>
                <div className="link_register">
                    <h3>Don't have an account?</h3>
                    <Link className="link" to="/register">Register</Link>
                </div>
            </div>
            
        </div>
        </>
    )
}