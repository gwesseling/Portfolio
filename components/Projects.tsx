import React from 'react';
import Project from '_COMPONENTS/Project';
import projects from '_MOCKS/projects';

// TODO: preview designs
/** 
 * Project wrapper component.
 */
function Projects(props, ref) {
    return (
        <div className="project-wrapper flex flex-row flex-wrap bg-off-white" ref={ref}>
           {projects.map((project, i) => <Project key={i} {...project} />)}
        </div>
    );
}

export default React.forwardRef(Projects);
