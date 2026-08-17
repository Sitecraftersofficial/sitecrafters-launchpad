import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/plans")({ component: PlansPage });

function PlansPage() {
  return null;
}
