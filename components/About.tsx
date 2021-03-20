import React from 'react';
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

function About(props, ref) {
    return (
        <div className="flex justify-center h-full md:h-3/5" ref={ref}>
            <div className="flex flex-col h-full lg:w-5/6 xl:w-4/6 2xl:w-3/6 lg:flex-row items-center justify-evenly lg:justify-between text-center">
                <div className="h-2/6 w-3/5 md:w-1/4">
                    <Image className="rounded-full" src="/about.jpg" alt="Gerard Wesseling" height={250} width={250} layout="responsive" objectFit="contain" />
                </div>
                <div className="text-sm md:text-base w-4/6">
                    <p className="text-gray-500 mb-1.5">Hey, my name is Gerard.</p>
                    <p className="text-gray-500 mb-1.5">I'm an Application Developer and a Software Engineer student.</p>
                    <p className="text-gray-500 mb-1.5">I have experience with many coding languages and frameworks including: HTML, CSS, JavaScript (and React, React Native), PHP (and Laravel), Java, C# and .Net.</p>
                    <p className="text-gray-500 mb-1.5">Intrigued by traveling, learning and meeting people. I'm ambitious, honest, a fast learner and I like to work hard for causes I believe in.</p>
                    <a href="https://www.linkedin.com/in/gerard-wesseling-451875154" target="_blank">
                      <FontAwesomeIcon className="text-gray-500 hover:text-blue-500 mr-4" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/gwesseling" target="_blank">
                      <FontAwesomeIcon className="text-gray-500 hover:text-black" icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default React.forwardRef(About);