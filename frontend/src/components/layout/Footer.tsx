import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/pfl-logo.png"
                alt="Phones Fair Lebanon"
                className="h-14 w-auto"
              />

              <div>
                <h3 className="text-lg font-bold tracking-wide">
                  PHONES FAIR
                </h3>

                <p className="text-sm uppercase tracking-[0.2em] text-red-600">
                  Lebanon
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-slate-600">
              Buy Smart. Sell Fair.
              <br />
              Lebanon's trusted marketplace for buying and selling smartphones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-bold">Quick Links</h4>

            <div className="flex flex-col gap-3 text-slate-600">
              <Link to="/" className="hover:text-red-600">
                Home
              </Link>

              <Link to="/browse" className="hover:text-red-600">
                Browse Phones
              </Link>

              <Link to="/sell" className="hover:text-red-600">
                Sell Phone
              </Link>

              <Link to="/login" className="hover:text-red-600">
                Sign In
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-bold">Contact</h4>

            <div className="space-y-4 text-slate-600">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@phonesfairlb.com</span>
              </div>

              <div className="mt-6 flex gap-4">



              </div>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © 2026 Phones Fair Lebanon. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;