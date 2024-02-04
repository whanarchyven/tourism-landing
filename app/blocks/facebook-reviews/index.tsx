"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination"
import FacebookReview from "@/app/components/FacebookReview";


export interface FacebookReviewsBlockInterface {
    reviews: {
        name?:string,
        profileNickname?: string,
        profileLink?: string,
        avatar?: string,
        text?: string,
    }[]
}

const FacebookReviewsBlock: FC<FacebookReviewsBlockInterface> = ({reviews}) => {
    return (
        <div id={'facebook-reviews'}
            className={classList('w-full bg-white p-8 xl:py-24 relative', 'font-open flex flex-col gap-10 items-center justify-center')}>
            <Swiper loop={true} pagination={{clickable: true}} navigation={true} modules={[Navigation, Pagination]}
                    className={'h-full w-full sm:w-full xl:w-2/3'}>
                {reviews.map((item, counter) => <SwiperSlide key={counter} className={'sm:p-20 xl:p-24 w-full'}>
                    <FacebookReview {...item}/>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default FacebookReviewsBlock;