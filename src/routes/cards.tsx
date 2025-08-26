import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "../components/logo";
import { FileExplorerUtilButton } from "../components/file-explorer-util-button";
import { CloudUpload, Plus, Sort } from "iconoir-react";

// Types
interface File {
  id: string;
  filename: string;
  size: string;
  url: string;
}

// Dummy Data
const DUMMY_GENERATED_FILES: File[] = [
  {
    id: "file-1",
    filename: "Zoning laws in Vancouver.pdf",
    size: "938KB",
    url: "/public/file-3.jpg",
  },
  {
    id: "file-2",
    filename: "FloorPlan_Level1_Final.rvt",
    size: "938KB",
    url: "/public/file-1.jpg",
  },
  {
    id: "file-3",
    filename: "SitePlan_v03.dwg",
    size: "938KB",
    url: "/public/file-2.jpg",
  },
  {
    id: "file-4",
    filename: "RFI_Log_Phase1.xlsx",
    size: "938KB",
    url: "/public/file-1.jpg",
  },
  {
    id: "file-5",
    filename: "ConceptSketch_A1.pdf",
    size: "938KB",
    url: "/public/file-3.jpg",
  },
  {
    id: "file-5",
    filename: "Model_For_Consultants.rvt",
    size: "938KB",
    url: "/public/file-2.jpg",
  },
];

function ProjectHeader() {
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

function FileCard({ file, className }: { file: File; className?: string }) {
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

function FilesGrid({ files }: { files: File[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 w-full">
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
}

function ProjectContent() {
  return (
    <div className="min-w-0 grow bg-base-grey-50 flex flex-col gap-5 pl-[260px] pr-[166px] overflow-y-auto">
      <div className="w-full mt-14 flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <p className="text-base-black font-canela-deck text-[26px] font-bold leading-8">
            Home
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="w-full h-[1px] bg-base-grey-400" />
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row justify-between items-center">
            <FileExplorerUtilButton className="flex flex-row gap-2 justify-center items-center pr-2">
              <p>Sort</p>
              <Sort className="text-base-grey-700" />
            </FileExplorerUtilButton>
            <div className="flex flex-row gap-2 justify-center items-center">
              <FileExplorerUtilButton className="flex flex-row gap-2 justify-center items-center pl-2">
                <CloudUpload className="text-base-grey-700" />
                <p>Upload</p>
              </FileExplorerUtilButton>
              <FileExplorerUtilButton className="flex flex-row gap-2 justify-center items-center pl-2">
                <Plus className="text-base-grey-700" />
                <p>New folder</p>
              </FileExplorerUtilButton>
            </div>
          </div>
          <div className="w-full flex flex-col pb-6">
            <FilesGrid files={DUMMY_GENERATED_FILES} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Route Component
export const Route = createFileRoute("/cards")({
  component: ProjectPage,
});

function ProjectPage() {
  return (
    <div className="h-screen flex flex-col bg-base-grey-50">
      <ProjectHeader />
      <div className="flex w-full min-h-0 grow">
        <ProjectContent />
      </div>
    </div>
  );
}
