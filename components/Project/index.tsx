import {ReactNode} from 'react';
import useProject from './containerHook';
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {ProjectType} from '_MOCKS/projects';

type Props = ProjectType;

/** 
 * Project component.
 */
export default function Project({title, subtitle, description, cover, buttons = []}: Props) {
    const {active, onEnter, onLeave} = useProject();

    return (
        <div className="relative h-60 md:h-80 md:w-3/6 lg:w-1/3 w-full shadow-lg" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div className="h-full w-full flex flex-col justify-end absolute bg-gradient-to-b from-transparent to-black z-50">
                <div className={`p-4 project-content-height overflow-hidden ${active ? 'active' : ''}`}>
                    <p className="text-xl sm:text-2xl text-white font-bold mb-0.5">{title}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3.5">{subtitle}</p>
                    <p className="text-sm sm:text-base text-gray-400 mb-2.5">{description}</p>
                    <div>
                        {buttons.map(({text, icon, url}, i) => 
                            <a href={url} target="_blank" className="text-white rounded bg-green-500 px-2 py-1.5 text-sm mr-2" key={i}>
                                <FontAwesomeIcon className="mr-2" icon={icon} />
                                {text}
                            </a>
                        )}  
                    </div>
                </div>
            </div>
            <Image src={cover} alt={title} layout="fill" objectFit="cover" />
        </div>
    );
}