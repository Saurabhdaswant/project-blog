import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import BlogSummaryCard from "@/components/BlogSummaryCard/BlogSummaryCard";

async function Home() {
  const blogs = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogs?.map((blog) => {
        return <BlogSummaryCard key={blog.slug} {...blog} />;
      })}
    </div>
  );
}

export default Home;
