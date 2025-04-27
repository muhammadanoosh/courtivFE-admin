// app/layout.js or app/layout.tsx
import RootLayoutClient from "./RootLayoutClient";

export const metadata = {
  title: "Courtiv | Dashboard",
  description: "Courtiv is an admin Dashboard created for multipurpose.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
