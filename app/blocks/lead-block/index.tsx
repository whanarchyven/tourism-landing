"use client"
import {FC} from 'react';
import {classList} from "@/app/utils/classList";

import 'react-medium-image-zoom/dist/styles.css'
import Button from "@/app/components/Button";


const LeadBlock:FC = () => {
    return (
        <div className={classList('w-full bg-cOrange pt-24 relative', 'font-open flex flex-col gap-20 items-center justify-center')}>
            <div className={'p-40 bg-white w-2/3 flex flex-col items-center gap-12'}>
                <p className={'font-bold text-black text-5xl uppercase text-center'}>Остались вопросы?</p>
                <p className={'text-black text-2xl text-center'}>Можете задать любой вопрос и мы с радостью на него ответим!</p>
                <input placeholder={'Почта'} className={'outline-0 border-0 border-b-2 w-full p-4 hover:outline-0 text-black text-2xl'}/>
                <input placeholder={'Ваше имя'} className={'outline-0 border-0 border-b-2 w-full p-4 hover:outline-0 text-black text-2xl'}/>
                <input placeholder={'Номер телефона'} className={'outline-0 border-0 border-b-2 w-full p-4 hover:outline-0 text-black text-2xl'}/>
                <input placeholder={'Задайте вопрос'} className={'outline-0 border-0 border-b-2 w-full p-4 hover:outline-0 text-black text-2xl'}/>
                <Button>Отправить</Button>
            </div>
        </div>
    );
};

export default LeadBlock;