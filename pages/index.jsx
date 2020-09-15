import Head from "next/head";
import Container from "../components/container";
import Users from "../components/users";
import fetch from 'isomorphic-fetch'

const Index = (props) => {
  return (
    <>
      <Container>
        <Head>
          <title>Home - Next.js App</title>
        </Head>
        <h1>Users</h1>
        <Users users={props.users} />
      </Container>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return {users: resJSON.data};
};

export default Index;
