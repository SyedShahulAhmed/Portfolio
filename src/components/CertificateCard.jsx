import React from "react";
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr'
const CertificateCard = ({ image, text, setImgcount }) => {

    const Prev = ()=>{
        setImgcount((p) => p < 1 ? 9 : p - 1)
    }
    const Next = ()=>{
        setImgcount((p) => p === 9 ? 0 : p + 1 )
    }


  return (
    <div className="flex flex-col items-center transition-all duration-500">
     <div>
        <img src={image} alt={text} className="w-full lg:w-[900px] px-4 object-cover shadow-lg " />
        <p className="text-center text-xl font-semibold  m-8 text-yellow-400">"{text}"</p>
        <div className="flex justify-center items-center gap-1 mb-5">
            <button
            onClick={Prev}
            className=" rounded-full p-2 bg-transparent border-2"><GrFormPreviousLink size={30} className="text-[#2CEEF0]"/></button>
            <button
            onClick={Next}
            className=" rounded-full p-2 bg-transparent border-2"><GrFormNextLink size={30} className="text-[#2CEEF0]"/></button>
        </div>
     </div>
    </div>
  );
};

export default CertificateCard;
