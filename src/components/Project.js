import React, { useEffect, useState } from "react";
import sanityClient from "../Client";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
            .catch(console.error)
    }, []);

    return (
        <main className="bg-green-200 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my projects page!
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className=" relative rounded-lg shadow-2xl bg-gradient-to-b from-green-50 to-yellow-50 p-16">
                            <h3 className=" underline text-green-900 text-3xl font-bold mb-2 hover:text-green-500">
                                <a
                                    className="author-info"
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-gray-400 text-s space-x-4">
                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Company</strong>:{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className=" body-font my-6 text-xl text-green-900 leading-relaxed">{project.description}</p>
                                <a
                                    href={project.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="text-yellow-500 font-bold hover:underline hover:text-red-600 text-xl"
                                >
                                     View This Project{" "}
                                    <span role="img" aria-label="right pointer">
                                        👉
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}