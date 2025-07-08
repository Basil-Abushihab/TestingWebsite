import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const ProfileCard = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card className={cn("cursor-pointer border-transparent bg-sub-theme", className)}>
      <CardContent className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="" alt=""></AvatarImage>
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-playpen">Student Name</span>
          </div>
      </CardContent>
    </Card>
  );
};
