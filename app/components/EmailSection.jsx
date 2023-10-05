'use client'
import Link from 'next/link'
import GitHubIcon from '../../public/icons/github1.svg'
import LinkedInIcon from '../../public/icons/linkedin.svg'
import Image from 'next/image'
import { useState } from 'react'

export const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (event) => {

        event.preventDefault();
        
        const data = {
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value
        }
        
        const JSONdata = JSON.stringify(data);

        const endpoint = "/api/send"

        const options = {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSONdata
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json()
        console.log(resData)

        if(response.status === 200){
            console.log('Message sent.');
            setEmailSubmitted(true)
        }
    }

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
        <div className="">
            <form action="" className='flex flex-col' onSubmit={handleSubmit}>
                <div className="mb-6">
                <label htmlFor="email" type='email' className='text-white block mb-2 text-sm font-medium'>
                    Your email
                </label>
                <input 
                    type="email" 
                    name="email"
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    id='email' 
                    required 
                    placeholder='jacob@google.com' 
                />
                </div>
                <div className="mb-6">
                <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>
                    Subject
                </label>
                <input 
                    type="text" 
                    name='subject'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    id='subject' 
                    required 
                    placeholder='Just saying hi' 
                />
                </div>
                <div className="mb-6">
                <label htmlFor="massage" className='text-white block mb-2 text-sm font-medium'>
                    Message
                </label>
                <textarea 
                    name='message'
                    id='message'  
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="Let's tolk about ..." 
                />
                </div>
                <button className="bg-[#54bbc2] hover:bg-[#419197] text-white font-medium py-2.5 rounded-lg w-full">
                    Send Message
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}
