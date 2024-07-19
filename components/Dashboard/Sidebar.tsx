'use client'

const Sidebar: React.FC = () => {
    return(
        <div className="sidebar">
            // Construyendo en encabezado con el logo de la web del sidebar
            <div className="sidebar__header">
                <img src="" alt="logo" className="sidebar__logo" />
            </div>

            // Construyendo las opciones disponibles del sidebar
            <div className="sidebar__options">
                <div className="sidebar__element sidebar__element--active">
                    <span className="sidebar__element-svg"></span>
                    <span className="sidebar__element-name">Opción 1</span>
                </div>

                <div className="sidebar__element">
                    <span className="sidebar__element-svg"></span>
                    <span className="sidebar__element-name">Opción 2</span>
                </div>

                <div className="sidebar__element">
                    <span className="sidebar__element-svg"></span>
                    <span className="sidebar__element-name">Opción 3</span>
                </div>

                <div className="sidebar__element">
                    <span className="sidebar__element-svg"></span>
                    <span className="sidebar__element-name">Opción 4</span>
                </div>
            </div>


            // Construyendo la parte inferior del sidebar
            <div className="sidebar__footer">
                <div className="sidebar__element">
                    <span className="sidebar__element-svg"></span>
                    <span className="sidebar__element-name">Configuración</span>
                </div>

                <div className="sidebar__element">
                    <span className="sidebar__element-svg"></span>
                    <span className="sidebar__element-name">Cerrar Sesión</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;