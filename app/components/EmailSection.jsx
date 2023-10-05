'use client'
import Link from 'next/link'
import GitHubIcon from '../../public/icons/github1.svg'
import LinkedInIcon from '../../public/icons/linkedin.svg'
import Image from 'next/image'
import { FormEmail } from './FormEmail'

export const EmailSection = () => {

  return (
    <section className="grid md:grid-cols-2 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#78D6C6] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
            <p className="text-[#ABD7BE] mb-4 max-w-md">
                {" "}
                I am currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I will try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link
                    href="https://github.com/Davidcastel26"
                >
                    <Image src={GitHubIcon} alt='Github Icon'/>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/dev-david-larios/"
                >
                    <Image src={LinkedInIcon} alt='Github Icon'/>
                </Link>
            </div>
        </div>
        {/* <FormEmail /> */}
    </section>
  )
}
