import React from "react"
import backgroundImage from "../keyboard.jpg"

export default function Home() {
    return (
        <main className="relative flex  ">
            <img
                src={backgroundImage}
                alt="brandon's background"
                className="absolute object-cover w-full h-full"
            ></img>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
                <h1 className=" flex justify-center bm-4 text-8xl text-green-200 font-bold cursive leading-none lg:leading-snug home-name opacity-75"
                >welcome</h1>
            </section>
        </main>
    );
}