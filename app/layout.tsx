import "./globals.css";

export const metadata = {
  title: "NOVA AI",
  description:
    "Ask. Create. Get It Done. Your all-in-one AI assistant.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
