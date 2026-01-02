import { Link } from "react-router";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { COUNTRIES } from "~/constants";

const menus = [
  {
    name: "상담사 ",
    to: "/counselors?status=online",
    items: [
      {
        name: "기준별 탐색",
        description: "Search for a counselor by criteria",
        to: "/counselors",
      },
      // {
      //   name: "온라인",
      //   description: "Online counselors",
      //   to: "/counselors?status=online",
      // },
      // {
      //   name: "국가별",
      //   description: "Counselors by country",
      //   to: "/counselors?sortBy=countries",
      // },
      // {
      //   name: "평점별",
      //   description: "Counselors with the highest ratings",
      //   to: "/counselors?sortBy=ratings&sortOrder=desc",
      // },
      // {
      //   name: "상담 건수별",
      //   description: "Counselors who have completed the most sessions",
      //   to: "/counselors?sortBy=completedSessions&sortOrder=desc",
      // },
      {
        name: "상담사 검색",
        description: "Search for a counselor",
        to: "/counselors/search",
      },
    ], // 이렇게 할게 아니라 한페이지에서 필터 적용으로 그냥 휙휙 정렬기준이 바뀌게 해야할거같다
  },
  {
    name: "채팅",
    to: "/user/chats/list",
    items: [
      {
        name: "상담 목록",
        description: "See the top",
        to: "/user/chats/list",
      },
      {
        name: "DM",
        description: "Direct messages",
        to: "/user/dm",
      },
    ],
  },
  {
    name: "웹사이트 소개",
    to: "/about",
  },
];

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
          {`The Work - ${COUNTRIES[0]}`}
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center gap-2">
          <Button className="font-semibold" asChild variant="ghost" size="sm">
            <Link to="/counselors">상담사</Link>
          </Button>
          <Button className="font-semibold" asChild variant="ghost" size="sm">
            <Link to="/user/chats/1">채팅</Link>
          </Button>
          <Button className="font-semibold" asChild variant="ghost" size="sm">
            <Link to="/user/chats/1">'작업' 이란?</Link>
          </Button>
          <Button className="font-semibold" asChild variant="ghost" size="sm">
            <Link to="/about">웹사이트 소개</Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* MVP: 더미 상태 */}
        <span className="hidden sm:inline text-xs text-muted-foreground">
          알림:{hasNotifications ? "Y" : "N"} / 메시지:{hasMessages ? "Y" : "N"}
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="계정 메뉴 열기"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User avatar"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-64" align="end">
            <DropdownMenuLabel className="flex flex-col">
              <span className="font-medium">
                {isloggedIn ? "로그인됨(더미)" : "로그인 필요"}
              </span>
              <span className="text-xs text-muted-foreground">
                역할별 로그인/가입
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="/auth/counselor/login">상담사 로그인</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/auth/counselor/join">상담사 가입</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/auth/user/login">내담자 로그인</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/auth/user/join">내담자 가입</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            {isloggedIn ? (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem disabled>프로필</DropdownMenuItem>
                  <DropdownMenuItem disabled>로그아웃</DropdownMenuItem>
                </DropdownMenuGroup>
              </>
            ) : null}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
