import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar, Menu, MenuItem, SubMenu, useProSidebar,
} from 'react-pro-sidebar';
import {
  FaUserAlt, FaShoppingCart, FaBell, FaStore, FaThList,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';

function SideBar() {
  const { toggleSidebar, broken } = useProSidebar();
  const { isSeller } = useSelector((state) => state.user.currentUser);

  return (
    <div className="sidebar">
      <Sidebar customBreakPoint="800px">
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
          {
            isSeller ? (
              <SubMenu icon={<FaStore />} label="Toko Saya">
                <MenuItem routerLink={<Link to="/profileadmin/addproduct" />}> Tambahkan produk </MenuItem>
                <MenuItem routerLink={<Link to="/profileadmin/adminproductlist" />}> Daftar produk </MenuItem>
              </SubMenu>

            ) : (
              null
            )
          }
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
