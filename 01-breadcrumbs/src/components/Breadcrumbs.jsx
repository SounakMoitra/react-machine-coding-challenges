import { Link, useLocation } from "react-router";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);

  console.log(pathnames); // eg: ['products', '8']

  let breadcrumbsPath = "";

  return (
    <div className="bread-crumbs">
      {pathnames.length > 0 && <Link to="/">Home </Link>}
      {pathnames.map((name, index) => {
        breadcrumbsPath += `/${name}`;

        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbsPath}>/ {name}</span>
        ) : (
          <span key={breadcrumbsPath}>
            /{" "}
            <Link key={breadcrumbsPath} to={breadcrumbsPath}>
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
