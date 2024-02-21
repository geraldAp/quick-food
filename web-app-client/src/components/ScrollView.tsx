import React from "react";

const ScrollView = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex overflow-y-scroll p-4">{children}</div>;
};

export default ScrollView;
