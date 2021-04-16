import React, {createContext, useState} from 'react';
import Modal from '_SHARED/Modal';

export const ModalContext = createContext({
    openModal: (images: Array<string>) => {
        console.warn("Open modal called but not yet initialized");
        return;
    },
    closeModal: () => {
        console.warn("Close modal called but not yet initialized");
        return;
    },
    images: [],
    isVisible: false,
});

/** 
 * Modal provider.
 */
export default function ModalProvider({children}) {
    const [images, setImages] = useState<Array<string>>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function openModal(images: Array<string>) {
        setIsVisible(true);
        setImages(images);
    }

    function closeModal() {
        setIsVisible(false);
    }

    return (
        <ModalContext.Provider value={{images, isVisible, openModal, closeModal}}>
            {children}
            <Modal />
        </ModalContext.Provider>
    );


} 