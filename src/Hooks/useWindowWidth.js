import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function useWindowWidth() {
  const [width,setWidth]=useState(window.innerWidth);
  const [height,setHeight]=useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
    return  {width,height}
}
