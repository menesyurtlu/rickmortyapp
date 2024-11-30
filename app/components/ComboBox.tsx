import {Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions} from "@headlessui/react";
import clsx from "clsx";
import {ChevronDownIcon} from "lucide-react";
import React from "react";

interface IOption {
    value: string | number | any;
    text: string | number | any;
}

export default function ComboBox({options, placeholder, selected, onSelect}: {
    options: IOption[],
    placeholder?: string,
    selected: string | null,
    onSelect: (selected: any) => void
}) {

    const handleOnChange = (value: string | null) => {
        onSelect(options.filter(option => option.value === value)[0]);
    }

    return (
        <>
            <Combobox value={selected} onChange={handleOnChange}>
                <div className="relative">
                    <ComboboxInput placeholder={placeholder}
                                   className={clsx(
                                       'w-full rounded-lg border-none bg-white/5 py-4 pr-10 pl-4 text-sm/6 text-white',
                                       'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                   )}/>
                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                        <ChevronDownIcon className="size-6 fill-white/60 group-data-[hover]:fill-white"/>
                    </ComboboxButton>
                </div>

                <ComboboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                        'w-[var(--input-width)] rounded-xl border border-white/5 bg-slate-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
                        'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                    )}
                >
                    {options.map((option: IOption) => (
                        <ComboboxOption
                            key={option.value}
                            value={option.value}
                            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                        >
                            <div className="text-sm/6 text-white">{option.text}</div>
                        </ComboboxOption>
                    ))}

                </ComboboxOptions>
            </Combobox>
        </>
    )
}
