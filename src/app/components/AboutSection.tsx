"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { title } from 'process';
import { Content } from 'next/font/google';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>C++</li>
                <li>C#</li>
                <li>Python</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>SQL Server</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    SMK Negeri 1 Mas-Ubud
                </li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>LKS Kabupaten Gianyar Cabang IT Software Solution for Business</li>
                <li>LKS Provinsi Bali IT Software Solution for Business</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const currentTab = TAB_DATA.find((t) => t.id === tab) || { content: null };

    return (
        <section id="about" className="text-white pt-20 -mt-20">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about.png" alt="about.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                    Hi, I’m a student with a passion for backend development, low-level programming, and cybersecurity.
                    My curiosity drives me to dig deep into how technology functions at its core. Whether it’s crafting
                    efficient backend solutions or exploring the intricacies of system security, I’m always on the lookout
                    for ways to improve and secure the digital landscape. I love tackling challenges and learning new things,
                    and I’m excited about the endless possibilities in the tech world!
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills {" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education {" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience {" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{currentTab.content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection