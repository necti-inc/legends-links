import "./globals.css";

export const metadata = {
  title: "Dustin's Links",
  description: "Links for Dustin Williams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
