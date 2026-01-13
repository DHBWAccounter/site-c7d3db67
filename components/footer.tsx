import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center justify-center">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
              alt="Bitcoin"
              width={60}
              height={60}
              className="opacity-80"
            />
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-bitcoin-orange transition-colors text-sm"
            >
              Meetup
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-bitcoin-orange transition-colors text-sm"
            >
              Bitcoin Lectures
            </Link>
            <Link
              href="https://x.com/bitcoin_ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-bitcoin-orange transition-colors text-sm"
            >
              X
            </Link>
          </div>

          <Link
            href="#header"
            className="text-gray-500 hover:text-bitcoin-orange transition-colors text-sm"
          >
            Back to Top
          </Link>

          <div className="flex items-center space-x-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-bitcoin-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-bitcoin-orange transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}