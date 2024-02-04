"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Markdown from "react-markdown";
import {CustomH3} from "@/app/mdx/CustomH3";
import {CustomP} from "@/app/mdx/CustomP";


export interface DescriptionBlockInterface {
    name:string,
    description:string,
    gallery:string[]
}
const DescriptionBlock:FC<DescriptionBlockInterface> = ({name,description,gallery}) => {
    return (
        <div className={classList('w-full bg-white py-10 sm:pt-24 relative', 'font-open flex flex-col gap-8 sm:gap-20 items-center justify-center')}>
            <div className={'sm:w-2/3 flex flex-col gap-8 sm:text-base text-sm sm:gap-20 items-center justify-center'}>
                <p className={'text-cOrange font-bold text-center text-3xl xl:text-5xl'}>{name}</p>
                <Markdown components={{h3:CustomH3,p:CustomP}} className={'text-black text-center font-normal flex flex-col gap-12'}>
                    {description}
                </Markdown>
            </div>
            <div className={'grid sm:grid-cols-2 xl:grid-cols-4 w-full'}>
                {gallery.map((image)=>{
                    return(
                        <Zoom key={image}>
                            <img className={'hover:scale-105 hover:shadow-2xl transition-all duration-300 object-cover aspect-square'} src={image}/>
                        </Zoom>
                    )
                })}
            </div>

        </div>
    );
};

export default DescriptionBlock;