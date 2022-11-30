import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";

export default function Header() {
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  const { data: session } = useSession();

  return (
    <div className="header">
      {/* <Link href="/">
        <a className="logo">AppLogo</a>
      </Link> */}
      {session && (
        <Button colorScheme="red" size="xs" m={2}>
          <a href="#" onClick={handleSignout}>
            SIGN OUT
          </a>
        </Button>
      )}
      {!session && (
        <Button colorScheme="teal" size="xs" m={2}>
          <a href="#" onClick={handleSignin}>
            SIGN IN
          </a>
        </Button>
      )}
    </div>
  );
}
