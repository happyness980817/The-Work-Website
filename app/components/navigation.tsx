import { Link } from "react-router";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Navigation({
  isloggedIn,
  hasNotifications,
  hasMessages,
}: {
  isloggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="flex px-5 xl:px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          The Work - Korea
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/counselors">상담사</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/counselors/1">상담사(예시)</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="/user/chats/1">채팅(예시)</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
