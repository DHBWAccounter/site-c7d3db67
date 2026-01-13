import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

const meetups = [
  { name: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/" },
  { name: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva" },
  { name: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/" },
  { name: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/" },
  { name: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/" },
];

export default function MeetupsEventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Meetups & Events
          </h1>

          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Join our community at one of our regular meetups across Switzerland. Connect with fellow Bitcoin enthusiasts, learn from experts, and participate in discussions about the future of decentralized finance.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Regular Meetups</h2>
            <ul className="space-y-4">
              {meetups.map((meetup) => (
                <li key={meetup.name}>
                  <Link
                    href={meetup.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bitcoin-orange hover:underline text-lg"
                  >
                    {meetup.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Special Events</h2>
            <p className="text-gray-700 mb-4">
              Check out our{" "}
              <Link href="/roadshow-2025" className="text-bitcoin-orange hover:underline">
                Roadshow 2025
              </Link>{" "}
              for upcoming special events across Switzerland.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}