import React from 'react'

interface ButtonPropts {
    label: string,
    iconUrl?: string,
    linkUrl?: string,
}

const ButtonAction: React.FC<ButtonPropts> = ({ label, iconUrl, linkUrl }) => {
    return (
        <a href={linkUrl} className='flex w-3/4'>
            <button className="bg-neutral-950 text-slate border border-neutral-400 border-b-4 font-medium overflow-hidden 
        relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none 
        duration-300 group my-2 flex w-full"

            >
                <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md 
            opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                <img src={iconUrl} alt="Icon" className='mr-6' />
                {label}
            </button>
        </a>
    )
}

export default ButtonAction