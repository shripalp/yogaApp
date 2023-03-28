import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Cookies from "universal-cookie";

function LogoutForm() {
  const [login, setLogin] = React.useState(false);
  const cookies = new Cookies();

  const handleLogout = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    setLogin(false);
    // set the cookie
    cookies.remove("TOKEN", {
      path: "/",
    });
    // redirect user to the auth page
    window.location.href = "/";
  };

  return (
    <>
      <Form onSubmit={(e) => handleLogout(e)}>
        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </Button>
        {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </Form>
    </>
  );
}

export default LogoutForm;
