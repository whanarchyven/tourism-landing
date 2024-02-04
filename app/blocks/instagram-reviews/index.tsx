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
import InstagramReviews from "@/app/blocks/instagram-reviews/index";
import InstagramReview from "@/app/components/IntstagramReview";
import Button from "@/app/components/Button";


export interface InstagramReviewsBlockInterface {
    reviews: {
        name: string,
        event: ReactNode,
        profileNickname: string,
        profileLink: string,
        avatar: string,
        text: ReactNode,
        gallery: string[]
    }[]
}

const InstagramReviewsBlock: FC<InstagramReviewsBlockInterface> = ({reviews}) => {
    return (
        <div id={'instagram-reviews'}
             className={classList('w-full bg-white sm:py-10 xl:py-24 relative', 'font-open flex flex-col gap-10 items-center justify-center')}>
            <p className={'text-cOrange uppercase font-bold text-2xl sm:text-5xl'}>Отзывы Instagram</p>
            <div className={'bg-[#f2f2f2] flex flex-col items-center w-full gap-24 p-4 py-8 sm:p-8 xl:p-24'}>
                {reviews.map((item, counter) => <InstagramReview key={counter} {...item}/>)}
                <Button>Забронировать тур</Button>
            </div>

        </div>
    );
};

export default InstagramReviewsBlock;