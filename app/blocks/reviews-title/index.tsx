"use client"
import {FC} from 'react';
import {classList} from "@/app/utils/classList";
import 'react-medium-image-zoom/dist/styles.css'


const ReviewsTitleBlock:FC = () => {
    return (
        <div className={classList('w-full bg-white pt-24 relative', 'font-open flex flex-col gap-20 items-center justify-center')}>
            <p className={'text-cOrange uppercase font-bold text-5xl'}>Отзывы</p>
            <div className={'flex sm:flex-row flex-col sm:justify-center items-center p-8 bg-[#f2f2f2] w-full justify-center gap-20'}>
                <a className={'w-52'} href={'#facebook'}><img src={'/images/facebook.png'}/></a>
                <a className={'w-52'} href={'#instagram'}><img src={'/images/instagram.png'}/></a>
                <a className={'w-52'} href={'#youtube'}><img src={'/images/youtube.png'}/></a>
            </div>
        </div>
    );
};

export default ReviewsTitleBlock;