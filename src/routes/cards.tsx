import { createFileRoute } from "@tanstack/react-router";
import { ProjectHeader } from "../components/project-header";
import { ProjectContent } from "../components/project-content";
import { ReportItemSidebar } from "../components/report-item-sidebar";

export const Route = createFileRoute("/cards")({
  component: ProjectPage,
});

function ProjectPage() {
  return (
    <div className="h-screen flex flex-col bg-base-grey-50">
      <ProjectHeader />
      <div className="flex w-full min-h-0 grow">
        <ReportItemSidebar />
        <ProjectContent />
      </div>
    </div>
  );
}
