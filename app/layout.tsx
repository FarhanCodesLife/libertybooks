export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <header style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
          <h1>Books API</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
