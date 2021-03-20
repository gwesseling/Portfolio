import React from 'react';

export default function Divider() {
    return (
         <div className="relative h-1/3 bg-divider bg-cover bg-center mb-4">
              <div className="flex flex-col items-center justify-center h-full w-full p-4" style={{background: 'rgba(0,0,0, .6)'}}>
                    <p className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">"The only source of knowledge is experience."</p>
                    <p className="text-gray-400">- Albert Einstein</p>
              </div>
          </div>
    );
}