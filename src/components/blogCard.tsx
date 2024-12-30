import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <section className="flex flex-col justify-between h-[480px] sm:h-[520px] lg:h-[580px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section */}
      <div className="relative w-full h-56 sm:h-64 lg:h-72 flex-1">
        <Image
          src={urlFor(post.image).url()} // Use `urlFor` to get the image URL.
          alt="Blog Image" // Dynamic alt text for better accessibility.
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-y-4 p-4 sm:p-6 lg:p-8">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {post.title}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-dark/70 dark:text-light/70 line-clamp-3">
          {post.summary}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${post.slug}`}
          aria-label={`Read more about ${post.title}`} // Better accessibility.
          className="block px-4 py-2 sm:py-3 lg:py-4 bg-yellow-500 text-black text-center rounded text-dark font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
