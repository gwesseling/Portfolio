// @flow
import React, {Component} from 'react';
import type {Node} from 'react';
import '../../css/App.css';

type buttonProps = {
    children: Array,
    href: String,
    disabled: String,
}

/**
 * Button component.
 */
class Button extends Component<buttonProps> {
    /**
     * @inheritDoc
     */
    render(): Node {
        const {children, href, disabled} = this.props;
        return (
            <a target="_new" href={href}>
                <div className={'button' + (disabled ? ' disabled' : '')}>
                    {children}
                </div>
            </a>
        );
    }
}

export default Button;
