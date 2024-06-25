import { Routes, Route } from 'react-router-dom';
import LoginMain from '../pages-views/Login/LoginMain';
import MainLayout from '../pages-views/mainLayout';
import Erro404 from '../pages-views/Error_Pages/error404';
import Home from '../pages-views/Home/Home';
import Dashboard from '../pages-views/Dashboard/main_Dashboard';
import Usuarios from '../pages-views/mod_Usuarios/mai_Usuarios';

import Inventario from '../pages-views/mod_inventario/mai_Inventario';

// Ventas y Facturacion
import VentasMain from '../pages-views/mod_Ventas-Facturacion/Ventas/VentasControl_Main';
import VentasFacturacion from '../pages-views/mod_Ventas-Facturacion/main_VentasFacturacion';
import Ventas from '../pages-views/mod_Ventas-Facturacion/main_ventas';
import Tabs_ventas from '../pages-views/mod_Ventas-Facturacion/Tabs/TabsMainGenerator';
import Metodo_Pago  from "../pages-views/mod_Ventas-Facturacion/Metodos_Pago/main_Metodo_Pago";
import Pago_Ventas  from "../pages-views/mod_Ventas-Facturacion/pago_calculo_pt2/PagoVenta";

// import Informes from '../pages-views/mod_Informes/main_informes';
import Ayuda from '../pages-views/Ayuda/MainAyuda';
import Informe from '../pages-views/mod_Informes/Informe';


import InformeVentas from '../pages-views/mod_Informes/InformeVentas';
import InformeDeudores from '../pages-views/mod_Informes/InformeDeudores';
//import InformeInventario from '../pages-views/mod_Informes/InformeInventario';
//import InformeEmpleados from '../pages-views/mod_Informes/InformeEmpleados';


import Tabla_Producto from "../pages-views/mod_inventario/tablaProducto";
import Gestion_Inventario from "../pages-views/mod_inventario/tablaInventario";
import Entrega_Producto from "../pages-views/mod_inventario/entregaProducto";

import Tabla_users from '../pages-views/mod_Usuarios/Tabla_users';
import Tabla_proveedores from '../pages-views/mod_Usuarios/Tabla_proveedores';
import Tabla_deudor from '../pages-views/mod_Usuarios/Tabla_deudor';
import TablaAdmins from '../pages-views/mod_Usuarios/Admins/TablaAdmin';
import LayoutMain from '../pages-views/mainLayout';

export function MyRoutes() {
    return (
        <Routes>
            <Route path='/Layout/*' element={<MainLayout />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            {/* <Route path='/GestionUsuarios' element={<Usuarios />} /> */}
            <Route path='/GestionUsuarios/Admins/TablaAdmin' element={<TablaAdmins />} />
            <Route path='/GestionUsuarios/TablaUsuarios' element={<Tabla_users />} />
            <Route path='/GestionUsuarios/TablaProveedores' element={<Tabla_proveedores />} />
            <Route path='/GestionUsuarios/TablaDeudores' element={<Tabla_deudor />} />

            <Route path='/Inventario' element={<Inventario />} />
            <Route path='/Inventario/Producto' element={<Tabla_Producto />} />
            <Route path='/Inventario/GestionInventario' element={<Gestion_Inventario />} />
            <Route path='/Inventario/EntregaProducto' element={<Entrega_Producto />} />

            <Route path='/VentasFacturacion/list' element={<VentasFacturacion />} />
            <Route path='/VentasFacturacion/ventas_main' element={<VentasMain />} />
            <Route path='/VentasFacturacion/venta_pagar' element={<Pago_Ventas />} />
            <Route path='/VentasFacturacion/tabs' element={<Tabs_ventas/>} />
            <Route path='/VentasFacturacion/ventas' element={<Ventas />} />
            <Route path='/VentasFacturacion/metodo_pago' element={<Metodo_Pago />} />

            <Route path='/Informes' element={<Informe />} />
            <Route path='/GestionInformes/InformeVentas' element={<InformeVentas />} />
            <Route path='/GestionInformes/InformeDeudores' element={<InformeDeudores />} />

            <Route path='/Ayuda' element={<Ayuda />} />
            <Route path='*' element={<Erro404 />} />
            <Route path='/' element={<LoginMain />} />
            <Route path='/Login' element={<LoginMain />} />
        </Routes>
    );
}
