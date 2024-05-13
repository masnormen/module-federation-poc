import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import {
  revalidate,
  FlushedChunks,
  flushChunks,
} from '@module-federation/nextjs-mf/utils';

export default class MyDocument extends Document<{
  chunks: any
}> {
  static async getInitialProps(ctx: DocumentContext) {
    if (ctx.pathname) {
      if (!ctx.pathname.endsWith('_error')) {
        await revalidate().then((shouldUpdate) => {
          if (shouldUpdate) {
            console.log('should HMR', shouldUpdate);
          }
        });
      }
    }

    const initialProps = await Document.getInitialProps(ctx);

    const chunks = await flushChunks();

    return {
      ...initialProps,
      chunks,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <FlushedChunks chunks={this.props.chunks} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

// export default class MyDocument extends Document<{
//   chunks: any
// }> {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await Document.getInitialProps(ctx);

//     return {
//       ...initialProps,
//     };
//   }

//   render() {
//     return (
//       <Html>
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }