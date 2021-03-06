import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"



export default function NavBar() {
    return (
        <header className="bg-green-100 bg-opacity-70">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-green-900 hover:text-green-500 text-5xl font-bold cursive tracking-widest"
                    >Brandon</NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 text-green-150 hover:text-green-600"
                        activeClassName="text-green-100 bg-green-400 rounded shadow-2xl"
                    >Blog Posts</NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 text-green-150 hover:text-green-600"
                        activeClassName="text-green-100 bg-green-400 rounded shadow-2xl"
                    >Projects</NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 text-green-150 hover:text-green-600"
                        activeClassName="text-green-100 bg-green-400 rounded shadow-2xl"
                    >About Me!</NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6 shadow-2xl rounded-md bg-green-50">
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