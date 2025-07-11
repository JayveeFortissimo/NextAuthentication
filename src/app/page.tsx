import Outlets from "@/components/outlets";
import SignIn from "./auth/signIn/page";
export default function Home() {
  return (
   <>
   <Outlets>
     <SignIn />
   </Outlets>
   </>
  );
}
