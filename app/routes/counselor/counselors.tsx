import {
  CounselorCard,
  type CounselorStatus,
} from "~/components/counselor-card";
import { Form } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

type DummyCounselor = {
  id: string;
  name: string;
  headline: string;
  status: CounselorStatus;
  avatarUrl?: string;
};

const AVATAR_URL = "https://github.com/shadcn.png";

const ONLINE_COUNSELORS: DummyCounselor[] = Array.from({ length: 8 }).map(
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
);

const BUSY_COUNSELORS: DummyCounselor[] = Array.from({ length: 8 }).map(
  (_, i) => {
    const id = `busy-${i + 1}`;
    return {
      id,
      name: `상담사 ${i + 101}`,
      headline: "상담사입니다.",
      status: "busy",
      avatarUrl: AVATAR_URL,
    };
  }
);

const AWAY_COUNSELORS: DummyCounselor[] = Array.from({ length: 8 }).map(
  (_, i) => {
    const id = `away-${i + 1}`;
    return {
      id,
      name: `상담사 ${i + 201}`,
      headline: "상담사입니다.",
      status: "away",
      avatarUrl: AVATAR_URL,
    };
  }
);

export default function CounselorsIndex() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div>
          <h1 className="text-5xl font-bold">상담사 목록</h1>
          <p className="font-light text-muted-foreground pt-2">
            당신을 위한 상담사들이, 여기에서 당신을 기다리고 있습니다.
          </p>
        </div>

        {/* Search (wemake search-page 패턴) */}
        <Form
          className="flex justify-center max-w-screen-sm items-center mx-auto gap-2 py-10"
          method="get"
        >
          <Input
            name="query"
            placeholder="상담사 이름 또는 소개로 검색"
            className="text-base"
            defaultValue=""
          />
          <Button type="submit">검색</Button>
        </Form>
      </div>

      <div className="space-y-16">
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-5xl font-semibold">온라인</h2>
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
          <div className="flex justify-end">
            <Button variant="link" className="px-0">
              더보기 →
            </Button>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-5xl font-semibold">상담중</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSY_COUNSELORS.map((counselor) => (
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
          <div className="flex justify-end">
            <Button variant="link" className="px-0">
              더보기 →
            </Button>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-5xl font-semibold">자리비움</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {AWAY_COUNSELORS.map((counselor) => (
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
          <div className="flex justify-end">
            <Button variant="link" className="px-0">
              더보기 →
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
