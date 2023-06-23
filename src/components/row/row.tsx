import { useRef, useState } from "react";
import Thumbnail from "../thumbnail/thumbnail";
import { RowProps } from "./row.props"
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const Row = ({title, movies, isBig = false}:RowProps) => {
  const [moved, setMoved] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction:'left' | 'right') => {
    setMoved(true)
    if(carouselRef.current){
      const {scrollLeft, clientWidth}= carouselRef.current;
  
        const scrollTo = direction === 'left' ?scrollLeft - clientWidth : scrollLeft + clientWidth;
        carouselRef.current.scrollTo({left:scrollTo, behavior:'smooth'})

        if(direction === 'left' && scrollTo ===0){
          setMoved(false)
        }
    }
  };

  return( 
    <div className=" h-[500px] space-y-1 md:space-y-2">
      <h1 className="w-56   cursor-pointer text-lg md:text-2x1 font-semibold text-[#e5e5e5] hover:text-white transition duration-200">{title}</h1>
      {/* Corouse */}
      <div className="group relative  md:ml-2">
        <AiFillCaretLeft className={`absolute  top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125 ${!moved && 'hidden'}`}  onClick={() => handleClick('left')} />

        <div ref={carouselRef}  className={`flex  scrollbar-hide ${!isBig && "space-x-1 md:space-x-4"} overflow-hidden items-center  overflow-x-scroll `}>
          {movies.map(movie =>(
            <Thumbnail key={movie.id} movie={movie} isBig={isBig}/>
          ))}
        </div>

        <AiFillCaretRight className="absolute top-0 bottom-0 right-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-125" onClick={() => handleClick('right')} />
      </div>
    </div>
  )
}

export default Row;
