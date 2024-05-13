import Layout from '@/layout/layout';
import * as RemoteTopupPage from 'remote/pages/topup-gip';

const Page = RemoteTopupPage.default;

Page.getLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>;
}

export default Page;