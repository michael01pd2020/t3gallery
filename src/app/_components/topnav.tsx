import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "./upload-button";

export function TopNav() {
    return (
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/50 border-b border-gray-800/50">
        <div className="container mx-auto flex w-full items-center justify-between p-4 text-xl font-semibold">
          <div>Gallery</div>
          
          <div className="flex flex-row gap-4 items-center">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UploadButton />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    );
  }