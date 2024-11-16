import { createRouteHandler } from "uploadthing/next";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const user = auth();
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }
  
    await db.delete(images).where(eq(images.id, parseInt(params.id)));
    return new Response(null, { status: 204 });
  }
