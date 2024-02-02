"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Image from "next/image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import RoadmapStage from "@/app/components/RoadmapStage";
import Button from "@/app/components/Button";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination"


export interface RoadMapBlockInterface {
    roadMap: {
        date: Date,
        name: string,
        image: string,
        stages: {
            time?: string,
            stageName: string
        }[]
    }[],
    tourName: string,
    roadmapGalley: string[]
}

const RoadMapBlock: FC<RoadMapBlockInterface> = ({roadMap, tourName, roadmapGalley}) => {
    return (
        <div
            className={classList('w-full bg-white py-24 relative', 'font-open flex flex-col gap-20 items-center justify-center')}>
            <div className={'w-2/3 flex flex-col gap-4 items-center justify-center'}>
                <p className={'text-cOrange uppercase font-bold text-5xl'}>Маршрут тура</p>
                <p className={'text-black font-normal text-2xl'}>{tourName}</p>
            </div>
            <div className={'flex flex-col items-center gap-20 w-3/5'}>
                {roadMap.map((stage, counter) => {
                    return (
                        <RoadmapStage key={counter} date={stage.date} name={stage.name} image={stage.image}
                                      stages={stage.stages}/>
                    )
                })}
                <Button>Забронировать</Button>
            </div>
            <div className={'w-full px-24'}>
                <Swiper loop={true} pagination={{clickable:true}} navigation={true} modules={[Navigation, Pagination]} className={'h-full w-full'}>
                    {roadmapGalley.map((item,counter) => <SwiperSlide key={counter} className={'p-24 w-full'}><Zoom><img
                        className={'w-full object-cover aspect-video'} src={item}/></Zoom></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default RoadMapBlock;