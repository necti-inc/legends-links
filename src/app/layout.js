import "./globals.css";

export const metadata = {
  title: "necti",
  description: "Website Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
