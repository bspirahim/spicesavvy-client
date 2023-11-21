import React, { useEffect } from 'react';

const UseTitle = title => {
   useEffect(()=>{
    document.title = `${title}-Spicesavvy`;
   },[title])
};

export default UseTitle;