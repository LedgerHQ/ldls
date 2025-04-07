import { jsx as s } from "react/jsx-runtime";
const n = {
  "background-default": "var(--background-default)"
}, u = ({ children: r, variant: t = "primary", onClick: a }) => {
  const o = "px-4 py-2 rounded-md font-medium transition-colors", e = {
    primary: `${n["background-default"]} text-white hover:bg-blue-600`,
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  return /* @__PURE__ */ s(
    "button",
    {
      className: `${o} ${e[t]}`,
      onClick: a,
      children: r
    }
  );
};
export {
  u as Button
};
