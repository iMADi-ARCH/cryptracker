import { FC, HTMLAttributes } from "react";
import { Url } from "url";
import Button from "./Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialsProps extends HTMLAttributes<HTMLDivElement> {
    socials: { name: string; icon: React.ReactNode; href: string | Url }[];
}

const Socials: FC<SocialsProps> = ({ socials, className, ...props }) => {
    return (
        <span className={cn(`flex flex-wrap gap-0`, className)}>
            {socials.map((social, key) => (
                <Link key={key} aria-label={social.name} href={social.href}>
                    <Button className="text-4xl" variant={"secondary"}>
                        {social.icon}
                    </Button>
                </Link>
            ))}
        </span>
    );
};

export default Socials;
