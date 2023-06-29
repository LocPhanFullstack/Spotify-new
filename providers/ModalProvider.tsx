'use client';

import Modal from '@/components/Modal';
import { useEffect, useState } from 'react';

const ModalProvider = () => {
    const [isMount, setIsMount] = useState(false);

    // prevent modal from showing when on SSR
    useEffect(() => {
        setIsMount(true);
    }, []);

    if (!isMount) {
        return null;
    }

    return (
        <>
            <Modal title="Text" description="des" isOpen onChange={() => {}}>
                Test
            </Modal>
        </>
    );
};

export default ModalProvider;
