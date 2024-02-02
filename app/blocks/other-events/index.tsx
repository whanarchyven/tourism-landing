"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export interface OtherEventsBlockInterface {
    events:{name:string,avatar:string}[]
}
const OtherEventsBlock:FC<OtherEventsBlockInterface> = ({events}) => {
    return (
        <div className={classList('w-full bg-white py-24 relative', 'font-open flex flex-col gap-20 items-center justify-center')}>
            <p className={'font-bold text-cOrange text-center text-5xl uppercase'}>Наши поездки и мероприятия</p>
            <div className={'w-full grid grid-cols-6 px-24 gap-8'}>
                {events.map((event,counter)=>{
                    return(
                        <div key={counter} className={'flex flex-col'}>
                            <img src={event.avatar}/>
                            <p className={'text-black text-sm text-center font-bold'}>{event.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default OtherEventsBlock;