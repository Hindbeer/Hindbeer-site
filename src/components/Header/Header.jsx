import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.css";
import logo from "/logo.svg";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran"
      >
        <img class="logo" src={logo} alt="logo" />
      </a>

      <Button
        class="header-item"
        title={"main"}
        onClick={() => {
          navigate("/");
        }}
      ></Button>

      <Button
        class="header-item"
        title={"projects"}
        onClick={() => {
          navigate("/projects");
        }}
      ></Button>
    </header>
  );
}
