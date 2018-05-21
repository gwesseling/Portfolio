// @flow
import React, {Component} from 'react';
import type {Node} from 'react';
import '../css/components/navbar.css';

type navBarProps = {
    children: Array,
}

/**
 * NavBar.
 */
class NavBar extends Component<navBarProps> {
    /**
     * @inheritDoc
     */
    render(): Node {
        const {children} = this.props;
        return (
            <div className="navBar">
                <ul className="navBar-items">
                    <li className="navBar-logo">gwesseling</li>
                    <div className="right">
                        {children}
                    </div>
                </ul>
            </div>
        );
    }
}

export default NavBar;
