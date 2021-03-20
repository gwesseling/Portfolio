import {useState} from 'react';

export default function useProject() {
    const [active, setActive] = useState<boolean>();

    function onEnter() {
        setActive(true);
    } 

    function onLeave() {
        setActive(false);
    }

    return {
        onEnter,
        onLeave,
        active,
    }
}