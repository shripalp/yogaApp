import React from "react";
function Main() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <p>{!data ? "...loading" : data}</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
