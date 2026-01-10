import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardFooter, CardHeader } from "./ui/card";
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
    <Card
      className="group gap-4 py-4 transition-colors hover:bg-card/50"
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
      <CardHeader className="flex flex-row items-start gap-3 px-4 pb-0">
        <Avatar className="size-10">
          <AvatarImage src={avatarUrl} alt={`${name} avatar`} />
          <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="truncate text-2xl font-semibold">{name}</div>
                <span
                  aria-hidden="true"
                  className={cn("inline-block size-2 rounded-full shrink-0", {
                    "bg-emerald-500": status === "online",
                    "bg-blue-500": status === "busy",
                    "bg-zinc-400": status === "away",
                  })}
                />
              </div>
              {headline ? (
                <div className="truncate text-xs text-muted-foreground">
                  <p className="leading-tight py-1">{headline}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardFooter className="justify-end gap-2 px-4 pt-0">
        <Button
          size="sm"
          variant="ghost"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          상담 신청
        </Button>
        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/client/message");
          }}
        >
          dm
          <MessageCircle className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
