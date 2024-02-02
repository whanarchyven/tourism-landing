import {FC, ReactNode} from 'react';

interface ButtonInterface {
    callback?:()=>any
    children:ReactNode
}

const Button:FC<ButtonInterface> = ({callback,children}) => {
    return (
        <div className={'p-5 px-9 cursor-pointer text-xl bg-cRed w-fit flex justify-center items-center uppercase text-white font-bold'}>
            {children}
        </div>
    );
};

export default Button;