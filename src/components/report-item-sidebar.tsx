import { Button } from "./button";
import { Checkbox } from "./checkbox";

export function ReportItemSidebar() {
  return (
    <div className="w-[240px] max-h-full ml-[5px] my-1 bg-base-pure-white rounded-xl border border-base-grey-400 shadow-[0_1px_4px_0_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="py-3 w-full border-b border-base-grey-300">
        <p className="text-base-black text-center font-semibold text-xs">Report Item</p>
      </div>
      <div className="py-3 flex flex-col gap-3 w-full h-full overflow-y-scroll">
        <p className="px-3 text-base-grey-700 text-[11px]">Please select all options that apply</p>

        {/* Checkboxes */}
        <div className="px-3 flex flex-col gap-2">
          <Checkbox label="Model looks incorrect" />
          <Checkbox label="Model missing in 3D" />
          <Checkbox label="Model missing in render" />
          <Checkbox label="Texture missing" />
          <Checkbox label="Texture scale" />
          <Checkbox label="Material looks incorrect" />
          <Checkbox label="Other" />
        </div>

        <div className="w-full h-[1px] bg-base-grey-300" />

        {/* Description */}
        <div className="px-3 flex flex-col gap-3">
          <label className="text-base-grey-700 text-[11px]">
            Describe the issue (optional)
          </label>
          <textarea className="w-full h-20 px-3 py-2 text-xs border border-base-grey-400 rounded-md resize-none" />
        </div>

        <div className="px-3 w-full">
          <Button className="w-full">Report item</Button>
        </div>
      </div>
    </div>
  );
}