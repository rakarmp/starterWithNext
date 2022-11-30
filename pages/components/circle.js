import { Avatar, AvatarBadge, AvatarGroup, Flex, Text } from "@chakra-ui/react";
import Header from "./authHandle";
import { useSession } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";

export default function Circle() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={8}>
      {loading && <div>Loading...</div>}
      {session && (
        <>
          <h1>Welcome, {session.user.name ?? session.user.email}! </h1>
          <Avatar name="user" src={session.user.image}>
            <AvatarBadge borderColor="maroon" bg="tomato" boxSize="1.25em" />
          </Avatar>
        </>
      )}
      {!session && (
        <>
          <p>Please log in to continue</p>
          <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />
        </>
      )}
      <Header />
      <Text m={2}>Starter NextJS + Chakra UI</Text>
      <AvatarGroup size="md" max={4}>
        <Avatar
          name="Dan Abrahmov"
          src="https://avatars.githubusercontent.com/u/83684256?v=4"
        >
          <AvatarBadge
            borderColor="papayawhip"
            boxSize="1.25em"
            bg="green.500"
          />
        </Avatar>
        <Avatar
          name="Kola Tioluwani"
          src="https://avatars.githubusercontent.com/in/29110?s=64&v=4"
        >
          <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1.25em" />
        </Avatar>
      </AvatarGroup>
    </Flex>
  );
}
