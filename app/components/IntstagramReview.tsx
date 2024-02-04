import {FC, ReactNode} from "react";
import Markdown from "react-markdown";
import {CustomA} from "@/app/mdx/CustomA";
import {CustomP} from "@/app/mdx/CustomP";


export interface InstagramReviewInterface {
    name: string,
        event: string,
        profileNickname: string,
        profileLink: string,
        avatar: string,
        text: string,
        gallery: string[]
}
const InstagramReview:FC<InstagramReviewInterface> = ({ name,text, profileNickname, profileLink, avatar, event, gallery}) => {
    return (
        <div className={'flex sm:flex-row flex-col justify-center w-full items-start gap-20'}>
            <div className={'xl:w-2/3 flex sm:flex-row flex-col gap-8 sm:gap-20'}>
                <div className={'flex flex-col items-center gap-2'}>
                    <img src={avatar} className={'w-32 sm:w-96 aspect-square rounded-full'}/>
                    <p className={'font-bold text-black text-center text-sm'}>{name}</p>
                    <p className={'text-cOrange text-sm'}>{profileNickname}</p>
                </div>
                <div className={'flex flex-col gap-6'}>
                    <div className={'text-black text-lg font-bold'}>
                        <span className={'text-cOrange xl:text-base font-bold'}>{profileNickname}</span> о путешествии <Markdown components={{a:CustomA}}>{event}</Markdown>
                    </div>
                    <div className={'text-black xl:text-base text-sm font-light'}>
                        <Markdown components={{p:CustomP}}>{text}</Markdown>
                    </div>
                    <div className={'grid grid-cols-3 gap-6'}>
                        {gallery.map((image,counter)=>{
                            return (<img key={counter} src={image} className={'w-full aspect-square object-cover'}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramReview;