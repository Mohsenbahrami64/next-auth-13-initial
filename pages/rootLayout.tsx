import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
