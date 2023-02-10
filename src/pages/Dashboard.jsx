import React, { useContext } from "react";
import AuthApi from "../utils/AuthAPI";
import { logOut } from "../components/auth-api";
import "../fondoinicio.css";
export default function Dashboard() {
  const authApi = useContext(AuthApi);
  return (
    <div className="nav-margin">
      <div className="my-5">
        <div className="text-center py-3">
          <h1 className="boogaloo">Dashboard</h1>
        </div>
        <div className="text-center">
          <h2 className="boogaloo2">Welcome</h2>
        </div>
        <div className="text-center">
          <button
            className="btn btn-dark my-2"
            onClick={async () => {
              const res = await logOut();
              authApi.setAuth(res.data.auth);
            }}
          >
            logOut
          </button>
        </div>
      </div>
    </div>
  );
}
