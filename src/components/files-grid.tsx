import { FileCard } from "./file-card";
import { File } from "../types/file";

export function FilesGrid({ files }: { files: File[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 w-full">
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
}