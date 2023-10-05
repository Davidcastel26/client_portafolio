import { projectsInfo } from "@/utils/data"
import { ProjectCard } from "./ProjectCard"

export const ProjectSection = () => {
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 p-4">
          My Projects
        </h2>
        <div className="">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {
                projectsInfo.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    link={project.link}
                    codeLink={project.codeLink}
                  />
                ))
              }
            </div>
        </div>
    </>
  )
}
