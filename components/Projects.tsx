import React from 'react';
import Project from '_COMPONENTS/Project';
import projects from '_MOCKS/projects';

// TODO: preview designs
/** 
 * Project wrapper component.
 */
function Projects(props, ref) {
    return (
        <div className="flex flex-row flex-wrap md:p-4 md:pr-8 bg-off-white" ref={ref}>
           {projects.map((project, i) => <Project key={i} {...project} />)}
        </div>
    );
}

export default React.forwardRef(Projects);
