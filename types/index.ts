import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title?: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export type CarState = CarProps[] & { message?: string };

export interface SearchBarProps {
  setManuFacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }

export interface FilterProps {
    manufacturer: string;
    year: number;
    model: string;
    limit: number;
    fuel: string;
}

export interface OptionProps {
    title: string;
    value: string;
}
  
export interface CustomFilterProps<T> {
    setFilter: (selected: T) => void;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export interface SearchManuFacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
  }