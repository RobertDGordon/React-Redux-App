import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Loading = props => {
  return (
    <Loader
      type="CradleLoader"
      color="Blue"
      height={100}
      width={100}
    />
  );
};

export default Loading;