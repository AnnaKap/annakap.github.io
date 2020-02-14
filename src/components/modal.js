import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/modal.scss';

const Modal = (props) => {
    const { setModalOpen, constraintsRef, children, setSubModalOpen, modalOpen } = props;
    const isSubmodal = !!setSubModalOpen
    const closeModals = () => { 
        setModalOpen(false); 
        if (isSubmodal) {
            setSubModalOpen(false);
        }
    }
    const width = window.innerWidth
    const height = window.innerHeight
    const xPercent = isSubmodal ? -.5 : -.4
    const yPercent = isSubmodal ? -.2 : -.1
    const x = Number(width) * xPercent ;
    const y = Number(height) * yPercent;

    return (
        <AnimatePresence>
            <motion.div
                dragConstraints={constraintsRef}
                drag
                initial={{ opacity: 0, scale: 0, x, y}}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="modal"
            >
                <div className="close" onClick={closeModals}>x</div>
                <div className="children">{children}</div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal;