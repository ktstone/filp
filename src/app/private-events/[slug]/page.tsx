import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VenueDetailPage } from "@/components/venue-detail-page";
import { venues, getVenueBySlug } from "@/lib/venues";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return venues.map((venue) => ({ slug: venue.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);
  if (!venue) return {};

  return {
    title: `${venue.name} — Private Events`,
    description: `${venue.description.slice(0, 155)}...`,
    alternates: { canonical: `${SITE_URL}/private-events/${slug}` },
  };
}

export default async function VenueDetailRoute({ params }: Props) {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) notFound();

  return (
    <>
      <Header />
      <main id="main-content">
        <VenueDetailPage venue={venue} />
      </main>
      <Footer />
    </>
  );
}
