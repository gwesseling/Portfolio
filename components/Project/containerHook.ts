import {useState} from 'react';

/** 
 * Handles project methodes.
 */
export default function useProject() {
    const [active, setActive] = useState<boolean>(false);

    /** 
     * OnMouseEnter.
     */
    function onEnter() {
        setActive(true);
    } 

    /** 
     * OnMouseLeave.
     */
    function onLeave() {
        setActive(false);
    }

    return {
        onEnter,
        onLeave,
        active,
    }
}