import Head from 'next/head'
import Navigation from './navigation'

const Container = (props) => (
  <>
    <Head>
      <title>Next.js App</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
      />
    </Head>
    <Navigation />
    <div className="container p-4">
        {props.children}
    </div>
  </>
);

export default Container