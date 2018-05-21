// @flow
import React, {Component} from 'react';
import type {Node} from 'react';
import '../css/components/about.css';
import aboutImage from '../img/about2.jpg';

/**
 * About.
 */
class About extends Component {
    /**
     * @inheritDoc
     */
    render(): Node {
        return (
            <div className="about">
                <div className="about-content">
                    <img className="about-image" alt="about" src={aboutImage} draggable={false} />
                    <div className="about-story">
                        <p className="about-text spacing">Hey, my name is Gerard.</p>
                        <p className="about-text spacing">I'm a soon to be Application Developer and an upcoming Software Engineer student.</p>
                        <p className="about-text">I have experience with many coding languages and frameworks including:</p>
                        <p className="about-text spacing">HTML, CSS, JavaScript, PHP (and Laravel), C#, .Net, React and React Native.</p>
                        <p className="about-text">Intrigued by traveling, learning and meeting people.</p>
                        <p className="about-text">I'm ambitious, honest, a fast learner and I like to work hard for things I like.</p>
                        <div className="social-icons">
                            <a href="https://twitter.com/gwesselingnl" target="blank" className="social-icon">
                                <i className="fab fa-twitter"/>
                            </a>
                            <a href="https://www.instagram.com/gwesseling/" target="blank" className="social-icon">
                                <i className="fab fa-instagram"/>
                            </a>
                            <a href="https://github.com/gwesseling" target="blank" className="social-icon">
                                <i className="fab fa-github"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
