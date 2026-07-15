import "./globals.css";
import localFont from "next/font/local";
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
const inter = localFont({
    src: "./fonts/Inter-VariableFont_opsz,wght.woff2",
    display: "swap",
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