'use client'
import { useState, useTransition } from 'react'
import { personSkills } from "@/utils/data"
import Image from "next/image"
import { InfoBtn, TabButton } from './TabButton'

export const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = ( id ) => {
        startTransition( () => {
            setTab( id )
        })
    }

    const getInfoSkills =  personSkills.find((skill) => skill.name === tab ).info.join(' -- ');

  return (
    <section className="text-white">
        <div 
            className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        >
            <Image
             src="/images/hero4.png"
             width={500}
             height={400}
             alt='img'
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full  ">
                <h2 className="text-4xl font-bold text-white mb-4">
                    About Me
                </h2>
                <p className="text-base lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, facere sequi similique in vero mollitia. Dolores vero error qui fugiat harum consectetur aliquid laboriosam deserunt neque culpa eum, assumenda quibusdam!
                </p>
                <div className="flex flex-row mt-8">
                    {
                        personSkills.map((skill,index) => {
                            return (
                            <TabButton
                                key={index}
                                selectTab={() => handleTabChange(skill.name)}
                                active={tab === skill.name}
                            >
                                {skill.name}
                            </TabButton>
                        )})   
                        
                    }
                </div>
                <div className="mt-8">
                {getInfoSkills}
                </div>
            </div>
        </div>
    </section>
  )
}
