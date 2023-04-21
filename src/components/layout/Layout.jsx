import { Outlet } from "react-router-dom";
import { Header } from "./headerLayout/Header";
import { Footer } from "./footerLayout/Footer";

// This component renders the layout of our application. It includes fotter, header and content.
const Layout = ({ footer = true, header = true }) => {
  return (
    <div>
      {header ? <Header /> : null}
      <Outlet />
      {footer ? <Footer /> : null}
    </div>
  );
};

export { Layout };
