import RemoteTopupSection from "@/components/DigitalGoods/RemoteTopupSection";
import RemoteCarousel from "@/components/PromoAds/RemoteCarousel";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <>
      <RemoteCarousel ssr />

      <section className="grid grid-cols-2 gap-6">
        <div className="bg-slate-200 p-4 rounded-lg">
          <span className="text-sm font-medium">
            D1sc0ver 0ur n3w c0llecti0n
          </span>
        </div>

        <RemoteTopupSection ssr />
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {}
  }
}

Home.getLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>;
};
