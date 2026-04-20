import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

type Blog = {
  id: string;
  title: string;
  desc: string;
  image: string;
  date: string;
};

const truncate = (text: string, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
};

const formatDate = (value: string) => {
  if (!value) return "Unknown date";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Unknown date";

  return date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsQuery = query(
          collection(db, "blogs"),
          orderBy("date", "desc"),
        );
        const snapshot = await getDocs(blogsQuery);
        const fetchedBlogs = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: (data.title as string) ?? "Untitled",
            desc: (data.desc as string) ?? (data.description as string) ?? "",
            image: (data.image as string) ?? (data.imageUrl as string) ?? "",
            date: (data.date as string) ?? "",
          };
        });

        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            Blog Collection
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Latest Posts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore recent blog entries with featured images, summaries, and
            publish dates.
          </p>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-8 py-16 text-center shadow-sm">
            <p className="text-slate-600">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center shadow-sm">
            <p className="text-slate-600">
              No blogs are available yet. Please check back later.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={
                      blog.image ||
                      "https://via.placeholder.com/800x600?text=No+Image"
                    }
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-slate-900/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-100 shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="space-y-4 px-6 py-7 sm:px-7 sm:py-8">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span>{formatDate(blog.date)}</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                      Blog
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 transition duration-300 group-hover:text-slate-800">
                    {blog.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {truncate(blog.desc, 100)}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-slate-900">
                      Read More
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-700"
                    >
                      <span>View</span>
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10 10.293 6.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
