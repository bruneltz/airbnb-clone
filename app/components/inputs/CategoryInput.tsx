"use client"

import { IconType } from "react-icons";

interface CategoryInputProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

function CategoryInput({
    icon: Icon, label, selected, onClick
}: CategoryInputProps) {
    return (
        <div
            onClick={() => onClick(label)}
            className={`rounded-xl border-2 p-4 flex gap-3 items-center
            hover:border-black cursor-pointer transition
            ${selected ? 'border-black' : 'border-neutral-200'}`}>
            <Icon size={30} />
            <div className="font-semibold">
                {label}
            </div>
        </div>
    );
}

export default CategoryInput;