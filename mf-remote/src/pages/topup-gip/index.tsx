import TopupSection from "@/components/TopupSection";

export default function TopupPage({
  currentTime,
}: {
  currentTime: string;
}) {
  return (
    <main>
      <div className="font-bold text-3xl">Topup Page</div>
      <br />
      Waktu GIP: {currentTime}
      <br />
      <br />
      <TopupSection />
    </main>
  );
}

TopupPage.getInitialProps = async () => {
  return {
    currentTime: new Date().toISOString(),
  };
}