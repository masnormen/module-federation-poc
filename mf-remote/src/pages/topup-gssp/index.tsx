import TopupSection from "@/components/TopupSection";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  return {
    props: {
      currentTime: new Date().getMilliseconds(),
    },
  };
};

export default function TopupPage({
  currentTime,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <div className="font-bold text-3xl">Topup Page</div>
      <br />
      Waktu GSSP: {currentTime}
      <br />
      <br />
      <TopupSection />
    </main>
  );
}
