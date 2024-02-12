import img from "/3x.gif";
import "./NotFoundSection.css";

export default function NotFoundSection() {
  return (
    <section class="not-found-section">
      <img class="not-found-img" src={img} alt="img" />
      <h1 class="not-found-description">404 not found</h1>
    </section>
  );
}
