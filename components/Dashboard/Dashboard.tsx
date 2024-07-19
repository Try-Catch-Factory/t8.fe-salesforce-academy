'use client'

import { table } from "console"
import { UserProvider } from "@/authentication/hooks/UserProvider";
import Header from "./../Header/Header";
import TablaDashboard from "./TablaDashboard";
import Sidebar from "./Sidebar";
import Footer from "./../Sections/Footer";

const Dashboard: React.FC = () => {
    return(
        <UserProvider>
            <div className="encabezado">
                <Header></Header>
                // Falta agregar el botón de logout y el perfil de usuario.
                // Lo planteé para que vaya en la parte derecha del header.
            </div>

            <div className="principal">
                // El contenedor principal puede ser flex o grid. Acomodar los dos elementos horizontalmente
                <Sidebar></Sidebar>  // Va en la parte izquierda de la página, position: fixed
                <TablaDashboard></TablaDashboard>  // Ocupa el resto de la página disponible
            </div>

            <div className="pieDePagina">
                <Footer></Footer>
            </div>
        </UserProvider>
    )
}