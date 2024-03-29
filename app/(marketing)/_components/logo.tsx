import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";


const font = Poppins({ 
    subsets: ["latin"], 
    weight: ["400","600"] 
});

export const Logo = () => {
    return(
        <div className="hidden md:flex items-center gap-x-2">
            <Image 
                src="/letter-h.png"
                alt="Logo"
                width="40"
                height="40"
                className="dark:hidden"
            />
            <Image 
                src="/letter-h-dark.png"
                alt="Logo"
                width="40"
                height="40"
                className="hidden dark:block"
            />
            <p className={cn("font-semibold", font.className)}>
                Horizon
            </p>
        </div>
    )
}