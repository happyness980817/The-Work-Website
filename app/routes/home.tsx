import {
  CounselorCard,
  type CounselorStatus,
} from "~/components/counselor-card";
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

type DummyCounselor = {
  id: string;
  name: string;
  headline: string;
  status: CounselorStatus;
  avatarUrl?: string;
};

const AVATAR_URL = "https://github.com/shadcn.png";

const ONLINE_COUNSELORS: DummyCounselor[] = Array.from({ length: 36 }).map(
  (_, i) => {
    const id = `online-${i + 1}`;
    return {
      id,
      name: `상담사 ${i + 1}`,
      headline: "상담사입니다.",
      status: "online",
      avatarUrl: AVATAR_URL,
    };
  }
); // 무한 스크롤, prefetch=viewport

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="asChild">
        <Link to="/user/chats/1">
          <h1 className="text-5xl font-bold">마지막 채팅</h1>
          <p className="font-light text-muted-foreground p-2">
            가장 최근에 상담사와 채팅한 내역입니다.
          </p>
          <Button
            variant="link"
            size="sm"
            className="gap-2 pt-5 pb-20 text-lg"
            asChild
          >
            <Link to="/user/chats/1">바로가기&rarr;</Link>
          </Button>
        </Link>
      </div>
      <div className="space-y-3">
        <div>
          <h1 className="text-5xl font-bold asChild">
            <Link to="/counselors?status=online">상담사 목록</Link>
          </h1>
          <p className="font-light text-muted-foreground pt-2">
            현재 상담 가능한 상담사들입니다.
          </p>
        </div>
      </div>
      <div className="space-y-16">
        <section className="space-y-5">
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" className="gap-2" disabled>
              <RefreshCw className="size-4" />
              새로고침
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {ONLINE_COUNSELORS.map((counselor) => (
              <CounselorCard
                key={counselor.id}
                id={counselor.id}
                name={counselor.name}
                headline={counselor.headline}
                status={counselor.status}
                avatarUrl={counselor.avatarUrl}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
