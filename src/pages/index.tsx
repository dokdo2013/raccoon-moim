import { Inter } from "next/font/google";
import { pretendard } from "@/lib/fonts";
import clsx from "clsx";
import Moim from "@/components/moim/Moim";
import Header from "@/components/header/Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={clsx(pretendard.className, "container max-w-[600px]")}>
      <Header />

      <section className="mt-5">
        <h2 className="text-md font-semibold">현재 열려있는 모임</h2>

        <div className="grid gap-2 mt-2">
          <Link href="/moim/1">
            <Moim
              title="모각작 1기"
              startDate="2021년 10월 1일"
              endDate="2021년 12월 31일"
            />
          </Link>
          <Moim
            title="모각작 1기"
            startDate="2021년 10월 1일"
            endDate="2021년 12월 31일"
          />
          <Moim
            title="모각작 1기"
            startDate="2021년 10월 1일"
            endDate="2021년 12월 31일"
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-md font-semibold">모각작 소개</h2>

        <div className="mt-2">
          <span>
            너구리의 모각작에 오신 여러분을 환영합니다! 모각작은 Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Optio explicabo,
            aliquam libero minima et fugit ipsum dolorem ipsa iste molestiae sed
            dicta quis incidunt ab quos facilis delectus quidem rerum?
          </span>
        </div>
      </section>
    </main>
  );
}
