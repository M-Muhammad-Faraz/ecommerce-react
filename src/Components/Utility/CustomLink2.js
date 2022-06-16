import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";
function CustomLink2({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      {match ? <MdPlayArrow fill="#b79b6c" /> : <></>}
      <Link
        style={{
          transform: match ? "translateX(10px)" : "translateX(0px)",
          color: match ? "#b79b6c" : "#AAA",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}
export default CustomLink2;
