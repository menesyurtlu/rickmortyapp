"use client";

import {useGetCharactersQuery} from "@/lib/rnmStore/characterApi";
import React, {useState} from "react";
import CharacterCard from "@/app/components/CharacterCard";
import ComboBox from "@/app/components/ComboBox";

export default function IndexPage() {
    const [query, setQuery] = useState<{ gender: string, status: string, page: string }>({
        gender: '',
        status: '',
        page: "1",
    });
    const {data, error, isLoading} = useGetCharactersQuery({
        page: query.page,
        gender: query.gender,
        status: query.status
    });

    const genderOptions = [
        {
            value: "male",
            text: "Male",
        },
        {
            value: "female",
            text: "Female",
        },
        {
            value: "genderless",
            text: "Genderless",
        }
    ]

    const statusOptions = [
        {
            value: "unknown",
            text: "Unknown",
        },
        {
            value: "alive",
            text: "Alive",
        },
        {
            value: "dead",
            text: "Dead",
        }
    ]

    const pages = Array(data?.info.pages).fill(null).map((_, index)=> ({
        text: index + 1,
        value: (index + 1).toString(),
    }));

    const onGenderSelect = (gender: any) => {
        setQuery((value) => ({
            ...value,
            gender: gender.value,
            page: "1",
        }))
    }

    const onStatusSelect = (status: any) => {
        setQuery((value) => ({
            ...value,
            status: status.value,
            page: "1",
        }))
    }

    const onPageSelect = (page: any) => {
        setQuery((value) => ({
            ...value,
            page: page.value,
        }))
    }


    return (<>
        <div className="px-4 py-2">
            <div className="mb-10 flex justify-center items-center flex-row gap-4">
                <ComboBox selected={query.gender} options={genderOptions} onSelect={onGenderSelect}
                          placeholder={"Select a gender to filter"}></ComboBox>
                <ComboBox selected={query.status} options={statusOptions} onSelect={onStatusSelect}
                          placeholder={"Select a status to filter"}></ComboBox>
                {pages.length > 0 && <ComboBox selected={query.page} options={pages} onSelect={onPageSelect}
                           placeholder={"Select a page"}></ComboBox>}

            </div>
            <div className="grid grid-cols-12 gap-4">
                {isLoading ? (
                        <div className="items-center justify-center flex flex-col w-screen h-screen">
                            <h2 className="text-white font-bold text-2xl">Loading...</h2>
                        </div>
                    ) :
                    (data.results && data.results.length > 0) && data.results.map((character: any) => (
                        <React.Fragment key={character.id}>
                            <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2">
                                <CharacterCard {...character}></CharacterCard>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    </>);
}
