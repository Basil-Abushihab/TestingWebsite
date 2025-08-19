import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ProfileCard } from "./ProfileCard";
import { LogOut, User } from "lucide-react";
import { Separator } from "../ui/separator";
import type { ReactElement } from "react";

export type ProfileOption = {
  label: string;
  icon: ReactElement;
};

const profileOptionsList: ProfileOption[] = [
  { icon: <User size="20px" />, label: "Your Profile" },
  { icon: <LogOut size="20px" />, label: "Logout" },
];

type ProfileOptionsProps = React.ComponentProps<"div"> & {
  contentClassName?: string;
  onSelect?: (option: ProfileOption) => void;
};

export const ProfileOptions = ({
  className,
  contentClassName,
  onSelect,
}: ProfileOptionsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="outline-0 border-0" aria-label="Open profile menu">
          <ProfileCard className={className} />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-max bg-sub-theme border-transparent" align="start">
        <div className={cn("flex flex-col space-y-2", contentClassName)}>
          {profileOptionsList.map((option, idx) => (
            <div key={option.label}>
              <button
                type="button"
                onClick={() => onSelect?.(option)}
                className="flex items-center gap-2 font-playpen cursor-pointer px-2 py-1 rounded-md hover:bg-main-theme/10 focus:outline-none focus:ring-2 focus:ring-main-theme"
              >
                {option.icon}
                <span className="text-xs">{option.label}</span>
              </button>

              {idx < profileOptionsList.length - 1 && (
                <Separator className="bg-main-theme my-1" />
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
