import {ReactNode} from 'react';
import Image from 'next/image'
import useProject from './containerHook';
import {ProjectType} from '_MOCKS/projects';
import Button from '_SHARED/Button';
import {faDesktop, faEye} from '@fortawesome/free-solid-svg-icons';
import useModal from '_HOOKS/modal';

type Props = ProjectType;

/** 
 * Project component.
 */
export default function Project({title, subtitle, description, preview = false, images = [], cover, buttons = []}: Props) {
    const {active, onEnter, onLeave} = useProject();
    const {openModal: openModalNative} = useModal();

    function openModal() {
        openModalNative(images);
    }

    return (
        <div className="project relative h-60 md:h-80 md:wm-50 lg:wm-33 w-full shadow-lg" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div className="h-full w-full flex flex-col justify-end absolute bg-gradient-to-b from-transparent to-black z-50 rounded">
                <div className={`p-4 project-content-height overflow-hidden ${active ? 'active' : ''}`}>
                    <p className="text-xl sm:text-2xl text-white font-bold mb-0.5">{title}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3.5">{subtitle}</p>
                    <p className="text-sm sm:text-base text-gray-400 mb-2.5">{description}</p>
                    <div>
                        {buttons.map((button, i) => 
                            <Button {...button} key={i} />
                        )}
                        {preview ? 
                            <Button icon={faEye} text="preview" onClick={openModal} /> : null
                        }  
                    </div>
                </div>
            </div>
            <Image className="rounded" src={cover} alt={title} layout="fill" objectFit="cover" />
        </div>
    );
}