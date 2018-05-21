// @flow
import React, {Component} from 'react';
import type {Node} from 'react';

type NavBarItemProps = {
    onClick: () => void,
    children: Array,
}

/**
 * NavBar item.
 */
class NavBarItem extends Component<NavBarItemProps> {
    /**
     * @inheritDoc
     */
    render(): Node {
        const {children, onClick} = this.props;
        return (
            <li className="navBar-item" onClick={onClick}>{children}</li>
        );
    }
}

export default NavBarItem;
