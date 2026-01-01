import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";
import { MessageCircle } from "lucide-react";

export type CounselorStatus = "online" | "busy" | "away";

export type CounselorCardProps = {
  id: string;
  name: string;
  headline?: string;
  status: CounselorStatus;
  avatarUrl?: string;
};

function statusLabel(status: CounselorStatus) {
  switch (status) {
    case "online":
      return "온라인";
    case "busy":
      return "상담중";
    case "away":
      return "오프라인";
  }
}

function statusClass(status: CounselorStatus) {
  switch (status) {
    case "online":
      return "bg-emerald-500/10 text-emerald-700 ring-emerald-600/20";
    case "busy":
      return "bg-blue-500/10 text-blue-700 ring-blue-600/20";
    case "away":
      return "bg-zinc-500/10 text-zinc-700 ring-zinc-600/20";
  }
}

export function CounselorCard({
  id,
  name,
  headline,
  status,
  avatarUrl,
}: CounselorCardProps) {
  const profileTo = `/counselors/${id}/profile`;
  const navigate = useNavigate();
  return (
    <div
      className="group rounded-xl border bg-background p-4 shadow-sm transition hover:shadow"
      role="link"
      tabIndex={0}
      aria-label={`${name} 프로필로 이동`}
      onClick={() => navigate(profileTo)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(profileTo);
        }
      }}
    >
      <div className="flex items-start gap-3">
        <Avatar className="size-10">
          <AvatarImage src={avatarUrl} alt={`${name} avatar`} />
          <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="truncate font-semibold">{name}</div>
              {headline ? (
                <div className="truncate text-sm text-muted-foreground">
                  {headline}
                </div>
              ) : null}
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1",
                statusClass(status)
              )}
            >
              {statusLabel(status)}
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 ml-auto">
              <Button
                size="sm"
                variant="secondary"
                className="cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                상담 신청
              </Button>
              <Button
                size="sm"
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/message");
                }}
              >
                dm
                <MessageCircle className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
