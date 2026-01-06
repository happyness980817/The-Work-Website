import { Form } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function CounselorSearch() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div>
          <h1 className="text-5xl font-bold">상담사 검색</h1>
          <p className="font-light text-muted-foreground pt-2">
            당신의 '작업'을 도와줄 퍼실리테이터를 찾아보세요.
          </p>
        </div>

        {/* Search (counselors 페이지 상단 UI 복사) */}
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
    </div>
  );
}
