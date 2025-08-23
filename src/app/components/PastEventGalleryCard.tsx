import React, { useState } from 'react';

interface PastEventGalleryCardProps {
  title: string;
  images: string[];
}

const PastEventGalleryCard: React.FC<PastEventGalleryCardProps> = ({ title, images }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleCardClick = () => setOpen(true);
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
    setCurrent(0);
  };
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group h-48 sm:h-56 flex flex-col justify-end bg-gray-100"
        onClick={handleCardClick}
        style={{ backgroundImage: `url(${images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
        <div className="relative z-10 p-3 sm:p-4">
          <h4 className="text-base sm:text-lg font-bold text-white drop-shadow font-['Comic_Sans_MS','Comic_Sans','cursive']">{title}</h4>
        </div>
      </div>
      
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={handleClose}>
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-2xl relative flex flex-col items-center max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 sm:top-3 right-2 sm:right-3 text-xl sm:text-2xl text-[#6B5AA2] hover:text-[#45C8F0]" onClick={handleClose} aria-label="Close">&times;</button>
            <div className="relative w-full flex items-center justify-center">
              {images.length > 1 && (
                <button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 text-lg sm:text-xl z-10 hover:bg-white transition-colors duration-200" onClick={handlePrev}>&lt;</button>
              )}
              <img src={images[current]} alt={title} className="rounded-2xl w-full max-h-60 sm:max-h-80 md:max-h-[500px] object-contain mb-3 sm:mb-4" />
              {images.length > 1 && (
                <button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 text-lg sm:text-xl z-10 hover:bg-white transition-colors duration-200" onClick={handleNext}>&gt;</button>
              )}
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#6B5AA2] mb-2 font-['Comic_Sans_MS','Comic_Sans','cursive'] text-center">{title}</h4>
            {images.length > 1 && (
              <div className="flex gap-2 mb-2">
                {images.map((_, idx) => (
                  <span key={idx} className={`w-2 h-2 rounded-full ${idx === current ? 'bg-[#45C8F0]' : 'bg-gray-300'}`}></span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PastEventGalleryCard;
