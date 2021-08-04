import { useAuth0 } from "@auth0/auth0-react";

import http from "../utils/http";
import Urls from "../constants/urls";

export default function useHttp() {
  const { getAccessTokenSilently } = useAuth0();

  async function getAuthHeader() {
    return {
      authorization: `Bearer ${await getAccessTokenSilently()}`,
    };
  }

  async function getShotAverages() {
    const authHeader = await getAuthHeader();
    return http
      .get(Urls.api.shotAggregate, {
        headers: authHeader,
      })
      .then((res) => res.data);
  }

  async function logShot(shot) {
    const authHeader = await getAuthHeader();
    return http
      .post(Urls.api.shots, shot, {
        headers: authHeader,
      })
      .then((res) => res.data.data);
  }

  async function deleteAccount() {
    const authHeader = await getAuthHeader();
    return http.delete(`${Urls.api.account}?icaddy=true`, {
      headers: authHeader,
    });
  }

  return {
    getShotAverages,
    logShot,
    deleteAccount,
  };
}
