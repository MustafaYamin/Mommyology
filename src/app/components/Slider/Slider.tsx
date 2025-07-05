export default function Slider() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-8 px-2 md:px-8">
            <input 
                type="range" 
                min="1" 
                max="100" 
                className="w-full max-w-lg h-2 bg-[#FDE047]/40 rounded-lg appearance-none cursor-pointer accent-[#6B5AA2] focus:outline-none focus:ring-2 focus:ring-[#45C8F0] transition-all duration-200"
            />
        </div>
    );
}