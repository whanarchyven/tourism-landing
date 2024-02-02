"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export interface DescriptionBlockInterface {
    name:string,
    description:ReactNode,
    gallery:string[]
}
const DescriptionBlock:FC<DescriptionBlockInterface> = ({name,description,gallery}) => {
    return (
        <div className={classList('w-full bg-white pt-24 relative', 'font-open flex flex-col gap-20 items-center justify-center')}>
            <div className={'w-2/3 flex flex-col gap-20 items-center justify-center'}>
                <p className={'text-cOrange font-bold text-5xl'}>{name}</p>
                {description}
            </div>
            <div className={'grid grid-cols-4 w-full'}>
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