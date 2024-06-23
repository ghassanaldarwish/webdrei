import { Link } from "@/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import navbarData from "./data";
import { useTranslations } from "next-intl";

const DesktopNavbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className=" items-center hidden lg:flex">
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
          <div key={item.name} className="flex items-center">
            <Link className="hover:underline" href={item.href}>
              {t(`${item.name}`)}
            </Link>
            {i !== navbarData?.length - 1 && (
              <div className="px-2 opacity-30">|</div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default DesktopNavbar;
