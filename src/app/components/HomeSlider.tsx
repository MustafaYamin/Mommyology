import Image from 'next/image';

const partners = [
  '/partners/partner1.png',
  '/partners/partner2.png',
  '/partners/partner3.png',
  '/partners/partner4.png',
  '/partners/partner5.png',
  '/partners/partner6.png',
];

const HomeSlider = () => {
  return (
    <div className="w-full overflow-hidden py-6 flex items-center">
      <div className="animate-slide flex gap-8 min-w-max">
        {partners.concat(partners).map((src, idx) => (
          <div key={idx} className="flex items-center justify-center h-20 w-32 bg-white rounded-xl shadow border-2 border-[#6B5AA2] p-2">
            <Image src={src} alt={`Partner ${idx+1}`} width={100} height={60} className="object-contain" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeSlider;
