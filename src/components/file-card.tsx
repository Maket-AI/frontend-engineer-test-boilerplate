import { File } from "../types/file";

export function FileCard({ file, className }: { file: File; className?: string }) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-3 ${className}`}
    >
      <div className="relative rounded-lg border border-base-grey-400 overflow-hidden h-[140px] flex flex-col items-start">
        <div
          className="absolute block top-0 right-0 w-0 h-0 rounded-bl-lg border-t-[20px] border-l-[20px] border-t-base-grey-400 border-l-base-pure-white"
          style={{
            filter: "drop-shadow(-1px 1px 1px rgba(0,0,0,0.15))",
          }}
        />
        <img
          src={file.url}
          alt={file.filename}
          className="h-full w-auto object-contain"
        />
      </div>
      <div className="w-full">
        <p className="w-full text-base-grey-800 text-xs truncate">
          {file.filename}
        </p>
        <p className="w-full text-base-grey-600 text-[11px]">{file.size}</p>
      </div>
    </div>
  );
}