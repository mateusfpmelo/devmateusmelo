import "./globals.css";

export const metadata = {
  title: "Desenvolvedor Web: Mateus Melo :)",
  description: "Desenvolvedor Web - mateusfpmelodev@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
