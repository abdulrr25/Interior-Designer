import { Sen } from "next/font/google";
import "./globals.css";


//Components
import Footer from "@/components/Footer";
import Header from "@/components/Header";

//ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";
const Josef = Sen({
  subsets: ["latin"],
  weight:["400","500",'600',"700"],
  display:"swap"

});

export const metadata = {
  title: "New Rangoli Builders",
  description: "A perfect Blend of Tradition and Modernity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Josef.className}>
        <ThemeProvider attribute ="class" defaultTheme="light">

        <Header/>
        {children}
        <Footer/>

        </ThemeProvider>

        
        </body>
    </html>
  );
}
