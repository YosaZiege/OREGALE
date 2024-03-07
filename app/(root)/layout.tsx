
import Header from "@/components/shared/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <Header />
      <body>{children}</body>
      </>
  );
}
