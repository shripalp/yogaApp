import React from "react";
function Footer() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <p>{!data ? "...loading" : data}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
