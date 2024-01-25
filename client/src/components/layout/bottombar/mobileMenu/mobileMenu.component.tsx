import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";
import { Button } from "../../../ui/button";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button className=" ml-[4vw]" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className=" h-[20rem]">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit"> Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
