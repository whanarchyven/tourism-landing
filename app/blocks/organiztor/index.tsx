"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Markdown from "react-markdown";
import {CustomH3} from "@/app/mdx/CustomH3";
import {CustomP} from "@/app/mdx/CustomP";


export interface OrganizatorBlockInterface {
    name: string,
    post: string,
    avatar: string,
    description: string
    tours: {
        name: string,
        year: number,
    }[]
}

const OrganizatorBlock: FC<OrganizatorBlockInterface> = ({name,post,avatar,description,tours}) => {
    return (
        <div
            className={classList('w-full bg-white p-3 sm:p-4 xl:py-24 relative', 'font-open flex flex-col gap-10 items-center justify-center')}>
            <p className={'text-cOrange font-bold uppercase text-3xl sm:text-5xl'}>Организатор</p>
            <p className={'text-black text-md sm:text-xl xl:w-1/3 text-center'}>На протяжении всего путешествия с заботой и вниманием
                к каждому участнику в атмосфере легкости и радости!</p>
            <p className={'text-black text-lg italic text-center'}>«Путешествовать — значит жить»<br/>
                Ханс Кристиан Андерсен</p>
            <div className={'grid xl:grid-cols-2 sm:px-8 xl:px-24 items-start gap-6'}>
                <img className={'h-full object-cover aspect-square'} src={avatar}/>
                <div className={'bg-[#efefef] h-full p-7 flex flex-col justify-center gap-5'}>
                    <p className={'font-bold text-2xl sm:text-4xl text-black'}>{name}</p>
                    <p className={'font-medium  sm:text-xl text-[#666]'}>{post}</p>
                    <div className={'w-1/3 h-[2px] bg-black'}></div>
                    <Markdown components={{h3:CustomH3,p:CustomP}} className={'text-black sm:text-md xl:text-xl font-light'}>
                        {description}
                    </Markdown>
                </div>
            </div>
            <p className={'text-black uppercase font-bold sm:text-2xl xl:text-xl xl:w-1/3 text-center'}>Организовал следующие мероприятия</p>
            <p className={'text-cOrange font-bold sm:text-3xl xl:text-5xl'}>Путешествия с ART PLANET</p>
            <div className={'flex flex-col gap-2 text-center'}>
                {tours.map((tour,counter)=>{
                    return(
                        <p key={counter} className={'font-light sm:text-lg xl:text-xl text-black list-disc'}>● {tour.name} - {tour.year}</p>
                    )
                })}
            </div>
        </div>
    );
};

export default OrganizatorBlock;