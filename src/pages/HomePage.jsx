import Header from "../components/Header/Header";
import "../App.css";
import MainSection from "../components/MainSection/MainSection";
import LinksSection from "../components/LinksSection/LinksSection";

export default function HomePage() {
  return (
    <div>
      <head>
        <title>Hindbeer | Home </title>
      </head>

      <Header />
      <MainSection />
      <LinksSection />
    </div>
  );
}
