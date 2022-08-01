// import { BrowserRouter as Router } from 'react-router-dom'

// import Routes from "routes";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Combos from "./pages/Promotion/Combos/Combos";
import Coupons from "./pages/Promotion/Coupons/Coupons";
import Discount from "./pages/Promotion/Discount/Discount";
import TimedEvents from "./pages/Promotion/Timedevents/Timedevents";
import CashiersReports from "./pages/Reports/CashiersReports/CashiersReports";
import CategoriesSalesDetailsReports from "./pages/Reports/CategoriesSalesReports/CategoriesSalesDetailsReports";
import CategoriesSalesReports from "./pages/Reports/CategoriesSalesReports/CategoriesSalesReports";
import CustomerSalesReports from "./pages/Reports/CustomerSalesReports/CustomerSalesReports";
import Inventory from "./pages/Reports/Inventory/Inventory";
import Miscellaneous from "./pages/Reports/Miscellaneous/Miscellaneous";
import PaymentReports from "./pages/Reports/PaymentReports/PaymentReports";
import ProductSalesReports from "./pages/Reports/ProductSalesReports/ProductSalesReports";
import Sales from "./pages/Reports/Sales/Sales";
import Customers from "./pages/Sales/Customers/Customers";
import OrderDetails from "./pages/Sales/Orderdetails/Orderdetails";
import Orders from "./pages/Sales/Orders/Orders";
import Sessions from "./pages/Sales/Sessions/Sessions";
import SessionsDetails from "./pages/Sales/Sessionsdetails/Sessionsdetails";
import Cashiers from "./pages/Settings/Cashiers/Cashiers";
import Employes from "./pages/Settings/Employes/Employes";
import FLoors from "./pages/Settings/Floors/Floors.module";
import Roles from "./pages/Settings/Roles/Roles";
import Taxes from "./pages/Settings/Taxes/Taxes";
import Payment from "./pages/Settings/Payment/Payment"
import Delivery from "./pages/Settings/Delivery/Delivery";
import ItemsSidebar from "./pages/Inventory/Items/Items";
import Suppliers from "./pages/Inventory/Suppliers/Suppliers";
import Tags from "./pages/Settings/Tags/Tags";
import Devices from "./pages/Settings/Devices/Devices";
import Branch from "./pages/Settings/branch/Branch";
import Purchase from "./pages/Inventory/Purchaseorder/Purchase";
import Puchaseorder from "./pages/Inventory/Purchaseorder/Purhaseorder";
import Transfer from "./pages/Inventory/Transfer/Transfer";
import Transferorder from "./pages/Inventory/Transfer/Transferorder";
import { CreateBranch } from "./pages/Settings/branch/Createbranch";
import Acounting from "./pages/Settings/branch/Acounting";
import Category from "./pages/Menu/Category/Category";
import Products from "./pages/Menu/Products/Products";
import Modifier from "./pages/Menu/Modifier/Modifier";
import Display from "./pages/Menu/Display/Display";
import Role from "./pages/Menu/Role/Role";
import Branches from "./pages/Settings/Delivery/Branches";
import Categorydetails from "./pages/Menu/Category/Categorydetails";
import Categorylist from "./pages/Menu/Category/Categorylist";
import Addproducts from "./pages/Menu/Products/Addproducts";
import Sessionsorder from "./pages/Sales/Sessions/Sessionsorder";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Addcombos from "./pages/Promotion/Combos/Addcombos";
import Customerdetails from "./pages/Sales/Customerdetails/Customerdetails";
import Combosdetails from "./pages/Promotion/Combosdetails/Combosdetails";
import Productsdetails from "./pages/Menu/Products/Productsdetails";
import Modifieroption from "./pages/Menu/Modifieroption/Modifieroption";
import Branchdetails from "./pages/Settings/branch/Branchdetails";
import Addcoupons from "./pages/Promotion/Coupons/Addcoupons";
import Reservations from "./pages/Settings/Reservations/Reservations";
import Reasons from "./pages/Settings/Reasons/Reasons";
import Tagdetails from "./pages/Settings/Tags/TagDetails";
import Warehouses from "./pages/Settings/Warehouses/Warehouses";
import Kitchenflows from "./pages/Settings/KitchenFlows/Kitchenflows.module";
import Kitchenflowsdetails from "./pages/Settings/KitchenFlows/Kitchenflowsdetails";
import Charges from "./pages/Settings/Charges/Charges";
import Giftcard from "./pages/Settings/Giftcard/Giftcard";
import Giftcarddetails from "./pages/Settings/Giftcard/Giftcarddetails";
import Timedetails from "./pages/Promotion/Timedevents/Timedetails";
import Devicesdetails from "./pages/Settings/Devices/Devicesdetails";
import Generalsettings from "./pages/Settings/Generalsettings/Generalsettings";
import MyReports from "./pages/Reports/MyReports/MyReports";
import AddMyReports from "./pages/Reports/MyReports/AddMyReports";
import Landing from "pages/customer/Landing";
import Layout from "layouts";
import Register from "pages/owner/Register";
import SignUp from "pages/owner/SignUp";
import SignIn from "pages/owner/SignIn";
const App = () => {
  return (
    <>
      {/* <Router>

      </Router> */}

      <Router>
        <div>
          <Route exact path="/" >
            <Layout>
              <Landing />
            </Layout>
          </Route>


          <Route exact path="/restaurant/register">
            <Layout>
              <Register />
            </Layout>
          </Route>
          <Route exact path="/restaurant/signup">
            <Layout>
              <SignUp />
            </Layout>
          </Route>
          <Route exact path="/restaurant/signin">
            <Layout>
              <SignIn />
            </Layout>
          </Route>
        </div>
      </Router>
    </>
  )
}

export default App