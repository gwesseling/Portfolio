import React from 'react';

/** 
 * Divider component.
 */
export default function Divider() {
    return (
         <div className="relative h-1/3 bg-divider bg-cover bg-center">
              <div className="flex flex-col items-center justify-center h-full w-full p-4 bg-black bg-opacity-60">
                    <p className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">"The only source of knowledge is experience."</p>
                    <p className="text-gray-400">- Albert Einstein</p>
              </div>
          </div>
    );
}