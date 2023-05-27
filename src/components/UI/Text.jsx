import React, { memo } from "react";

const Text = memo(function Text({ children, textSize }) {
  return <p className={`p-3 ${textSize ? textSize : "text-xl"}`}>{children}</p>;
});

export default Text;
