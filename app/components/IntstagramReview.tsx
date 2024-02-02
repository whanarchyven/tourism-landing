import {FC, ReactNode} from "react";


export interface InstagramReviewInterface {
    name: string,
        event: ReactNode,
        profileNickname: string,
        profileLink: string,
        avatar: string,
        text: ReactNode,
        gallery: string[]
}
const InstagramReview:FC<InstagramReviewInterface> = ({ name,text, profileNickname, profileLink, avatar, event, gallery}) => {
    return (
        <div className={'flex justify-center w-full items-start gap-20'}>
            <div className={'w-2/3 flex gap-20'}>
                <div className={'flex flex-col gap-2'}>
                    <img src={avatar} className={'w-96 aspect-square rounded-full'}/>
                    <p className={'font-bold text-black text-center text-sm'}>{name}</p>
                    <p className={'text-cOrange text-sm'}>{profileNickname}</p>
                </div>
                <div className={'flex flex-col gap-6'}>
                    <div className={'text-black text-lg font-bold'}>
                        <span className={'text-cOrange font-bold'}>{profileNickname}</span> о путешествии {event}
                    </div>
                    <div className={'text-black font-light'}>
                        {text}
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