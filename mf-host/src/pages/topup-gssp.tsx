import Layout from '@/layout/layout';
import * as RemoteTopupPage from 'remote/pages/topup-gssp';

const Page = RemoteTopupPage.default;
export const getServerSideProps = RemoteTopupPage.getServerSideProps

Page.getLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>;
}

export default Page;