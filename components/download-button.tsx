import { Download } from "lucide-react";

import { Picture } from "@/types";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  photo: Picture;
  className?: string;
}

const DownloadButton = ({ photo, className }: DownloadButtonProps) => {
  return (
    <a
      href={`${photo.image}?dl=`}
      download
      className={cn(
        "absolute bottom-3 right-3 rounded bg-transparent p-1 hover:bg-primary/80",
        className,
      )}
    >
      <Download size={20} />
    </a>
  );
};

export default DownloadButton;
