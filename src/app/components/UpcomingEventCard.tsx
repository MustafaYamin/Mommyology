import React, { useState } from 'react';

interface UpcomingEventCardProps {
  title: string;
  image: string;
  time: string;
  cost: string;
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ title, image, time, cost }) => {
  const [open, setOpen] = useState(false);

  const handleCardClick = () => setOpen(true);
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
  };
  const handleBookClick = () => {
    setOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        className="relative border border-[#FDE047]/40 rounded-3xl shadow-lg w-full max-w-sm sm:max-w-md mx-auto h-80 sm:h-96 md:h-[420px] flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        onClick={handleCardClick}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive'] drop-shadow-lg">{title}</h4>
          <div className="flex flex-col gap-3 sm:gap-4 w-full items-center">
            <span className="inline-block px-3 sm:px-4 py-2 bg-[#45C8F0]/80 text-white rounded-full text-sm sm:text-lg font-semibold w-fit drop-shadow">{time}</span>
            <span className="inline-block px-3 sm:px-4 py-2 bg-[#FDE047]/80 text-[#6B5AA2] rounded-full text-sm sm:text-lg font-semibold w-fit drop-shadow">{cost}</span>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={handleClose}>
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-2xl relative flex flex-col items-center max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-3xl text-[#6B5AA2] hover:text-[#45C8F0]" onClick={handleClose} aria-label="Close">&times;</button>
            <img src={image} alt={title} className="rounded-2xl w-full max-h-60 sm:max-h-80 md:max-h-[400px] object-cover mb-4 sm:mb-6" />
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6B5AA2] mb-3 sm:mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive'] text-center">{title}</h4>
            <div className="flex flex-col gap-3 sm:gap-4 w-full items-center mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-2 bg-[#45C8F0]/80 text-white rounded-full text-sm sm:text-lg font-semibold w-fit">{time}</span>
              <span className="inline-block px-3 sm:px-4 py-2 bg-[#FDE047]/80 text-[#6B5AA2] rounded-full text-sm sm:text-lg font-semibold w-fit">{cost}</span>
            </div>
            <button
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#FDE047] to-[#45C8F0] text-[#6B5AA2] font-bold text-lg sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#45C8F0] hover:bg-[#45C8F0] hover:text-white w-full sm:w-auto"
              onClick={handleBookClick}
            >
              Book Your Slot
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingEventCard;
