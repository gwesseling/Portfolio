import React from 'react';
import Project from '_COMPONENTS/Project';
import projects from '_MOCKS/projects';

// TODO: preview designs
// TODO: change this so I can show 2 items per row.
function Projects(props, ref) {

    /** 
     * Render project rows.
     */
    function renderProjects() {
        let nodes = [];

        let container = [];
        for(let i = 0; i < projects.length; i++) {
            let counter = i + 1;
            container.push(<Project key={i} {...projects[i]} />);
        
            if (container.length > 0 && counter === projects.length) {
                // Add dummy components
                for (let j = 0; j <= (3 - container.length); j++) {
                    container.push(<div key={`dummy-${j}`} className="relative h-2/5 lg:w-1/3 hidden lg:block ml-4 mb-4 shadow-lg" />);
                }
            }

            if (counter > 0 && container.length % 3 === 0) {
                nodes.push(<div key={`row-${i}`} className="flex flex-col lg:flex-row w-full pr-4">{container}</div>);
                container = [];
            }
        }

        return nodes;
    }

    return (
        <div className="pr-4" ref={ref}>
           {renderProjects()}
        </div>
    );
}

export default React.forwardRef(Projects);
