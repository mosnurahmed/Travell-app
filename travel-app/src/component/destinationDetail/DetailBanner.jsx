import { useState } from "react";

function DetailBanner({ d }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div
        className="cursor-pointer  h-64 sm:h-96 lg:h-[500px] bg-cover sm:bg-cover lg:bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${d.thumbnail})` }}
      >
        {/* <img
          src=""
          alt="Travel Destination Image"
          className="cursor-pointer w-screen h-48 sm:h-96 lg:h-[500px] object-cover "
          onClick={openPopup}
        /> */}
        <div className="text-center " onClick={openPopup}>
          <h1 className="text-white text-6xl md:text-6xl lg:text-6xl 2xl:text-8xl py-4 text-slate-300">
            Text describing the travel destination.
          </h1>
          <p className="text-xl text-fuchsia-50">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rem!
          </p>
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70">
          <div className="relative">
            <button className="absolute top-4 right-4 text-white" onClick={closePopup}>
              Close
            </button>
            <div className="max-w-3xl max-h-3xl">
              <iframe
                width="100%"
                src="https://www.youtube.com/watch?v=hZ9di6zroWQ&list=RD8F14wrLVwuo&index=27"
                title="video"
                frameBorder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailBanner;
