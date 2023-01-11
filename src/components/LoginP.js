export default function LoginP(props) {
  console.log(props);
  return (
    <div id="main">
      <div id="text">
        <img id="logo" alt="attendence-management" src={props.logo} />
        <h1>Attendence Management System</h1>
      </div>
      <div id="form">
        <div className="login-primery" id="loginp">
          <h3>Login</h3>
          <button
            onClick={() => props.func("admin")}
            className="btns"
            id="admin"
          >
            Admin
          </button>
          <button
            onClick={() => props.func("faculty")}
            className="btns"
            id="faculty"
          >
            Faculty
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
