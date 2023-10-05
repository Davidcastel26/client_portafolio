import { useState } from 'react'

export const FormEmail = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)
/*
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

*/
  return (
    <div className="">
        {/* <form action="" className='flex flex-col' onSubmit={handleSubmit}> */}
        <form action="" className='flex flex-col' onSubmit={() => setEmailSubmitted(!emailSubmitted) }>
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
  )
}
