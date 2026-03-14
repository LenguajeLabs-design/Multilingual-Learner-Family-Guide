export function Footer({ t }: { t: any }) {
  return (
    <footer className="bg-slate-100 py-8 px-4 mt-auto border-t border-slate-200 text-center text-sm text-slate-500 print-only:mt-8 print-only:bg-white print-only:border-t-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
        <p className="max-w-2xl text-balance">
          {t.disclaimer}
        </p>
      </div>
    </footer>
  );
}