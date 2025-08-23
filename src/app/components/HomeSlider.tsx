import Image from 'next/image';

const partners = [
  '/partners/partner1.png',
  '/partners/partner2.png',
  '/partners/partner3.png',
  '/partners/partner4.png',
  '/partners/partner5.png',
  '/partners/partner6.png',
  '/partners/partner7.png',
  '/partners/partner8.png',
];

const HomeSlider = () => {
  // Duplicate the images for seamless looping
  const allImages = partners.concat(partners);

  return (
    <div className="w-full overflow-x-hidden m-0 p-0">
      <div className="relative w-full">
        <div className="flex gap-8 min-w-max animate-marquee select-none" style={{ willChange: 'transform' }}>
          {allImages.map((src, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-20 w-32 bg-white rounded-xl shadow border-2 border-[#6B5AA2] p-2"
            >
              <Image src={src} alt={`Partner ${idx + 1}`} width={100} height={60} className="object-contain" />
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 32s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HomeSlider;
