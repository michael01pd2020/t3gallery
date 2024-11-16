import { db } from "~/server/db";
import { SignedOut, SignedIn } from "@clerk/nextjs";
export const dynamic = "force-dynamic";
import { DeleteButton } from "../app/_components/delete-button";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="container mx-auto p-8 rounded-2xl backdrop-blur-md bg-white/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="group relative aspect-square overflow-hidden rounded-xl bg-gray-800/50 transition-all hover:scale-105 hover:shadow-xl"
          >
            <img 
              src={image.url} 
              alt={image.name}
              className="h-full w-full object-cover"
            />
            <DeleteButton imageId={image.id} />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full transition-transform group-hover:translate-y-0">
              <p className="text-white truncate">{image.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}