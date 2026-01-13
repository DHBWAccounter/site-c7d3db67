import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

interface RoadshowEvent {
  month: string;
  day: string;
  time: string;
  title: string;
  date: string;
  timeRange: string;
  location?: string;
  mapLink?: string;
  description: string;
  signupLink?: string;
  image?: string;
  slug: string;
}

const events: RoadshowEvent[] = [
  {
    month: "Sept",
    day: "21",
    time: "6:30 pm",
    title: "BAS Roadshow – Basel",
    date: "Sunday 21 September 2025",
    timeRange: "6:30 pm - 10:30 pm",
    location: "Lausanne",
    mapLink: "http://maps.google.com/?q=%20Lausanne",
    description: "The Bitcoin Association Switzerland invites you: Roadshow in Basel on September, 21, 2025",
    signupLink: "https://luma.com/7pewjjp3",
    slug: "bas-roadshow-basel",
  },
  {
    month: "Mar",
    day: "21",
    time: "6:30 pm",
    title: "BAS Roadshow Lake Zurich",
    date: "Friday 21 March 2025",
    timeRange: "6:30 pm - 11:00 pm",
    description: "The Roadshow is coming to Lake Zurich! The Bitcoin Association Switzerland invites you to the next BAS Roadshow – this time on a boat in Rapperswil on March 21, 2025, starting at 6:30 PM.",
    signupLink: "https://lu.ma/pa1cmg9y",
    slug: "bas-roadshow-lake-zurich",
  },
  {
    month: "Feb",
    day: "21",
    time: "6:00 pm",
    title: "BAS Roadshow – Lausanne",
    date: "Friday 21 February 2025",
    timeRange: "6:00 pm - 11:00 pm",
    location: "Lausanne",
    mapLink: "http://maps.google.com/?q=%20Lausanne",
    description: "The Bitcoin Association Switzerland invites you: Roadshow in Lausanne on February 21, 2025. The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the vibrant city of Lausanne!",
    signupLink: "https://lu.ma/t5cz4fos",
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/6bb0f5c0-1021-4992-9b30-032a5cd98c92/BAS+Roadshow+2025.jpg",
    slug: "bas-roadshow-lausanne",
  },
  {
    month: "Jan",
    day: "21",
    time: "6:00 pm",
    title: "BAS Roadshow – Bern",
    date: "Tuesday 21 January 2025",
    timeRange: "6:00 pm - 8:00 pm",
    description: "The Bitcoin Association Switzerland invites you: Roadshow in Bern on January, 21, 2025. The Bitcoin Association Switzerland is launching its first official Roadshow 2025, and the first stop will take place in the capital - Bern!",
    signupLink: "https://luma.com/8tsyroom",
    slug: "bas-roadshow-bern",
  },
];

export default function RoadshowPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="border-t-2 border-gray-200 mb-12" />

          <div className="space-y-16">
            {events.map((event) => (
              <article key={event.slug} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-sm text-gray-500 uppercase">{event.month}</div>
                  <div className="text-3xl font-light text-gray-900">{event.day}</div>
                  <div className="text-xs text-gray-500">{event.time}</div>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                    <Link
                      href={`/roadshow-2025/${event.slug}`}
                      className="hover:text-bitcoin-orange transition-colors"
                    >
                      {event.title}
                    </Link>
                  </h2>

                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <p>{event.date}</p>
                    <p>{event.timeRange}</p>
                    {event.location && (
                      <p>
                        {event.location}{" "}
                        {event.mapLink && (
                          <Link
                            href={event.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-bitcoin-orange hover:underline"
                          >
                            (map)
                          </Link>
                        )}
                      </p>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">{event.description}</p>

                  {event.signupLink && (
                    <p className="mb-4">
                      <strong>Sign up for the roadshow event</strong>{" "}
                      <Link
                        href={event.signupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bitcoin-orange hover:underline font-medium"
                      >
                        here
                      </Link>
                    </p>
                  )}

                  <p className="text-gray-700 mb-4">
                    <strong>Best regards,</strong>
                    <br />
                    The BAS Board
                  </p>

                  {event.image && (
                    <div className="relative aspect-video w-full max-w-md mb-4">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}

                  <Link
                    href={`/roadshow-2025/${event.slug}`}
                    className="text-gray-900 hover:text-bitcoin-orange transition-colors font-medium"
                  >
                    View Event →
                  </Link>

                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span>0 Likes</span>
                    <button className="hover:text-bitcoin-orange transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}