import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ProfileCard } from "./ProfileCard";
import { LogOut, User } from "lucide-react";
import { Separator } from "../ui/separator";

export const ProfileOptions = ({
  className,
  contentClassName,
}: React.ComponentProps<"div"> & { contentClassName?: string }) => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <button className="outline-0 border-0">
            <ProfileCard className={className} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-max bg-sub-theme border-transparent"
          align="start"
        >
          <div className={cn("flex flex-col space-y-2", contentClassName)}>
            <div className="flex space-x-2 items-center font-playpen cursor-pointer">
              <User size={"20px"} />
              <span className="text-xs">Your Profile</span>
            </div>
            <Separator className="bg-main-theme" />
            <div className="flex space-x-2 items-center font-playpen cursor-pointer">
              <LogOut size={"20px"} />
              <span className="text-xs">Logout</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
