import mainImage from "/peepoChat.gif";
import "./MainSection.css";

export default function MainSection() {
  return (
    <section class="main-section">
      <img class="main-image" src={mainImage} alt="peepoChat-emote" />
      <p class="main-description">
        Hi all, I'm{" "}
        <a
          class="main-link"
          href="https://www.youtube.com/channel/UCOHXj6f2za331eQi6ycUjcw"
          target="_blank"
        >
          Hindbeer
        </a>
        ! <br />
        Sometimes I write something interesting <br />
        <span>(It's me)</span>
      </p>
    </section>
  );
}
