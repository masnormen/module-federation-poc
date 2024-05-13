// TODO 2

declare module "remote/components/*";

declare module "remote/pages/*" {
  import { GetServerSideProps, GetStaticProps } from "next";
  export default any;
  export const getServerSideProps: GetServerSideProps | undefined;
  export const getStaticProps: GetStaticProps | undefined;
}