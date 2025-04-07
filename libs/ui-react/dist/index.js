import { jsx as a } from "react/jsx-runtime";
const b = ({ children: s, variant: r = "primary", onClick: t }) => /* @__PURE__ */ a(
  "button",
  {
    className: `px-4 py-2 rounded-md font-medium transition-colors ${{
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }[r]}`,
    onClick: t,
    children: s
  }
);
export {
  b as Button
};
