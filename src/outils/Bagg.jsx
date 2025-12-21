
export default function Bagg({ children = "Hover me" }) {
  const handleClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button 
      onClick={handleClick}
      className="relative px-8 py-3 font-semibold text-cyan-400 border-2 border-cyan-400 overflow-hidden group rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
    >
      <span className="absolute inset-0 w-full bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
      <span className="absolute inset-0 w-full bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0"></span>
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
    </button>
  );
}