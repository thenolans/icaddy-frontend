import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

import "./LandingPage.scss";

import Button from "../Button";
import Card from "../Card";
import Container from "../Container";
import Heading from "../Heading";
import ShotsTable from "../ShotsTable";
import Logo from "../Logo";
import Urls from "../../constants/urls";

export default function LandingPage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const history = useHistory();

  return (
    <>
      <div className="landingpage__hero">
        <Container>
          <div className="text-center">
            <Logo />
            <p className="mt-4">
              Your pocket caddy to aggregate all of your shot data and give you
              insights into how far you hit your clubs!
            </p>
            <div className="mt-5">
              {isAuthenticated ? (
                <Button
                  theme="reverse"
                  onClick={() => history.push(Urls.routes.app)}
                >
                  Go to app
                </Button>
              ) : (
                <>
                  <Button
                    className="mr-4"
                    theme="reverse"
                    onClick={() => loginWithRedirect()}
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() =>
                      loginWithRedirect({
                        screen_hint: "signup",
                      })
                    }
                    theme="secondary"
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="text-center py-5">
          <Heading as="h3" className="mb-4">
            Check it out!
          </Heading>
          <Card className="p-4">
            <ShotsTable
              shots={[
                {
                  _id: 4,
                  long_name: "4 Iron",
                  average: 178,
                },
                {
                  _id: 5,
                  long_name: "5 Iron",
                  average: 162,
                },
                {
                  _id: 6,
                  long_name: "6 Iron",
                  average: 154,
                },
                {
                  _id: 7,
                  long_name: "7 Iron",
                  average: 146,
                },
                {
                  _id: 8,
                  long_name: "8 Iron",
                  average: 125,
                },
                {
                  _id: 9,
                  long_name: "9 Iron",
                  average: 118,
                },
                {
                  _id: "pw",
                  long_name: "Pitching Wedge",
                  average: 105,
                },
              ]}
            />
          </Card>
        </div>
      </Container>
    </>
  );
}
