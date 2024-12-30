import BlogCard from "@/components/blogCard";
import { client } from "@/sanity/lib/client"; 

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
    summary, title, image,
    "slug": slug.current
  }`;

  const posts:Post[] = await client.fetch(query);
  // console.log(posts);

  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl">
        Most Recent Blogs
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}
