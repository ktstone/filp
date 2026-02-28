import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VipPackagesPage } from "@/components/vip-packages-page";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "VIP Packages",
  description:
    "Bachelor and bachelorette party packages at Friends In Low Places on Broadway in Nashville. Live music, cold drinks, and VIP treatment for your celebration.",
  alternates: { canonical: `${SITE_URL}/vip-packages` },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <VipPackagesPage />
      </main>
      <Footer />
    </>
  );
}
