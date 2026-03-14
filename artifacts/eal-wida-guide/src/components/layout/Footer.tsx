import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 text-center rounded-t-3xl mt-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
          <span className="font-display font-bold text-xl text-white">EAL Family Guide</span>
        </div>
        <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg">
          Dedicated to helping families understand and support their child's incredible journey of learning English.
        </p>
        <div className="h-px w-full bg-slate-800 mb-8" />
        <p className="text-xs text-slate-500">
          This guide is an informational tool and is not officially affiliated with the WIDA Consortium.
        </p>
      </div>
    </footer>
  );
}
