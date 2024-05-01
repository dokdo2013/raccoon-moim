import Header from "@/components/header/Header";
import { pretendard } from "@/lib/fonts";
import clsx from "clsx";

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  // get moim by id

  return {
    props: {
      id: params.id,
    },
  };
}

const Moim = ({ id }: { id: string }) => {
  return (
    <main className={clsx(pretendard.className, "container max-w-[600px]")}>
      <Header />
    </main>
  );
};

export default Moim;
