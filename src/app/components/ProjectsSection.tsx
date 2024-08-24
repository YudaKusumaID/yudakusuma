import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Point of Sales",
        description: "A simple Point of Sale (POS) app built with C# Windows Forms and SQL Server.",
        image: "/images/projects/point_of_sales.png",
        tag: ["All", "Business"],
        gitUrl: "https://github.com/YudaKusumaID/ukk_kasir",
    },
    {
        id: 2,
        title: "Rehat Mata",
        description: "A simple App to remind users to take screen breaks, built with C# Windows Forms.",
        image: "/images/projects/rehat_mata.png",
        tag: ["All", "Productivity"],
        gitUrl: "https://github.com/YudaKusumaID/rehat-mata",
    }
]

const ProjectsSection = () => {
    return (
        <section id="projects" className="pt-24 -mt-32">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <div className="flex flex-wrap gap-4 justify-center px-4">
                {projectsData.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />
                )}
            </div>
        </section>
    )
}

export default ProjectsSection
