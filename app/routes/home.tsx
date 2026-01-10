import { CounselorCard } from "~/components/counselor-card";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { COUNTRIES } from "~/constants";
import { RefreshCw } from "lucide-react";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `The Work - ${COUNTRIES[0]}` },
    { name: "description", content: `The Work - ${COUNTRIES[0]}` },
  ];
};

// 무한 스크롤, prefetch=viewport

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="asChild pt-5">
        <Link to="/client/chats/list">
          <h1 className="text-5xl font-bold">채팅 목록</h1>
          <p className="text-xl font-light text-foreground p-2">
            이전에 진행한 상담 기록들입니다.
          </p>
          <Button
            variant="link"
            size="sm"
            className="gap-2 pt-5 pb-10 text-lg"
            asChild
          >
            <Link to="/client/chats/list">바로가기&rarr;</Link>
            {/* 아래에 챗 카드 목록 */}
            {/* 즐겨찾기 (고정) 가능 */}
          </Button>
        </Link>
      </div>
      <section className="space-y-3">
        <div>
          <h1 className="text-5xl font-bold asChild">
            <Link to="/counselors?status=online">상담사 목록</Link>
          </h1>
          <p className="text-xl font-light text-foreground p-2">
            현재 상담 가능한 상담사들입니다.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" className="gap-2" disabled>
              <RefreshCw className="size-4" />
              새로고침
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 36 }).map((_, index) => (
              <CounselorCard
                key={index}
                id={`online-${index + 1}`}
                name={`상담사 ${index + 1}`}
                headline={`상담사 ${index + 1}입니다.`}
                status="online"
                avatarUrl="https://github.com/shadcn.png"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
