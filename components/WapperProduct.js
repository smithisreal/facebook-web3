import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Carousel from '../components/CarouselComponent'
import CardCategory from '../components/CardCategory'
import ArcadeBg from '../assets/images/ArcadeBg.jpg'
import ActionBg from '../assets/images/actionBg.jpg'
import StrategyBg from '../assets/images/strategyBg.jpg'
export default function WapperProduct() {
    return (
        <div className='flex gap-2 -z-0 px-20 py-8 '>
            <div className='w-8/12'>
                <Carousel />
            </div>
            <div className='flex w-5/12'>
                <div className=' grid grid-flow-row gap-8'>
                    <CardCategory titlCategory='Arcade' img={ArcadeBg} />
                    <CardCategory titlCategory='Action' img={ActionBg} />
                </div>
                <div className=' grid grid-flow-row gap-8'>
                    <CardCategory titlCategory='Strategy' img={StrategyBg} />
                    <CardCategory titlCategory='Show All' />
                </div>


            </div>
            {/* <AnimateSharedLayout>
                <motion.ul className='flex ' layout initial={{ borderRadius: 25 }}>
                    {items.map(item => (
                        <Item key={item} />
                    ))}
                </motion.ul>
            </AnimateSharedLayout> */}
        </div>

    )
}

function Item() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    );
}

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="row" />
            <div className="row" />
            <div className="row" />
        </motion.div>
    );
}

const items = [0, 1, 2];
