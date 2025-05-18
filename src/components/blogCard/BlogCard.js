import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <div>
            <a href={blog.url} target="_" class="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
