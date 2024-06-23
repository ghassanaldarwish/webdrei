import { Link } from "@/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import navbarData from "./data";
import { useTranslations } from "next-intl";

const DesktopNavbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className=" items-center hidden lg:flex gap-4">
      {navbarData.map((item: any, i: number) =>
        item?.type === "button" ? (
          <Link
            key={item.name}
            className={cn(buttonVariants({ variant: item.variant }))}
            href={item.href}
          >
            {t(`${item.name}`)}
          </Link>
        ) : (
          <div key={item.name} className="flex items-center ">
            <Link
              className={cn(buttonVariants({ variant: "ghost" }))}
              href={item.href}
            >
              {t(`${item.name}`)}
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default DesktopNavbar;
