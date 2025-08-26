import { FileExplorerUtilButton } from "./file-explorer-util-button";
import { FilesGrid } from "./files-grid";
import { CloudUpload, Plus, Sort } from "iconoir-react";
import { File } from "../types/file";

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
    id: "file-6",
    filename: "Model_For_Consultants.rvt",
    size: "938KB",
    url: "/public/file-2.jpg",
  },
];

export function ProjectContent() {
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