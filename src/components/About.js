import React, { useEffect, useState } from "react";
import sanityClient from "../Client";
import coloradoImage from "../Colorado.jpg";
import imageUrlBuilder  from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
            .then((data) => setAuthor(data[0]))
            .catch(console.error)
    }, []);

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img 
            src={ coloradoImage}
            alt= "Colorado"
            className="absolute w-full rounded opacity-90"
            ></img>
            <div className=" flex p-6 lg:pt-48 container mx-auto relative">
           
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20 bg-opacity-40 bg-gradient-to-b from-gray-50">
                    <img 
                    src={urlFor(author.authorImage).url()} 
                    className="rounded-lg w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    alt={author.name}>
                    </img>
                    <div className="text-lg flex flex-col justify-center ">
                        <h1 className=" text-6xl text-green-300 mb-4 ">
                            <span className=" cursive text-green-900 text-4xl text-green-100">{author.name}</span>
                        </h1>
                        <div className=" author-info leading-loose text-red-50">
                            <BlockContent 
                            blocks={author.bio} 
                            projectId="ufv5g491" 
                            dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}