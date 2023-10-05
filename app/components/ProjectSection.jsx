'use client'
import { projectsInfo } from "@/utils/data"
import { ProjectCard } from "./ProjectCard"
import { ProjectTag } from "./ProjectTag"
import { useState } from "react"

export const ProjectSection = () => {

  const [tag, setTag] = useState("All")

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsInfo.filter((info) => 
    info.tag.includes(tag)
  )

  return (
    <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 p-4">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center gap-2 py-6">
          <ProjectTag 
            onClick={handleTagChange} 
            name='All' 
            isSlected={tag === "All"}
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name='React' 
            isSlected={tag === "React"}
          />
          <ProjectTag 
            onClick={handleTagChange} 
            name='NextJs' 
            isSlected={tag === "NextJs"}
          />
        </div>
        <div className="">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {
                filteredProjects.map((project) => (
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
