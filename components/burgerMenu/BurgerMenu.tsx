import {FC} from 'react';

import {HiMenu} from 'react-icons/hi';

export interface IBurgerMenuProps {
    openMenu: boolean;
    handleMenu: (status: boolean) => void;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({handleMenu, openMenu}) => {
    return (
        <div
            className="flex items-center justify-start cursor-pointer lg:hidden"
            onClick={() => handleMenu(!openMenu)}
        >
            <HiMenu color="#ffffff" size={30}/>
        </div>
    );
};
