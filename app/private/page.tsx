import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function PrivatePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-8">
            <nav className="text-sm text-gray-500 mb-4">
              <span>membership</span>
            </nav>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <Link href="/private" className="text-bitcoin-orange font-medium">
                  Private
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-gray-600 hover:text-bitcoin-orange transition-colors">
                  Corporate
                </Link>
              </li>
              <li>
                <Link href="/our-corporate-members" className="text-gray-600 hover:text-bitcoin-orange transition-colors">
                  Our Corporate Members
                </Link>
              </li>
            </ul>
          </div>

          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            New/Renew Membership (2024 - 2025 edition)
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>How do I renew my membership?</strong> Pay your membership fee to the Bitcoin Association Switzerland&apos;s wallet address:
            </p>

            <p className="bg-gray-100 p-4 rounded-lg font-mono text-sm break-all mb-6">
              bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
            </p>

            <p className="text-gray-700 mb-6">
              Once payment is confirmed on-chain, go to the membership form submission page:
            </p>

            <p className="mb-6">
              <Link
                href="/membership-form"
                className="text-bitcoin-orange hover:underline font-medium"
              >
                https://www.bitcoinassociation.ch/membership-form
              </Link>
            </p>

            <p className="text-gray-700 mb-6">
              Fill out the form in its entirety, entering your Transaction ID and, optionally, your Telegram handle to be added to the BAS members group. If possible, specify how many years of membership (minimum 1) you have paid for. The number of years of membership will be automatically calculated based on the amount of BTC paid.
            </p>

            <p className="text-gray-700 mb-6">
              Within 7 days, we will send you a confirmation that your membership status has been confirmed, or - if we have any doubts - we may ask you to provide additional information.
            </p>

            <p className="text-gray-700 mb-8 font-semibold">
              No membership fees are returned if you fail to provide sufficient information.
            </p>

            <h2 className="text-xl font-medium text-gray-900 mb-4">What&apos;s the membership fee?</h2>

            <p className="text-gray-700 mb-8">
              The annual membership fee is CHF 21, payable in bitcoin on-chain (with secondary layer payment solutions coming soon). If you wish to pay for more than 1 year in one payment, please make a note in the comment section of the membership form.
            </p>

            <h2 className="text-xl font-medium text-gray-900 mb-4">What if I haven&apos;t been a member before?</h2>

            <p className="text-gray-700 mb-8">
              That&apos;s ok, we don&apos;t judge :-) you can follow the same process as outlined above. If we don&apos;t know you, chances are a little higher we ask for additional information.
            </p>

            <h2 className="text-xl font-medium text-gray-900 mb-4">What about corporate members?</h2>

            <p className="text-gray-700 mb-6">
              If you already are a corporate member (with your logo{" "}
              <Link href="/our-corporate-members" className="text-bitcoin-orange hover:underline">
                here
              </Link>
              ) and your membership is expired, you can complete the renewal payment and send us an email application with all the information indicated (Name, TransactionID, number of years paid etc.) at{" "}
              <a href="mailto:info@bitcoinassociation.ch" className="text-bitcoin-orange hover:underline">
                info@bitcoinassociation.ch
              </a>
              , the corporate membership fee is CHF 380.
            </p>

            <p className="text-gray-700 mb-6">
              If you are not a corporate member yet, you can send an application to{" "}
              <a href="mailto:info@bitcoinassociation.ch" className="text-bitcoin-orange hover:underline">
                info@bitcoinassociation.ch
              </a>{" "}
              where you introduce your company and explain how you are connected to the Swiss ecosystem.
            </p>

            <p className="text-gray-700 mb-6">
              You will hear back within 14 days whether you&apos;ve been accepted or not. Once you have received confirmation that you have been accepted, you will need to send the equivalent of at least CHF 380 to the Bitcoin Association Switzerland&apos;s wallet:
            </p>

            <p className="bg-gray-100 p-4 rounded-lg font-mono text-sm break-all mb-6">
              bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
            </p>

            <p className="text-gray-700 mb-6">
              followed by an email to the two addresses mentioned stating your Transaction ID.
            </p>

            <p className="text-gray-700 mb-6">
              Once we confirm receipt of the funds, you can send us the logo to be added to the website.
            </p>

            <p className="text-gray-700">
              The process is also outlined{" "}
              <Link href="/corporate" className="text-bitcoin-orange hover:underline">
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}