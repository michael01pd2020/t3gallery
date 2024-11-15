import Link from "next/link";
import { db } from "~/server/db";


const mockUrls = [
  "https://utfs.io/f/cu6ozZ7vgAbCCTG5RYeGJg5IcmotAeRTlV6KHBNZY8s0p9kb",
  "https://utfs.io/f/cu6ozZ7vgAbC1BQD1dYKWV6EDBY28fk9derM07cZOnxy5hab"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id} className="w-1/2 p-4">
            <p className="text-white">{post.name}</p>
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      <h1>Hello (gallery in progress)</h1>
    </main>
  );
}