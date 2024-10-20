import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#043873] flex justify-center gap-14 h-[500px] items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-6xl font-bold font-mono">Get More Done With <br /> Whitespace</h1>
          <p className="text-white font-sans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos <br />
            dolorem aspernatur necessitatibus possimus atque voluptates nisi consequuntur <br />
            ipsum corrupti minima beatae.</p>
          <button className="bg-[#4F9CF9] hover:bg-[#FFE492] px-4 py-1 rounded-lg ease-in duration-200 w-fit">Learn More</button>
        </div>
        <div className="bg-yellow-500 w-80 h-80 rounded-2xl">
        </div>
      </div>

      <div className="bg-[##4F9CF9] flex justify-center gap-14 h-[500px] items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-black text-6xl font-bold font-mono">Project<br />Management</h1>
          <p className="text-black font-sans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos <br />
            dolorem aspernatur necessitatibus possimus atque voluptates nisi consequuntur <br />
            ipsum corrupti minima beatae.</p>
          <button className="bg-[#4F9CF9] hover:bg-[#FFE492] px-4 py-1 rounded-lg ease-in duration-200 w-fit">Learn More</button>
        </div>
        <div className="bg-yellow-500 w-80 h-80 rounded-2xl">
        </div>
      </div>
    </div>
  );
}
