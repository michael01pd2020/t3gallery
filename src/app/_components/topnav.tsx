import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";


export default function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between p-4 border-b border-gray-800 text-xl font-bold text-white">
        <div> Gallery </div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }