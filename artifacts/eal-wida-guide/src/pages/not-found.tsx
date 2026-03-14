import { Link } from "wouter";
import { Home, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="w-20 h-20 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h1 className="font-display text-4xl font-extrabold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-lg">
            Oops! It looks like we can't find the page you're looking for. Let's get you back to the guide.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all mt-4"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
