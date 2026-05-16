/**
 * @file Shop.tsx
 * @description Shop-Übersichtsseite für das Videospiel "Skyward Realms" mit fiktiven Produktpaketen.
 */

/**
 * @description Repräsentiert ein Beispiel-Produkt im Shop.
 */
interface Product {
  id: string
  name: string
  description: string
  price: string
  badge?: string
}

/**
 * @description Shop-Seite mit Produktübersicht im Kartenlayout.
 */
export default function ShopPage() {
  const products: Product[] = [
    {
      id: 'founder-pack',
      name: 'Skyward Founder Pack',
      description:
        'Enthält ein exklusives Rüstungs-Set, ein legendäres Reittier, ein Spielerabzeichen sowie 30 Tage Premium-Battle-Pass.',
      price: '29,99 €',
      badge: 'Empfohlen',
    },
    {
      id: 'cosmetic-bundle',
      name: 'Kosmetik-Bundle „Himmelsflügel“',
      description:
        'Sammlung hochwertiger kosmetischer Flügel-Skins, Emotes und visueller Effekte – reine Optik, kein Pay-to-Win.',
      price: '9,99 €',
      badge: 'Kosmetisch',
    },
    {
      id: 'season-pass',
      name: 'Season Pass: Shattered Skies',
      description:
        'Schaltet exklusive saisonale Herausforderungen, zusätzliche Belohnungsspuren und Story-Missionen für eine aktuelle Saison frei.',
      price: '14,99 €',
      badge: 'Saison-Inhalt',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-50">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
            Skyward Realms – Webshop
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Im Rahmen dieser Übung zeigt der Webshop beispielhafte In-Game-Produkte
            für das Freemium-Spiel „Skyward Realms“. Sämtliche dargestellten Inhalte
            sind fiktiv und dienen nur der Demonstration.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-3" aria-label="Produktübersicht">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <div className="mb-3 h-28 overflow-hidden rounded-lg bg-slate-800">
                <img
                  src="https://pub-cdn.sider.ai/u/U0O9H261LYR/web-coder/6a075d96614ae89139afd087/resource/b9e0d6e3-1df6-41b2-a2de-bfd2dfad794f.jpg"
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-slate-50">
                  {product.name}
                </h2>
                {product.badge ? (
                  <span className="rounded-full bg-sky-500/10 px-2 py-1 text-[11px] font-semibold text-sky-300">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <p className="mb-3 flex-1 text-xs leading-relaxed text-slate-300">
                {product.description}
              </p>
              <p className="mb-3 text-sm font-semibold text-sky-400">
                {product.price} inkl. MwSt.
              </p>
              <button
                type="button"
                className="mt-auto rounded-md bg-sky-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label={`Produkt ${product.name} in den (fiktiven) Warenkorb legen`}
              >
                In den Warenkorb (Demo)
              </button>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}