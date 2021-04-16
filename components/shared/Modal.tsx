import React, {Fragment, useEffect, useRef} from 'react';
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import useModal from '_HOOKS/modal';
import Animation from '_SHARED/Animation';

/** 
 * Arrow component.
 */
function Arrow({className, icon, onClick}) {
    return (
        <button className={`flex items-center justify-center absolute h-12 w-12 bg-white rounded-full top-2/4 transform shadow cursor-pointer z-50 focus:outline-none ${className}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

/** 
 * Modal component.
 */
export default function Modal() {
    const {image, isVisible, images, closeModal, onKeyPress, next, previous} = useModal();

    // Register keyboard event for escape button.
    useEffect(() => {
        document.addEventListener("keydown", onKeyPress, false);
        return () => document.removeEventListener("keydown", onKeyPress, false);;
    }, []);

    return (
        <Animation animation="fade" enter={500} appear={500} leave={300}>
            {isVisible ? 
                <div className="h-full w-full fixed top-0 z-50 p-20">
                    <div className="absolute h-full w-full bg-black bg-opacity-60 top-0 left-0 cursor-pointer" onClick={closeModal} />
                        <div className="relative h-full w-full bg-black rounded shadow">
                            <Arrow className="-translate-x-1/2" icon={faChevronLeft} onClick={previous} />
                            <Image className="rounded" src={image} alt="modal" layout="fill" objectFit="contain" />
                            <Arrow className="translate-x-1/2 right-0" icon={faChevronRight} onClick={next} />
                        </div>
                </div> : null}
        </Animation>
    );
}