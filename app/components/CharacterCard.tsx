import Image from "next/image";
import React, {useState} from "react";
import {twMerge} from "tailwind-merge";

interface CharacterCardProps {
    image: string;
    name: string;
    gender: string;
    status: string;
}

export default function CharacterCard({image, name, gender, status}: CharacterCardProps) {

    return (
        <div className="flex-1 bg-mirage-900 rounded-2xl px-6 py-5">
            <div className="rounded-2xl overflow-hidden mb-4">
                <Image src={image} alt={name} layout="responsive" width={200}
                       height={200}/>
            </div>
            <div className="px-4 gap-2 flex items-center flex-col justify-center">
                <h2 className="font-bold text-xl text-white text-center">{name ?? ''}</h2>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-x-1.5">
                        <div
                            className={
                                twMerge(
                                    (status === 'Alive' ? 'bg-green-600' : status === 'Dead' ? 'bg-red-700': 'bg-slate-400'),
                                    "aspect-square rounded-full w-[12px] h-[12px]"
                                )
                            }></div>
                        <span
                            className={twMerge(
                                (status === 'Alive' ? 'text-green-600' : status === 'Dead' ? 'text-red-700': 'text-slate-400'),
                                "font-normal text-sm leading-tight")}>{status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            className={twMerge(
                                gender === 'Male' ? 'bg-blue-400' : 'bg-pink-400',
                                "aspect-square rounded-full w-[12px] h-[12px]"
                            )}></div>
                        <span
                            className={twMerge(
                                gender === 'Male' ? 'text-blue-400' : 'text-pink-400',
                                "font-normal text-sm leading-tight")}>{gender}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
