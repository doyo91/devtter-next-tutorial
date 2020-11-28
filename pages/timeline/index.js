import AppLayout from "../../components/AppLayout";
import { LinkCustom } from "../../components/LinkCustom"; // para SPA

export default function Timeline({ userName = "Guest" }) {
  return (
    <AppLayout>
      <h1>This is the timeline of {userName}</h1>
      <LinkCustom path="/">
        <a>Go to home!</a>
      </LinkCustom>
    </AppLayout>
  );
}

// Solo componentes de tipo pagina, deprecated
Timeline.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      const { userName } = response;
      return { userName };
    });
};
