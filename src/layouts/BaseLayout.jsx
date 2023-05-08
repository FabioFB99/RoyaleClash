import './BaseLayout.css';

import React from 'react';

const BaseLayout = ({ children }) => {
  return <main className="gridLayout">{children}</main>;
};

export default BaseLayout;
