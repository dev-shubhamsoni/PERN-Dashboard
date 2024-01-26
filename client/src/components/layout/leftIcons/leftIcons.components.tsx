import { LinkedinIcon, FileTextIcon, MailIcon } from "lucide-react";
import { GitHub } from "@mui/icons-material";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const LeftIcons = () => {
  return (
    <div className=" hidden sm:flex w-[5vw] rounded-2xl  flex-col justify-center items-center gap-5">
      <a href="https://www.linkedin.com/in/dev-shubhamsoni" target="_blank" rel="noopener noreferrer">
      <div className="bg-white flex justify-center items-center w-[3rem] h-[3rem] rounded-full">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <LinkedinIcon  className="text-[#0A66C2]  " />
            </TooltipTrigger>
            <TooltipContent>
              <p>Go to LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      </a> 

      <a href="https://github.com/dev-shubhamsoni" target="_blank" rel="noopener noreferrer">
      <div className="bg-white flex justify-center items-center w-[3rem] h-[3rem] rounded-full">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <GitHub />
            </TooltipTrigger>
            <TooltipContent>
              <p>Link for this project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      </a>

      <a href="https://drive.google.com/drive/folders/1tD4GPmeLbnNIpZjJkPQiVRCiQhlBIlke?usp=sharing" target="_blank" rel="noopener noreferrer">
      <div className="bg-white flex justify-center items-center w-[3rem] h-[3rem] rounded-full">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FileTextIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Download Resume</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      </a>

      <a href="mailto:dev.shubhamsoni@gmail.com">
      <div className="bg-white flex justify-center items-center w-[3rem] h-[3rem] rounded-full">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <MailIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Email me!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      </a>
    </div>
  );
};

export default LeftIcons;
