"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Button from "@/app/components/Button";


export interface HotelBlockInterface {
    description: string,
    gallery: string[],
    variants: {
        name: string,
        galery: string[],
        priceVariants: {price: number, description: string,currency:string}[],
        remains: number,
        included: string[],
        excluded: string[],
        billingDescriprion: string
    }[]
}

const HotelBlock:FC<HotelBlockInterface> = ({description,gallery,variants}) => {
    return (
        <div
            className={classList('w-full bg-white py-24 relative', 'font-open flex flex-col gap-20 items-center justify-center')}>
            <p className={'text-cOrange font-bold text-5xl uppercase text-center'}>Размещение</p>
            <p className={'text-center text-black font-medium w-2/3'}>{description}</p>
            <div className={'grid grid-cols-4 grid-rows-2'}>
                <div className={'col-span-2 row-span-2'}>
                    <Zoom>
                        <img
                            className={'aspect-square object-cover hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full'}
                            src={gallery[0]}/>
                    </Zoom>
                </div>
                {gallery.map((item, counter) => counter > 0 && (<Zoom key={counter}><img
                    className={'aspect-square object-cover hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full'}
                    src={item}/></Zoom>))}
            </div>
            <div className={'flex flex-col gap-1'}>
                <p className={'text-cOrange font-bold text-5xl uppercase text-center'}>Стоимость</p>
                <p className={'text-cGreen font-bold text-5xl uppercase text-center'}>ВАРИАНТЫ ПРОЖИВАНИЯ</p>
            </div>
            <div className={'px-24'}>
                {variants.map((variant,counter)=>{
                    return(
                        <div key={counter} className={'grid mb-24 relative grid-cols-2 gap-8'}>
                            <div className={'w-full flex flex-col gap-3'}>
                                {variant.galery.map((item,counter)=>{
                                    return(
                                        <Zoom key={counter}><img className={'w-full hover:scale-105 hover:shadow-2xl transition-all duration-300 aspect-square object-cover'} src={item}/></Zoom>
                                    )
                                })}
                            </div>
                            <div className={'sticky top-6 flex h-fit flex-col gap-6'}>
                                <p className={'text-cOrange font-bold text-4xl uppercase text-left'}>{variant.name}</p>
                                <div className={'flex flex-col gap-1'}>
                                    <p className={'uppercase font-bold text-black'}>Стоимость на 1 взрослого:</p>
                                    {variant.priceVariants.map((pricevariant,counter) => {
                                        return (
                                            <p key={counter} className={'font-normal text-black'}>- {pricevariant.description} - {pricevariant.price} {pricevariant.currency}</p>
                                        )
                                    })}
                                    <p className={'text-cOrange font-bold'}>Осталось {variant.remains} мест!</p>
                                </div>
                                <div className={'flex flex-col gap-1'}>
                                    <p className={'uppercase font-bold text-black'}>В стоимость включено:</p>
                                    {variant.included.map((include,counter) => {
                                        return (
                                            <p key={counter} className={'font-normal text-black'}>{include}</p>
                                        )
                                    })}
                                </div>
                                <div className={'flex flex-col gap-1'}>
                                    <p className={'uppercase font-bold text-black'}>Не включено:</p>
                                    {variant.excluded.map((exclude,counter) => {
                                        return (
                                            <p key={counter} className={'font-normal text-black'}>{exclude}</p>
                                        )
                                    })}
                                </div>
                                <p className={'font-bold underline text-black text-base'}>Количество мест ограничено! </p>
                                <p className={'font-normal whitespace-pre-wrap text-black text-sm'}>{variant.billingDescriprion}</p>
                                <Button>Забронировать</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default HotelBlock;