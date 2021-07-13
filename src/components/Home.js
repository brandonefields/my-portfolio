import { keyword } from "chalk";
import React from "react"
import backgroundImage from "../keyboard.jpg"

export default function Home() {
    return (
        <main>
            <img
                src={backgroundImage}
                alt="brandon's background"
                className="absolute object-cover w-full h-full"
            ></img>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
                <h1 className="text-6xl text-green-200 font-bold cursive leading-none lg:leading-snug home-name"
                >welcome</h1>
            </section>
        </main>
    );
}