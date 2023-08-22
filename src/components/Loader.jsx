import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './loaderStyles.css';

const Loader = () => (
  <div className="loader">
    <TailSpin color="#00BFFF" height={50} width={50} />
  </div>
);

export default Loader;
