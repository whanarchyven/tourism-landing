import {FC, ReactNode} from "react";


export interface FacebookReviewInterface {
    name?:string,
    profileNickname?: string,
    profileLink?: string,
    avatar?: string,
    text?: ReactNode,
}const FacebookReview:FC<FacebookReviewInterface> = ({ name,text, profileNickname, profileLink, avatar}) => {
    return (
        <div className={'flex justify-center items-start gap-20'}>
            <img src={avatar} className={'w-48 aspect-square rounded-full'}/>
            <div className={'flex flex-col gap-2'}>
                <div className={'text-black font-light'}>
                    {text}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <p className={'text-black font-bold text-2xl'}>{name}</p>
                    <a className={'text-cOrange font-normal text-lg'} href={profileLink}>{profileNickname}</a>
                </div>
            </div>
        </div>
    );
};

export default FacebookReview;