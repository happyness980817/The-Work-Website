import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
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
import { cn } from "~/lib/utils";

const menus = [
  {
    name: "상담사 ",
    to: "/counselors?status=online",
    items: [
      {
        name: "기준별 탐색",
        description: "최고의 상담사들을 찾아보세요.",
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
      // 이렇게 할게 아니라 한페이지에서 필터 적용으로 그냥 휙휙 정렬기준이 바뀌게 해야할거같다
      {
        name: "상담사 검색",
        description: "상담사 검색 페이지입니다.",
        to: "/counselors/search",
      },
    ],
  },
  {
    name: "채팅",
    to: "/user/chats/list",
    items: [
      {
        name: "채팅 목록",
        description: "채팅 기록 다시보기 페이지입니다.",
        to: "/user/chats/list",
      },
      {
        name: "DM",
        description: "DM",
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
        <Separator orientation="vertical" className="h-6 mx-2" />

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {"items" in menu && menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[520px] font-light gap-2 p-3 grid-cols-2">
                        {menu.items.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn(
                              "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent"
                            )}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3 space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link to={menu.to} className={navigationMenuTriggerStyle()}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
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
