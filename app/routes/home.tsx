import {
  CounselorCard,
  type CounselorStatus,
} from "~/components/counselor-card";
import { Form } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { COUNTRIES } from "~/constants";

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
      <div className="space-y-3">
        <div>
          <h1 className="text-5xl font-bold">상담사 목록</h1>
          <p className="font-light text-muted-foreground pt-2">
            당신의 '작업'을 도와줄 퍼실리테이터를 찾아보세요.
          </p>
        </div>
      </div>
      <div className="space-y-16">
        <section className="space-y-5">
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
