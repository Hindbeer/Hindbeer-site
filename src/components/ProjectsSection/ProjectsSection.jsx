import "./ProjectsSection.css";

import Post from "../Post/Post";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [posts, setPosts] = useState([]);
  async function fetchPosts() {
    const response = await fetch("http://127.0.0.1:8000/api/post/view/");
    const posts = await response.json();
    setPosts(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section class="projects-section">
      {posts.map((post) => (
        <Post
          title={post.title}
          description={post.description}
          links={post.links}
        />
      ))}
    </section>
  );
}
