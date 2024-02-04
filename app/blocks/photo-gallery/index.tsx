"use client"
import {FC, ReactNode} from 'react';
import {classList} from "@/app/utils/classList";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export interface PhotoGalleryInterface {
    photos: string[]
}

const PhotoGallery: FC<PhotoGalleryInterface> = ({photos}) => {
    return (
        <div
            className={classList('w-full', 'grid bg-white sm:grid-cols-2 xl:grid-cols-4')}>
            {photos.map((photo, counter) => {
                return (
                    <Zoom key={counter}><img src={photo}
                                             className={'w-full h-72 object-cover hover:scale-105 hover:shadow-2xl transition-all duration-300'}/></Zoom>
                )
            })}
        </div>
    );
};

export default PhotoGallery;