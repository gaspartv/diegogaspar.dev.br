import { useState } from "react";
import { StyledHeader } from "@/src/styles";
import Link from "next/link";
import { Inter } from "@next/font/google";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const inter = Inter({
  variable: "--inter-font",
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <div className="container">
        <h1 className={inter.variable}>
          <LogoDevIcon color="info" fontSize="large" />
          <p>.br</p>
        </h1>

        <button
          onClick={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true);
          }}
        >
          <MenuOpenIcon
            className={menuOpen ? "menuOpen" : "menuClosed"}
            color="info"
          />
          <MenuIcon
            className={menuOpen ? "menuClosed" : "menuOpen"}
            color="info"
          />
        </button>
        <nav
          className={
            (inter.variable, menuOpen ? "menuNavOpen" : "menuNavClosed")
          }
        >
          <Link href={"/"}>
            <HomeIcon fontSize="small" />
            Início<span> </span>
          </Link>
          <Link href={"/portfolio"}>
            <WorkIcon fontSize="small" />
            Portfólio<span></span>
          </Link>
          <Link href={"/about"}>
            <PermIdentityIcon fontSize="small" />
            Sobre<span></span>
          </Link>
          <Link href={"/contact"}>
            <ContactMailIcon fontSize="small" />
            Contato<span></span>
          </Link>
        </nav>
      </div>
    </StyledHeader>
  );
}
