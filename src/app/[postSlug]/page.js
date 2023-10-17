import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";

async function BlogPost({ params }) {
  const blog = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero {...blog.frontmatter} />
      <div className={styles.page}>
        <MDXRemote source={blog.content} />
      </div>
    </article>
  );
}

export default BlogPost;
