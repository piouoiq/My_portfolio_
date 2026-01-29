import { MenuButton } from "./MenuButton";

export default function Header() {
  return (
    <header className="text-black font-gruppo font-bold  bg-[#ee8f15] p-4 text-center static top-0">
      <div className="md:flex">
        <div className="mx-auto text-center">
          <h1 className="text-4xl underline">Melissa Largilliere</h1>
          <p className="text-xl">Student developer at Ada Tech School</p>
        </div>
        <div className="p-3">
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
