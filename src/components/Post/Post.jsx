import "./Post.css";

export default function ({ title, description, links }) {
  function handleClick() {
    return (location.href = { links });
  }

  return (
    <div class="post">
      <a href={links} target="_blank">
        <div class="post-info">
          <strong class="post-title">{title}</strong>
          <p class="post-description">{description}</p>
        </div>
      </a>
    </div>
  );
}
