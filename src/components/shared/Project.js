// @flow
import React, {Component} from 'react';
import '../../css/components/projects.css';

type projectProps = {
    cover: string,
    title: string,
    subtitle: string,
    description: string,
    children: Array,
}

/**
 * Project.
 */
class Project extends Component<projectProps> {
    /**
     * @inheritDoc
     */
    render() {
        const {cover, title, subtitle, description, children} = this.props;
        return (
            <div className="project">
                <img className="project-image" alt={title} src={cover} draggable={false}/>
                <div className="project-content">
                    <p className="project-title">{title}</p>
                    <p className="project-subtitle">{subtitle}</p>
                    <p className="project-description">
                        {description}
                    </p>
                    <div className="project-children">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
