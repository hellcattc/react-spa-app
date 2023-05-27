import React, { memo } from "react";

const Text = memo(function Text({ children, size }) {
  return <p className={`px-3 text-${size ? size : "xl"}`}>{children}</p>;
});

export default Text;
