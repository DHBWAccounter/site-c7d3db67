import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              The Bitcoin Association Switzerland is committed to protecting your privacy. This privacy policy explains how we collect, use, and safeguard your personal information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}