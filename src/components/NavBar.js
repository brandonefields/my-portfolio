import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"



export default function NavBar() {
    return (
        <header className="bg-green-200">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-green-900 hover:text-green-500 text-4xl font-bold cursive tracking-widest"
                    >Brandon</NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-900"
                        activeClassName="text-red-100 bg-green-600"
                    >Blog Posts</NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-900"
                        activeClassName="text-red-100 bg-green-600"
                    >Projects</NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-green-600"
                    >About Me!</NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://github.com/brandonefields"
                        className=" mr-4" 
                        target="blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }}
                    ></SocialIcon>
                    <SocialIcon
                        url="https://www.instagram.com/brandoneugenefields/"
                        className=" mr-4" 
                        target="blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }}
                    ></SocialIcon>
                    <SocialIcon
                        url="https://brandonefields.medium.com/"
                        className=" mr-4" 
                        target="blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }}
                    ></SocialIcon>
                    <SocialIcon
                        url="https://www.linkedin.com/in/brandon-eugene-fields-0408167a/"
                        className=" mr-4" 
                        target="blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }}
                    ></SocialIcon>

                </div>
            </div>
        </header>
    )
}