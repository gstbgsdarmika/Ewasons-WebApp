import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar, Menu, MenuItem, SubMenu,
} from 'react-pro-sidebar';
import {
  FaUserAlt, FaShoppingCart, FaBell, FaStore, FaRegEdit,
} from 'react-icons/fa';

function SideBar() {
  return (
    <div className="sidebar">
      <Sidebar>
        <Menu>
          <SubMenu icon={<FaUserAlt />} label="Akun Saya">
            <MenuItem routerLink={<Link to="/profileadmin" />}> Profil </MenuItem>
            <MenuItem routerLink={<Link to="/profileadmin/address" />}> Alamat </MenuItem>
            <MenuItem routerLink={<Link to="/profileadmin/changepassword" />}> Ubah Password </MenuItem>
          </SubMenu>
          <MenuItem icon={<FaShoppingCart />}> Pesanan Saya </MenuItem>
          <SubMenu icon={<FaBell />} label="Notifikasi">
            <MenuItem routerLink={<Link to="/profileadmin/productstate" />}> Status Pesanan </MenuItem>
            <MenuItem routerLink={<Link to="/profileadmin/promo" />}> Promo EwaSons </MenuItem>
            <MenuItem routerLink={<Link to="/profileadmin/productappraisal" />}> Penilaian </MenuItem>
          </SubMenu>
          <SubMenu icon={<FaStore />} label="Toko Saya">
            <MenuItem routerLink={<Link to="/profileadmin/addproduct" />}> Tambahkan produk </MenuItem>
            <MenuItem routerLink={<Link to="/profileadmin/adminproductlist" />}> Daftar produk </MenuItem>
          </SubMenu>
          <MenuItem routerLink={<Link to="/" />} icon={<FaRegEdit />}> Keluar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
