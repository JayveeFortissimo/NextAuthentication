import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center gap-6">
       <h1 className="text-4xl">Hello, Welcome to my page</h1>
       <Button>Sign Out</Button>
    </div>
  );
};

export default page;
