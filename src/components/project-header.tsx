import { Logo } from "./logo";

export function ProjectHeader() {
  return (
    <nav className="h-12 min-h-12 w-full px-4 py-[10px] flex justify-between items-center bg-base-white border border-base-grey-400">
      <div className="h-full flex items-center gap-4">
        <Logo className="size-6" />
        <div className="h-4 w-[1px] bg-[#0B0A0A26]" />
        <div className="h-full flex items-center gap-1 text-xs tracking-[0.24px] leading-4">
          <span className="text-base-grey-800">Home</span>
        </div>
      </div>
    </nav>
  );
}