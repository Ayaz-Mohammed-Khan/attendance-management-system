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
              <br />
              <label for="User-Id">User-Id</label>
              <br />
              <input className="input-data" id="User-Id" type="email" /> <br />
              <label for="Password">Password</label>
              <br />
              <input className="input-data" id="Password" type="password" />
              <br />
              <div class="conatiner">
                <button id="btns" onClick={() => props.func()}>
                  ⬅
                </button>
                <input id="btns" value="Login" type="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
