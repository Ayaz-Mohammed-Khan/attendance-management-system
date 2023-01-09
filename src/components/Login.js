export default function Login(props) {
  return (
    <div>
      <div id="main">
        <div id="text">
          <img id="logo" alt="attendence-management" src={props.logo} />
          <h1>Attendence Management System</h1>
        </div>
        <div id="form">
          <form id="login">
            <div>
              <h3>Login</h3>
              <button>Back</button>
              <br />
              <label for="User-Id">User-Id</label>
              <br />
              <input className="input-data" id="User-Id" type="email" /> <br />
              <label for="Password">Password</label>
              <br />
              <input className="input-data" id="Password" type="password" />
              <br />
              <input id="submit" value="Login" type="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
