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
      <div className="container-fluid bg-info m-3 p-3">
        <div className="row">
          <p>This is Footer</p>
          <p>{!data ? "...loading" : data}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
