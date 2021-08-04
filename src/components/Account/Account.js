import { useAuth0 } from "@auth0/auth0-react";

import Button from "../Button";
import Layout from "../Layout";
import useHttp from "../../hooks/useHttp";

export default function Account() {
  const { logout } = useAuth0();
  const { deleteAccount } = useHttp();

  return (
    <Layout>
      <div>
        <Button
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
          theme="link"
        >
          <i className="fa-sign-out fa mr-2" aria-hidden="true"></i> Logout
        </Button>
      </div>
      <div>
        <Button
          onClick={async () => {
            if (
              window.confirm(
                "Are you sure you want to delete your data? This action cannot be undone!"
              )
            ) {
              await deleteAccount();
              logout({
                returnTo: window.location.origin,
              });
            }
          }}
          theme="link-danger"
        >
          <i className="fa-trash fa mr-2" aria-hidden="true"></i> Delete my data
        </Button>
      </div>
    </Layout>
  );
}
