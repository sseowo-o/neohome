import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.customer.metadata;
  return { title: t.title, description: t.description };
}

export default async function CustomerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.customer;

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#1a1a2e] text-white text-center">
        <div className="max-w-[1080px] mx-auto px-4">
          <h1 className="text-[40px] font-black mb-4">{t.hero.title}</h1>
          <p className="text-lg text-gray-300">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* User Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1080px] mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">{t.guides.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.guides.items.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-5 py-4 hover:border-[#39d2cc] hover:shadow-md transition-all group"
              >
                <svg className="w-5 h-5 text-[#39d2cc] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm text-gray-700 group-hover:text-[#39d2cc] transition-colors">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-[1080px] mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center">{t.faq.title}</h2>
          <div className="space-y-8">
            {t.faq.categories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-lg font-semibold mb-4 text-[#1a1a2e] border-b-2 border-[#39d2cc] pb-2 inline-block">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <details
                      key={itemIdx}
                      className="group border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors list-none [&::-webkit-details-marker]:hidden">
                        <span className="text-sm font-medium text-gray-800 pr-4">{item.q}</span>
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">{t.form.title}</h2>
          {t.form.notice && (
            <p className="text-sm text-gray-600 text-center mb-8">{t.form.notice}</p>
          )}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.name}</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#39d2cc]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.email}</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#39d2cc]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.subject}</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#39d2cc]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.message}</label>
              <textarea rows={6} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#39d2cc]" />
            </div>
            <button type="submit" className="w-full bg-[#39d2cc] text-white py-3 rounded-lg font-semibold hover:bg-[#2db8b2] transition-colors">
              {t.form.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
