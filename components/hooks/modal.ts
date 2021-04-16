import {useContext, useState, useEffect} from 'react';
import {ModalContext} from '_COMPONENTS/providers/Modal';

/** 
 * Handles modal functionalities.
 */
export default function useModal() {
    const [counter, setCounter] = useState<number>(0);
    const {images, isVisible, openModal, closeModal} = useContext(ModalContext);

    // Reset counter when images changes.
    useEffect(() => {
        setCounter(0);
    }, [images]);

    /** 
     * Go to next image.
     */
    function next() {
        counter < images.length - 1 ? setCounter(counter + 1) : setCounter(0);
    }

    /** 
     * Go to previous image.
     */
    function previous() {
        counter > 0 ? setCounter(counter - 1) : setCounter(images.length - 1);
    }

    /** 
     * On key press
    */
    function onKeyPress(e) {
        switch (e.key) {
            case "Escape":
                closeModal();
                break;
            default:
                break;
        }
    }

    return {
        image: images[counter] || "",
        images,
        isVisible,
        openModal,
        closeModal,
        next,
        previous,
        onKeyPress,
        counter,
    }
}