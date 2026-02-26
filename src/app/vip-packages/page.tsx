import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VipPackagesPage } from "@/components/vip-packages-page";

export const metadata = {
  title: "VIP Packages | Friends In Low Places",
  description:
    "Bachelor and bachelorette party packages at Friends In Low Places on Broadway in Nashville. Live music, cold drinks, and VIP treatment for your celebration.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <VipPackagesPage />
      </main>
      <Footer />
    </>
  );
}
