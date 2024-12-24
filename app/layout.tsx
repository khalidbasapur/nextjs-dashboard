import "../app/ui/global.css";
import { bogle } from "@/app/ui/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${bogle.className} antialiased`}>{children}</body>
    </html>
  );
}
