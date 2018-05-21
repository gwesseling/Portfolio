// @flow
import React, {Component} from 'react';
import type {Node} from 'react';
import '../css/App.css';
import Banner from './Banner';
import NavBar from './Navbar';
import NavBarItem from './NavBarItem';
import About from './About';
import Divider from './Divider';
import Projects from './Projects';

/**
 * App.
 */
class App extends Component {
    /**
     * Scroll to.
     * @param {Object} ref
     */
    scrollTo = (ref) => {
        ref.scrollIntoView({behavior: 'smooth'});
    };

    /**
     * @inheritDoc.
     */
    render(): Node {
        return (
            <div className="container">
                <NavBar>
                    <NavBarItem onClick={() => this.scrollTo(this.about)}>About</NavBarItem>
                    <NavBarItem onClick={() => this.scrollTo(this.projects)}>Projects</NavBarItem>
                </NavBar>
                <Banner position="bottom"/>
                <div ref={(ref) => {
                    this.about = ref;
                }}>
                    <About/>
                </div>
                <Divider/>
                <div ref={(ref) => {
                    this.projects = ref;
                }}>
                    <Projects/>
                </div>
            </div>
        );
    }
}

export default App;
