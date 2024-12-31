import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <RegisterButton />
    </Auth0Provider>
  );
}

function RegisterButton() {
  const { RegisterWithRedirect } = useAuth0();
  return <button onClick={() => RegisterWithRedirect()}>Register</button>;
}
