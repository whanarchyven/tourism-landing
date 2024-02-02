"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export interface AviaBlockInterface {
    airTravels:{name: string,
        description: string}[]
}
const AviaBlock: FC<AviaBlockInterface> = ({airTravels}) => {
    return (
        <div
            className={classList('w-full bg-cOrange py-24 relative', 'font-open flex flex-col gap-4 items-center justify-center')}>
            <img className={'w-28'} src={'/images/travel.svg'}/>
            <p className={'uppercase font-bold text-black'}>Авиаперелёты</p>
            <div className={'flex justify-center p-24'}>
                {airTravels.map((travel,counter)=>{
                    return (
                        <div key={counter} className={'flex w-1/3 text-center flex-col gap-3'}>
                            <p className={'font-bold text-2xl text-black'}>{travel.name}</p>
                            <p className={'text-black text-lg leading-10'}>{travel.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default AviaBlock;