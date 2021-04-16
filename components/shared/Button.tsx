import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type LinkProps = {
    className: string;
    url: string;
    children: ReactNode;
}

/** 
 * Link component.
 */
function Link({className, url, children}: LinkProps) {
    return <a className={className} href={url} target="_blank">{children}</a>
}

type ButtonProps = {
    className: string;
    onClick: () => void;
    children: ReactNode;
}

/** 
 * Button component.
 */
function Button({className, onClick, children}: ButtonProps) {
    return <button className={className} onClick={onClick}>{children}</button>;
}

type WrapperProps = {
    text: string;
    icon: any;
    url?: string;
    onClick?: () => void;
}

/** 
 * Button wrapper component
 */
export default function Wrapper({text, icon, url, onClick}: WrapperProps) {
    const Component = url ? Link : Button;

    return (
        <Component className="text-white rounded bg-green-500 px-2 py-1.5 text-sm mr-2 focus:outline-none" url={url} onClick={onClick}>
            <FontAwesomeIcon className="mr-2" icon={icon} />
            {text}
        </Component>
    );
}