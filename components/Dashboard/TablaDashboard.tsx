'use client'

const TablaDashboard: React.FC = () => {
    return(
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Columna 1</th>
                    <th>Columna 2</th>
                    <th>Columna 3</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Información columna 1, fila 1</td>
                    <td>Información columna 1, fila 2</td>
                    <td>Información columna 1, fila 3</td>
                </tr>

                <tr>
                    <td>Información columna 2, fila 1</td>
                    <td>Información columna 2, fila 2</td>
                    <td>Información columna 2, fila 3</td>
                </tr>

                <tr>
                    <td>Información columna 3, fila 1</td>
                    <td>Información columna 3, fila 2</td>
                    <td>Información columna 3, fila 3</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TablaDashboard;