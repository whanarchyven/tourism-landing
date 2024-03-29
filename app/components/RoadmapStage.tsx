import {FC} from 'react';
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import Image from "next/image";

export interface RoadmapStageInterface {
    date: Date,
    name: string,
    image: string,
    stages: {
        time?: string,
        stageName: string
    }[]
}

const RoadmapStage:FC<RoadmapStageInterface> = ({date,name,image,stages}) => {
    return (
        <div className={'grid sm:grid-cols-9 grid-cols-2 gap-8 p-4 items-start'}>
            <p className={'col-span-2 text-right text-black text-2xl font-bold'}>{format(date,'dd MMMM',{locale:ru})}</p>
            <div className={'col-span-1 aspect-square hidden sm:relative'}>
                <Image className={'rounded-full'} src={image} alt={name+'image'} layout={'fill'}/>
            </div>
            {/*<div></div>*/}
            <div className={'col-span-6 flex flex-col gap-2'}>
                <p className={'text-cOrange text-xl sm:text-2xl font-bold'}>{name}</p>
                <div className={'flex flex-col gap-2'}>
                    {stages.map((substage,counter)=>{
                        return(
                            <p key={counter} className={'text-black text-sm sm:text-base font-semibold'}>{substage.time??null} - {substage.stageName}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default RoadmapStage;