import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "constants/Routes";
import Navbar from "components/navigation/Navbar";
import BottomBar from "components/navigation/BottomBar";
import Landing from "pages/landing/landing";

const App: FC = () => {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        transition={Flip}
        style={{ fontWeight: "bolder" }}
      />
      <Navbar />
      <div className="w-full min-h-screen mt-20">
        <Switch>
          <Route exact path={Routes.landing} component={Landing} />
        </Switch>
      </div>
      <BottomBar />
    </div>
  );
};

export default App;
