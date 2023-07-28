import {  Providers } from "../redux/Provider";
import { Header } from "./components/Header";
import './main.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers >
          
          <Header/>
          {children}
        </Providers>
        
        </body>
    </html>
  )
}
