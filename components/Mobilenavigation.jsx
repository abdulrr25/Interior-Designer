import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nav from "./Nav";
import Logo from "./Logo";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const Mobilenavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center  justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col  items-center gap-y-6"
              linkStyles="text-1xl hover:underline font-semibold"
              underlineStyles=""
              onLinkClick={handleClose} // Pass handleClose to Nav
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Mobilenavigation;
