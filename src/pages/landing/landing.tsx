import React, { FC } from "react";
import Loading from "components/shared/Loading";

const Landing: FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <Loading />
        <h1 className="mt-6">Homepage</h1>
      </div>
    </div>
  );
};

export default Landing;
