'use client';
import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-up';
import { BsFillRocketFill } from 'react-icons/bs';

export default function ScrollUpButton() {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    color: 'gold',
    transition: 'color 0.3s', // Smooth transition for color change
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverStyles = {
    border: '2px solid gold',
    borderRadius: '50%',
    padding: '10px',
    transition: 'border 0.3s, border-radius 0.3s', // Smooth transition for border and border-radius
  };

  return (
    <div className="relative z-[300]">
      <ScrollToTop style={styles} showUnder={160}>
        <p
          className="font-bold text-3xl"
          style={isHovered ? hoverStyles : {}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BsFillRocketFill />
        </p>
      </ScrollToTop>
    </div>
  );
}
