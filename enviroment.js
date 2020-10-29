/*
!Autorization guide Implicit Grant Flow
https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
*/
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "e2ec24b322bf47a99eefaf1f4b9ac79a";
const redirectUri = "http://localhost:8888/callback";

/**
 * Una lista de ámbitos separados por espacios: consulte Uso de ámbitos.
 * https://developer.spotify.com/documentation/general/guides/scopes/
 */
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

/**
 * Usted redirige al usuario:
 */
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
