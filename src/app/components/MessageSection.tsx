"use client"
import React from 'react'
import GithubIcon from "../../../public/github-icon2.svg"
import LinkedInIcon from "../../../public/linkedin-icon2.svg"
import InstagramIcon from "../../../public/instagram-icon2.svg"
import Link from 'next/link'
import Image from 'next/image'
import { headers } from 'next/headers'
import { toast } from "sonner"

const MessageSection = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLInputElement).value;

        const data = {
            subject,
            message,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, option);
        const resData = await response.json();
        console.log(resData);

        if (response.status === 200) {
            
            console.log('Message sent.');
            toast.success('Message sent successfully!');
        }

        else {
            console.log('Message failed.')
            toast.error('Message failed to send!');
        }
    }
    
    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2 text-white mt-2">
                    <Link href="https://github.com/YudaKusumaID">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yuda-kusuma-07869b308/">
                        <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                    <Link href="https://instagram.com/yuda._kusuma">
                        <Image src={InstagramIcon} alt="Instagram Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..." 
                            />
                    </div>
                    <button
                    type="submit"
                    className="bg-white hover:bg-transparent hover:border hover:text-white border text-black font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default MessageSection