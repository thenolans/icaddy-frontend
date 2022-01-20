import { useAuth0 } from "@auth0/auth0-react";
import { reverse } from "named-urls";
import { stringifyUrl } from "query-string";

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

  async function deleteShot(shotId) {
    const authHeader = await getAuthHeader();
    return http.delete(reverse(Urls.api.shot, { id: shotId }), {
      headers: authHeader,
    });
  }

  async function getShotHistory(clubId) {
    const authHeader = await getAuthHeader();
    return http
      .get(
        stringifyUrl({
          url: Urls.api.shots,
          query: {
            club: clubId,
          },
        }),
        {
          headers: authHeader,
        }
      )
      .then((res) => res.data);
  }

  return {
    getShotAverages,
    logShot,
    deleteAccount,
    getShotHistory,
    deleteShot,
  };
}
