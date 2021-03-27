import React from 'react';

/** 
 * Topbar commponent.
 */
export default function Topbar({onAbout, onProjects}) {
    return (
        <div className="flex h-14 w-full absolute z-10 p-4 justify-between">
            <div className="text-sm sm:text-base font-bold uppercase text-white">Gwesseling</div>
            <div className="flex">
                <div className="text-sm sm:text-base text-white pr-4 border-r cursor-pointer hover:underline" onClick={onAbout}>About</div>
                <div className="text-sm sm:text-base text-white pl-4 cursor-pointer hover:underline" onClick={onProjects}>Projects</div>
            </div>
        </div>
    );
}