import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar, Menu, MenuItem, SubMenu, useProSidebar,
} from 'react-pro-sidebar';
import {
  FaUserAlt, FaShoppingCart, FaBell, FaRegEdit, FaThList,
} from 'react-icons/fa';

function SideBar() {
  const { toggleSidebar, broken } = useProSidebar();

  return (
    <div className="sidebar">
      <Sidebar customBreakPoint="800px">
        <Menu>
          <SubMenu icon={<FaUserAlt />} label="Akun Saya">
            <MenuItem routerLink={<Link to="/profileuser" />}> Profil </MenuItem>
            <MenuItem routerLink={<Link to="/profileuser/address" />}> Alamat </MenuItem>
            <MenuItem routerLink={<Link to="/profileuser/changepassword" />}> Ubah Password </MenuItem>
          </SubMenu>
          <MenuItem icon={<FaShoppingCart />}> Pesanan Saya </MenuItem>
          <SubMenu icon={<FaBell />} label="Notifikasi">
            <MenuItem routerLink={<Link to="/profileuser/productstate" />}> Status Pesanan </MenuItem>
            <MenuItem routerLink={<Link to="/profileuser/promo" />}> Promo EwaSons </MenuItem>
            <MenuItem routerLink={<Link to="/profileuser/productappraisal" />}> Penilaian </MenuItem>
          </SubMenu>
          <MenuItem routerLink={<Link to="/" />} icon={<FaRegEdit />}> Keluar </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 40 }}>
        <div className="sidebar-button">
          {broken && (
            <button type="submit" className="sb-button" onClick={() => toggleSidebar()}> <FaThList /> </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default SideBar;
