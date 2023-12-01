import Link from "next/link";
import { Redressed } from "next/font/google";
import { getCategories } from "@/actions/get-categories";
import { MainNav } from "../MainNav";
import { Container } from "../Container";
import { NavbarActions } from "../NavbarActions";

const font = Redressed({ subsets: ["latin"], weight: "400" });

export const revalidate = 0;

export const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-t">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2 mr-4">
            <p className={`${font.className} font-bold text-xl`}>
              Fashion Indiscreta
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
