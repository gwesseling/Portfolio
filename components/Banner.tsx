import React from 'react';
import Topbar from '_COMPONENTS/Topbar';

/** 
 * Banner component
 */
export default function Banner() {
    return (
        <div className="banner relative bg-cover bg-banner bg-center-bottom">
            <div className="h-full w-full absolute bg-gradient-to-b from-transparent to-gray-700"/>
            <div className="h-full w-full flex flex-col absolute justify-center items-center">
            <div className="p-4">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2">Hi, my name is Gerard Wesseling.</p>
                <p className="text-2xl md:text-4xl lg:text-5xl md:font-bold text-white text-center">A developer who wants to change the world.</p>
            </div>
            </div>
        </div>
    );
}