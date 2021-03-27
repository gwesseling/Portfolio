import React, {useRef} from 'react';
import Head from 'next/head'
import Topbar from '_COMPONENTS/Topbar';
import Banner from '_COMPONENTS/Banner';
import About from '_COMPONENTS/About';
import Divider from '_COMPONENTS/Divider';
import Projects from '_COMPONENTS/Projects';
import useHome from './containerHook';

/** 
 * Home page.
 */
export default function Home() {
    const {aboutRef, projectsRef, onAbout, onProjects} = useHome();

    return(
        <div className="h-screen w-screen">
            <Head>
                <title>Gwesseling - Software Engineer student</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar onAbout={onAbout} onProjects={onProjects} />
            <Banner />
            <About ref={aboutRef} />
            <Divider />
            <Projects ref={projectsRef} />
        </div>
    );
}