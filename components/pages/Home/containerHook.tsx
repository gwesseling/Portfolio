import {useRef} from 'react';

export default function useHome() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);

    function onAbout() {
        aboutRef.current.scrollIntoView({behavior: 'smooth'});
    };

    function onProjects() {
        projectsRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return {
        aboutRef,
        projectsRef,
        onAbout,
        onProjects
    }
}