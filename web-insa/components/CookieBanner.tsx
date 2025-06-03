"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      cookieName="acceptCookies"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#fff", backgroundColor: "#e86e6e", fontSize: "13px", borderRadius: "4px" }}
      expires={365}
    >
      Utilizamos cookies para mejorar tu experiencia. Al aceptar, das tu consentimiento para usar cookies no esenciales.{" "}
      <a href="/politica-cookies" className="underline">Leer más</a>
    </CookieConsent>
  );
}
