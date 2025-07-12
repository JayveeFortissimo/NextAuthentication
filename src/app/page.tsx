import Outlets from "@/components/outlets";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Outlets>
        <div className="min-h-[80vh] flex flex-col justify-center items-center gap-5">
          <h1 className="text-6xl text-center">
            Atuhentication <AuroraText>Practice</AuroraText>
          </h1>
          <p className="text-center text-2xl">
            My first auth practice with better auth
          </p>
          <Button asChild className="h-[3rem] w-[7rem] cursor-pointer mt-4">
            <Link href="/auth/signUp"> Sign Up</Link>
          </Button>
        </div>
      </Outlets>
    </>
  );
}
