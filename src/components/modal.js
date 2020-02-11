import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Modal = (props) => {
    const { setModalOpen, constraintsRef, children, setSubModalOpen } = props;
    const closeModals = () => { 
        setModalOpen(false); 
        if (setSubModalOpen) {
            setSubModalOpen(false);
        }
    }
    return (
        <motion.div
            dragConstraints={constraintsRef}
            drag
        >
            <div onClick={closeModals}>x</div>
            <div>Modal</div>
            <div>{children}</div>
        </motion.div>
    )
}

export default Modal;