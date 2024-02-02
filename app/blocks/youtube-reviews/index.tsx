"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Button from "@/app/components/Button";


export interface YoutubeReviewsBlockInterface {
    videos:string[]
}
const YoutubeReviewsBlock:FC<YoutubeReviewsBlockInterface> = ({videos}) => {
    return (
        <div
            className={classList('w-full bg-white pb-24 relative', 'font-open flex flex-col gap-20 items-center justify-center')}>
            <p className={'text-cOrange font-bold text-5xl'}>Отзывы на YouTube</p>
            <div className={'flex flex-col items-center gap-5'}>
                {videos.map((video,counter)=>{
                    return(
                        <div key={counter} className={'my-5'}>
                            <iframe width="1200px" height="600"
                                    src={video}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    )
                })}
                <Button>Ещё отзывы</Button>
            </div>
        </div>
    );
};

export default YoutubeReviewsBlock;