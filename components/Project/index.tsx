import useProject from './containerHook';
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDesktop} from '@fortawesome/free-solid-svg-icons';

export default function Project({title, subtitle, description, cover, buttons}) {
    const {active, onEnter, onLeave} = useProject();

    return (
        <div className="relative h-60 md:h-80 lg:w-1/3 w-full ml-4 mb-4 shadow-lg" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div className="h-full w-full flex flex-col justify-end absolute bg-gradient-to-b from-transparent to-black rounded p-4 z-50">
                <div className={`project-content-height overflow-hidden ${active ? 'active' : ''}`}>
                    <p className="text-xl sm:text-2xl text-white font-bold mb-0.5">{title}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2.5">{subtitle}</p>
                    <p className="text-sm sm:text-base text-gray-400 mb-2.5">{description}</p>
                    <div>
                        {buttons?.map(({text, icon}, i) => 
                            <button className="text-white bg-green-500 px-2 py-1.5 rounded text-sm mr-2" key={i}>
                                <FontAwesomeIcon className="mr-2" icon={icon} />
                                {text}
                            </button>
                        )}  
                    </div>
                </div>
            </div>
            <div className="h-full w-full">
                <Image className="rounded" src={cover} alt={title} layout="fill" objectFit="cover" />
            </div>
        </div>
    );
}