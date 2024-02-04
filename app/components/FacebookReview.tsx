import {FC, ReactNode} from "react";


export interface FacebookReviewInterface {
    name?:string,
    profileNickname?: string,
    profileLink?: string,
    avatar?: string,
    text?: ReactNode,
}const FacebookReview:FC<FacebookReviewInterface> = ({ name,text, profileNickname, profileLink, avatar}) => {
    return (
        <div className={'flex sm:flex-row flex-col py-12 justify-center items-center sm:items-start gap-10 sm:gap-20'}>
            <img src={avatar} className={'w-32 xl:w-48 aspect-square rounded-full'}/>
            <div className={'flex flex-col gap-2'}>
                <div className={'text-black text-xs sm:text-sm xl:text-base font-light'}>
                    {text}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <p className={'text-black font-bold xl:text-2xl'}>{name}</p>
                    <a className={'text-cOrange font-normal xl:text-lg'} href={profileLink}>{profileNickname}</a>
                </div>
            </div>
        </div>
    );
};

export default FacebookReview;