import {
  CounselorCard,
  type CounselorStatus,
} from "~/components/counselor-card";
import { Link } from "react-router";
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
          <p className="text-xl font-light text-foreground p-2">
            당신의 '작업'을 도와줄 퍼실리테이터를 찾아보세요.
          </p>
        </div>
      </div>

      <div className="space-y-16">
        <section className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <h2 className="text-5xl font-bold leading-tight tracking-tight">
                온라인
              </h2>
              <p className="text-xl font-light text-foreground">
                지금 바로 연결 가능한 상담사들입니다.
              </p>
              <Button variant="link" asChild className="text-xl p-0">
                <Link to="/counselors?status=online">더보기 &rarr;</Link>
              </Button>
            </div>
            {ONLINE_COUNSELORS.slice(0, 8).map((counselor) => (
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

        <section className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <h2 className="text-5xl font-bold leading-tight tracking-tight">
                상담중
              </h2>
              <p className="text-xl font-light text-foreground">
                현재 상담을 진행 중인 상담사들입니다.
              </p>
              <Button variant="link" asChild className="text-xl p-0">
                <Link to="/counselors?status=busy">더보기 &rarr;</Link>
              </Button>
            </div>
            {BUSY_COUNSELORS.slice(0, 8).map((counselor) => (
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
        <section className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <h2 className="text-5xl font-bold leading-tight tracking-tight">
                오프라인
              </h2>
              <p className="text-xl font-light text-foreground">
                현재 오프라인 상태의 상담사들입니다.
              </p>
              <Button variant="link" asChild className="text-xl p-0">
                <Link to="/counselors?status=offline">더보기 &rarr;</Link>
              </Button>
            </div>
            {AWAY_COUNSELORS.slice(0, 8).map((counselor) => (
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
