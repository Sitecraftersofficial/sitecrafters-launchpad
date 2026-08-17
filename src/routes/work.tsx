import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  return null;
}
