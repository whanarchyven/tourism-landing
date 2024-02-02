"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export interface OrganizatorBlockInterface {
    name: string,
    post: string,
    avatar: string,
    description: ReactNode
    tours: {
        name: string,
        year: number,
    }[]
}

const OrganizatorBlock: FC<OrganizatorBlockInterface> = ({name,post,avatar,description,tours}) => {
    return (
        <div
            className={classList('w-full bg-white py-24 relative', 'font-open flex flex-col gap-10 items-center justify-center')}>
            <p className={'text-cOrange font-bold uppercase text-5xl'}>Организатор</p>
            <p className={'text-black text-xl w-1/3 text-center'}>На протяжении всего путешествия с заботой и вниманием
                к каждому участнику в атмосфере легкости и радости!</p>
            <p className={'text-black text-lg italic text-center'}>«Путешествовать — значит жить»<br/>
                Ханс Кристиан Андерсен</p>
            <div className={'grid grid-cols-2 px-24 items-start gap-6'}>
                <img src={avatar}/>
                <div className={'bg-[#efefef] h-full p-7 flex flex-col justify-center gap-5'}>
                    <p className={'font-bold text-2xl text-black'}>{name}</p>
                    <p className={'font-medium text-sm text-[#666]'}>{post}</p>
                    <div className={'w-1/3 h-[2px] bg-black'}></div>
                    <div className={'text-black font-light'}>
                        {description}
                    </div>
                </div>
            </div>
            <p className={'text-black uppercase font-bold text-sm w-1/3 text-center'}>Организовал следующие мероприятия</p>
            <p className={'text-cOrange font-bold text-5xl'}>Путешествия с ART PLANET</p>
            <div className={'flex flex-col gap-2 text-center'}>
                {tours.map((tour,counter)=>{
                    return(
                        <p key={counter} className={'font-light text-md text-black list-disc'}>● {tour.name} - {tour.year}</p>
                    )
                })}
            </div>
        </div>
    );
};

export default OrganizatorBlock;