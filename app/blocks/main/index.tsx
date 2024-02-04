import {FC} from 'react';
import {classList} from "@/app/utils/classList";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import Image from "next/image";

export interface MainBlockInterface {
    name:string,
    image:string,
    dateStart:Date,
    dateEnd:Date
}
const Index:FC<MainBlockInterface> = ({name,image,dateEnd,dateStart}) => {
    return (
        <div className={classList('w-full h-screen relative', 'font-open flex items-center justify-center')}>
            <div className={'absolute w-full h-full'}>
                <Image className={'object-cover'} src={image} alt={'layout'} layout={'fill'}/>
            </div>
            <div className={'bg-black absolute w-full h-full top-0 left-0 bg-opacity-30 '}>

            </div>
            <div className={'flex flex-col gap-8 justify-center items-center absolute w-full h-full top-0 left-0 gap-1'}>
                <div className={'w-96 h-44 relative'}>
                    <Image src={'/images/logo.png'} alt={'logo'} layout={'fill'}/>
                </div>
                <p className={'uppercase xl:text-8xl text-3xl sm:text-5xl xl:w-1/2 text-center font-bold'}>{name}</p>
                <p className={' xl:text-4xl text-lg uppercase font-bold'}>{format(dateStart, 'dd-', {locale: ru})}{format(dateEnd, 'dd MMMM yyyy', {locale: ru})}</p>
            </div>
        </div>
    );
};

export default Index;