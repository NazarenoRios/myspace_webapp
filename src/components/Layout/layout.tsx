export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="w-full h-screen bg-main bg-cover object-cover flex items-center">
        {children}
      </body>
    </html>
  );
}
