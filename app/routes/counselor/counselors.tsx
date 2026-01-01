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

const STATUSES: CounselorStatus[] = ["online", "busy", "away"];

const DUMMY_COUNSELORS: DummyCounselor[] = [
  ...Array.from({ length: 12 }).map((_, i) => {
    const id = `online-${i + 1}`;
    return {
      id,
      name: `상담사 ${i + 1}`,
      headline: "상담사입니다.",
      status: "online" as const,
      avatarUrl: "https://github.com/shadcn.png",
    };
  }),
  ...Array.from({ length: 12 }).map((_, i) => {
    const id = `busy-${i + 1}`;
    return {
      id,
      name: `상담사 ${i + 13}`,
      headline: "상담사입니다.",
      status: "busy" as const,
      avatarUrl: "https://github.com/shadcn.png",
    };
  }),
  ...Array.from({ length: 12 }).map((_, i) => {
    const id = `away-${i + 1}`;
    return {
      id,
      name: `상담사 ${i + 25}`,
      headline: "상담사입니다.",
      status: "away" as const,
      avatarUrl: "https://github.com/shadcn.png",
    };
  }),
];

const SECTION_LIMIT = 8; // lg:grid-cols-4 기준 2줄(4 * 2)

export default function CounselorsIndex() {
  const onlineCounselors = DUMMY_COUNSELORS.filter(
    (c) => c.status === "online"
  );
  const busyCounselors = DUMMY_COUNSELORS.filter((c) => c.status === "busy");
  const awayCounselors = DUMMY_COUNSELORS.filter((c) => c.status === "away");

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">상담사 목록</h1>
          <p className="text-sm text-muted-foreground">
            검색/필터 UI는 더미 데이터로 먼저 구성
          </p>
        </div>

        {/* Search (wemake search-page 패턴) */}
        <Form
          className="flex justify-center max-w-screen-sm items-center mx-auto gap-2"
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
            <h2 className="text-3xl font-bold tracking-tight">온라인</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {onlineCounselors.slice(0, SECTION_LIMIT).map((c) => (
              <CounselorCard
                key={c.id}
                id={c.id}
                name={c.name}
                headline={c.headline}
                status={c.status}
                avatarUrl={c.avatarUrl}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <Button variant="link" className="px-0" disabled>
              더보기 →
            </Button>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight">상담중</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {busyCounselors.slice(0, SECTION_LIMIT).map((c) => (
              <CounselorCard
                key={c.id}
                id={c.id}
                name={c.name}
                headline={c.headline}
                status={c.status}
                avatarUrl={c.avatarUrl}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <Button variant="link" className="px-0" disabled>
              더보기 →
            </Button>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight">자리비움</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {awayCounselors.slice(0, SECTION_LIMIT).map((c) => (
              <CounselorCard
                key={c.id}
                id={c.id}
                name={c.name}
                headline={c.headline}
                status={c.status}
                avatarUrl={c.avatarUrl}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <Button variant="link" className="px-0" disabled>
              더보기 →
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
