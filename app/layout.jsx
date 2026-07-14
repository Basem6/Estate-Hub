import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "../src/components/Nav";
export const metadata = {
    title: "EstateHub | Find Your Perfect Home",
    description:
        "Explore premium homes, apartments, and rental properties. Find the ideal place to buy or rent with trusted listings and an easy search experience.",
    keywords: [
        "real estate",
        "homes",
        "apartments",
        "rent",
        "buy",
        "property",
        "estate",
        "house",
    ],
    };
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
export default function RootLayout({ children }) {
return (
    <html lang="en">
    <body className={`${inter.className}`}>
        <Nav></Nav>
        {children}
    </body>
    </html>
);
}