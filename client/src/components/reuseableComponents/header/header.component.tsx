import React from 'react';


interface HeaderProps {
  heading: string;
  subHeading: string;
}

const Header: React.FC<HeaderProps> = ({ heading, subHeading }) => {
  return (
    <div className=' flex flex-col '>
      <h1 className=' text-[1.2rem] text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200'>{heading}</h1>
      <p>{subHeading}</p>
    </div>
  );
};

export default Header;
