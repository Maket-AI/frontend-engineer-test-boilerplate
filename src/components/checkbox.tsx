type CheckboxProps = {
  label: string;
};

export function Checkbox({ label }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2">
      <input 
        type="checkbox" 
        className="appearance-none size-[14px] aspect-square rounded border border-base-grey-400 bg-base-pure-white checked:bg-blue-500 checked:border-blue-500" 
      />
      <span className="text-base-black text-xs">{label}</span>
    </label>
  );
}