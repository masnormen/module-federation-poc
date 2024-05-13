import RemoteTicker from "@/components/PromoAds/RemoteTicker";
import Link from "next/link";
import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="max-w-4xl mx-auto my-8">
      {/* // TODO 3 */}
      <RemoteTicker ssr />

      <nav className="flex justify-between items-center bg-slate-200 p-4 rounded-lg mb-6">
        <Link href="/" className="font-bold text-lg">
          🐮 Tokopedei
        </Link>
        <div className="flex items-center space-x-4">
          <Link className="text-sm font-medium" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium" href="/">
            Products
          </Link>
          <Link
            className="text-sm font-medium px-2 py-1 bg-[#DBEAFE] border border-slate-800 rounded-xl"
            href="/topup-gssp"
          >
            Topup GSSP
          </Link>
          <Link
            className="text-sm font-medium px-2 py-1 bg-[#DBEAFE] border border-slate-800 rounded-xl"
            href="/topup-gip"
          >
            Topup GIP
          </Link>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
}
