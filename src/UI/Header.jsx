import { NavBar } from "./NavBar";
export function Header() {
  return (
    <header className="bg-black">
      <div className="pt-5 pb-5 px-2  flex items-center justify-between ">
        <h1 className=" font-serif text-[50px] text-white">News Letter</h1>
        <div >
        <input className="h-10 w-[500px] bg-[rgb(13,91,79)] " type="text" />
        <button className="h-10 bg-yellow-300 px-4" >send</button>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
