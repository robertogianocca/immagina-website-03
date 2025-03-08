import ArrowButton from "@/components/Buttons/ArrowButton";

export default function Navigation({ picturesList, setIndex, currentIndex }) {
  //   --------------------------------- ARROWS FUNCTION ---------------------------------
  function nextImage() {
    currentIndex == picturesList.length - 1 ? setIndex(0) : setIndex(currentIndex + 1);
  }
  function previousImage() {
    currentIndex == 0 ? setIndex(picturesList.length - 1) : setIndex(currentIndex - 1);
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 font-courier font-bold">
        {/* ------ Left Arrow ------ */}
        <ArrowButton
          onClick={previousImage}
          className="text-stone-600 shadow-button flex items-center justify-center h-[65px] rounded-md"
        >
          <p className="font-courier font-bold text-4xl ">{"<"}</p>
        </ArrowButton>
        {/* ------ Right Arrow ------ */}
        <ArrowButton
          onClick={nextImage}
          className="text-stone-600 shadow-button flex items-center justify-center rounded-md"
        >
          <p className="text-4xl">{">"}</p>
        </ArrowButton>
        {/* ------ Index ------ */}
        <div className="flex col-span-2 justify-center my-4">
          <h1 className=" text-stone-600  text-base">{`${currentIndex + 1} / ${
            picturesList.length
          }`}</h1>
        </div>
      </div>
      {/* ------ Caption ------ */}
      {picturesList[currentIndex].shortDescription && (
        <div className="h-[5rem] mb-6">
          <p className="flex items-center p-2 rounded-md bg-zinc-300 text-xs italic font-semibold">
            {picturesList[currentIndex].shortDescription}
          </p>
        </div>
      )}
    </div>
  );
}
