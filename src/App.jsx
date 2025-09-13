import { Container, Button, Card } from "react-bootstrap";
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
import Main from "./components/Main"

export default function AppLayout() {
  return (
    <>
      <Menu />
      <Main></Main>
      <Footer />
    </>
  );
}
