import React from 'react';
import '../scss/Navbar.scss';
import '../interfaces';

interface NavbarProps {
  options?: Option[];
}

const Navbar: React.FC<NavbarProps> = ({options = []}) => {
  return (
    <>
    <nav>
        {options?.length && options?.map((option: Option)=>( 
            <a href={option.ref} key={option.id}>{option.label}</a>
        ))}
    </nav>
    </>
  );
}

export default Navbar;