import {useRef} from 'react';

/** 
 * Handles home methodes.
 */
export default function useHome() {
    const aboutRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);

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