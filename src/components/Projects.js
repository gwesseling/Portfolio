import React, {Component} from 'react';
import Project from './shared/Project';
import Button from './shared/Button';
import image from '../img/projects/TC.png';
import image2 from '../img/projects/phantune.png';
import image3 from '../img/projects/renddj.png';

/**
 * Projects.
 */
class Projects extends Component {
    /**
     * @inheritDoc
     */
    render() {
        return (
            <div className="projects">
                <Project
                    cover={image}
                    title='TradeCast TV'
                    subtitle="APP | (internship) TradeCast B.V"
                    description="TradeCast provides the techniques and software to start your own online tv channel.
                    With the TradeCast anyone can start there own tv channel for affordable price.
                    At TradeCast I helped developing there new Android and iOS app."
                >
                    <Button href="https://itunes.apple.com/nl/app/tradecast-tv/id1045905936?mt=8">
                        <i className="fab fa-apple"/> iOS
                    </Button>
                    <Button href="https://play.google.com/store/apps/details?id=eu.tradecast.tradecasttv&hl=nl">
                        <i className="fab fa-google-play"/> Android
                    </Button>
                </Project>
                <Project
                    cover={image2}
                    title="Phantune"
                    subtitle="Single Page App (SPA) | Gerard Wesseling"
                    description="Phantune is a project that I started in 2016, to learn more about the techniques behind streaming audio.
                        This project is inspired by music streaming services like Spotify and Soundcloud."
                >
                    <Button disabled={true}>
                        <i className="fas fa-spinner"/> Work in progress
                    </Button>
                </Project>
                <Project
                    cover={image3}
                    title="R&D DJ"
                    subtitle="Website | René Bloemers & Dion Hulleman"
                    description="R&D DJ is a website for 2 DJs called René and Dion."
                >
                    <Button href="http://renddj.nl/">Check it out <i className="fas fa-arrow-right"/></Button>
                </Project>
            </div>
        );
    }
}

export default Projects;
