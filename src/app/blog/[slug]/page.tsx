import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/components/CustomComponent";

export default async function Page({ params }: { params: { slug: string } }) {
  const query = `*[_type == 'post' && slug.current == $slug]{
    title, summary, image, content, author->{bio, image, name}
  }`;

  // Fetch the data directly in the component
  const post = await client.fetch(query, { slug: params.slug });

  if (!post.length) {
    return <div>Post not found</div>;
  }

  const blogPost = post[0];

  return (
    <article className="mt-12 mb-24 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-y-8">
      <h1 className="text-2xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light text-center">
        {blogPost.title}
      </h1>
      <Image
        src={urlFor(blogPost.image).url()}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded mx-auto"
      />
      <section >
        <h2 className="text-base xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary of the Blog
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {blogPost.summary}
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start justify-center text-center sm:text-left">
        <Image
          src={urlFor(blogPost.author.image).url()}
          width={200}
          height={200}
          alt="blogcreator"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24 mx-auto"
        />
    <div className="p-4 bg-white dark:bg-dark/80 rounded-lg shadow-md shadow-gray-300 dark:shadow-black/80 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-black dark:text-light">
          {blogPost.author.name}
         </h3>
           <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {blogPost.author.bio}
           </p>
    </div>
      </section>
      <div className="text-lg leading-normal text-black dark:text-white">
        <PortableText value={blogPost.content} components={components} />
      </div>
    </article>
  );
}
