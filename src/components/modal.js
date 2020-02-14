import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/modal.scss';

const Modal = (props) => {
    const { setModalOpen, constraintsRef, children, setSubModalOpen, modalOpen } = props;
    const closeModals = () => { 
        setModalOpen(false); 
        if (setSubModalOpen) {
            setSubModalOpen(false);
        }
    }
    return (
        <AnimatePresence>
            <motion.div
                dragConstraints={constraintsRef}
                drag
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="modal"
            >
                <div onClick={closeModals}>x</div>
                <div>{children}</div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal;