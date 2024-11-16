import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ _req }) => {  // Prefix with underscore
      const user = await auth();
      if (!user || !user.userId) throw new Error("Unauthorized");  // Use Error object
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      if (!metadata.userId) throw new Error("User ID is required");  // Use Error object
      
      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      });
      
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;