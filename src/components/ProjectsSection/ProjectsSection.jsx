import "./ProjectsSection.css";

import Post from "../Post/Post";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [posts, setPosts] = useState([]);
  async function fetchPosts() {
    const response = await fetch(
      "https://django-hindbeer-api.onrender.com/api/post/view/"
    );
    const posts = await response.json();
    setPosts(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section class="projects-section">
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </section>
  );
}
