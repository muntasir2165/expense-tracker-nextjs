import {
  SignInButton,
  SignIn,
  SignedOut,
  UserButton,
  SignedIn,
} from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
