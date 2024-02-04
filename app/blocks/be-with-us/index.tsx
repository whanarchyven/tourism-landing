"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import 'react-medium-image-zoom/dist/styles.css'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";


const BeWithUsBlock:FC = () => {
    return (
        <ParallaxProvider>
            <div className={'w-full h-screen sm:h-[900px] flex  items-center overflow-hidden justify-center relative'}>
                <Parallax className={'w-full h-[200%]'} speed={50}>
                    <img className={'w-full h-full absolute object-cover top-0 left-0'} src={'/images/formLayout.jpg'}/>
                </Parallax>
                <div className={'absolute w-full h-full left-0 top-0 bg-gradient-to-b from-white to-black opacity-30'}></div>
                <p className={'text-white font-bold uppercase absolute text-center text-4xl sm:text-8xl'}>ПУТЕШЕСТВУЙ <br/>
                    С НАМИ!</p>
            </div>
        </ParallaxProvider>
    );
};

export default BeWithUsBlock;