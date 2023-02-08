import { Container } from "react-bootstrap";
import Footer from "../views/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Container fluid className="p-0">
        {children}
      </Container>
      <Footer />
    </>
  );
}
