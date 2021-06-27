import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

import "./MainLayout.module.css";

const MainLayout = (props:any) => {
  return (
    <div className="mainLayout">
      <MainHeader />
      {props.children}
      <MainFooter />
    </div>
  );
};

export default MainLayout;
