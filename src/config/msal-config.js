import { Configuration } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "11111111-1111-1111-111111111111",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "localhost:3030",
  },
};
