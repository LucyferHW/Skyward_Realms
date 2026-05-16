/**
 * @file Home.tsx
 * @description Startseite des Aurora Forge Games Webshops mit Navigation zu Inhalten und separater Datenschutz-Seite.
 */

import React from 'react'
import { useNavigate } from 'react-router'

/**
 * @description Repräsentiert ein Kernfeature des Spiels oder Webshops.
 */
interface CoreFeature {
  title: string
  description: string
}

/**
 * @description Kernfunktionen des Spiels "Skyward Realms".
 */
const coreFeatures: CoreFeature[] = [
  {
    title: 'Kooperatives Action-RPG',
    description:
      'Erkunde schwebende Inselwelten gemeinsam mit bis zu drei Freund:innen – mit prozedural generierten Dungeons und dynamischen Events.',
  },
  {
    title: 'Freemium ohne Pay-to-Win',
    description:
      'Das Grundspiel ist kostenlos. Zusätzliche Inhalte sind kosmetisch oder optional und verschaffen keine spielerischen Vorteile.',
  },
  {
    title: 'Barrierefreiheit integriert',
    description:
      'Flexible UI-Skalierung, anpassbare Untertitel, Farbfilter für verschiedene Formen der Farbsehschwäche und frei belegbare Steuerung.',
  },
]

/**
 * @component HomePage
 * @description Startseite mit Hero-Bereich, Produktüberblick, Medien und Hinweisen zu Barrierefreiheit & Rechtsthemen.
 *
 * - Verlinkt die separate Datenschutz-Seite unter "/privacy".
 * - Verwendet intern Smooth-Scrolling für Sektionen, behält aber Navigation für separate Seiten bei.
 *
 * @returns JSX.Element
 */
export default function HomePage(): JSX.Element {
  const navigate = useNavigate()

  /**
   * @description Scrollt zu einem Element mit gegebener ID und setzt Fokus für A11y.
   * @param id - Die Ziel-ID des Elements.
   */
  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      el.setAttribute('tabindex', '-1')
      // Kurzfristig den Fokus setzen, danach tabindex entfernen (falls vorhanden)
      setTimeout(() => {
        el.focus({ preventScroll: true })
        el.removeAttribute('tabindex')
      }, 300)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-sky-500 focus:px-3 focus:py-2 focus:text-xs focus:font-semibold focus:text-slate-950"
      >
        Zum Hauptinhalt springen
      </a>

      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2" aria-label="Aurora Forge Games Logo">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-bold text-slate-950">
              AF
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">Aurora Forge Games</span>
              <span className="text-[11px] text-slate-400">Skyward Realms Webshop</span>
            </div>
          </div>
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex" aria-label="Hauptnavigation">
            <button
              type="button"
              className="transition hover:text-slate-50"
              onClick={() => {
                const el = document.getElementById('about')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Über das Spiel
            </button>
            <button
              type="button"
              className="transition hover:text-slate-50"
              onClick={() => {
                const el = document.getElementById('shop-preview')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Shop
            </button>
            <button
              type="button"
              className="transition hover:text-slate-50"
              onClick={() => {
                const el = document.getElementById('accessibility')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Barrierefreiheit
            </button>
            <button
              type="button"
              className="transition hover:text-slate-50"
              onClick={() => {
                const el = document.getElementById('legal')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Rechtliches
            </button>
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        {/* Hero-Bereich */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Videospiel · Koop-Action-RPG
            </p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Erobere die Lüfte in{' '}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                Skyward Realms
              </span>
              .
            </h1>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-300">
              Skyward Realms ist ein kooperatives Action-RPG, in dem du gemeinsam mit
              Freund:innen schwebende Inseln, uralte Ruinen und dynamische Events erkundest.
              Spiele das Grundspiel kostenlos und schalte auf Wunsch zusätzliche kosmetische
              Inhalte frei.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-md bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label="Zum Shop-Bereich mit Gründerpaketen und kosmetischen Inhalten scrollen"
                onClick={() => {
                  const el = document.getElementById('shop-preview')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Shop anzeigen
              </button>
              <button
                type="button"
                className="rounded-md border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
                aria-label="Mehr über Unternehmen und Marken erfahren"
                onClick={() => {
                  const el = document.getElementById('about')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Über Aurora Forge Games
              </button>
            </div>

          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
            <div className="border-b border-slate-800 bg-slate-900 px-3 py-2 text-[11px] font-medium text-slate-400">
              Vorschau – Gründerpaket
            </div>
            <div className="flex flex-col gap-4 p-4 sm:flex-row">
              <div className="h-32 w-full overflow-hidden rounded-lg bg-slate-800 sm:h-32 sm:w-40">
                <img
                  src="https://pub-cdn.sider.ai/u/U0O9H261LYR/web-coder/6a075d96614ae89139afd087/resource/d9f8b38b-5f40-4162-965a-6656fae5eeb6.jpg"
                  alt="Key Art von Skyward Realms mit schwebenden Inseln am Himmel"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-xs">
                <h2 className="mb-1 text-sm font-semibold text-slate-50">
                  Skyward Realms – Founder Pack
                </h2>
                <p className="mb-2 text-slate-300">
                  Exklusive kosmetische Rüstungen, ein legendäres Reittier und ein
                  saisonaler Battle-Pass, der zusätzliche Belohnungen freischaltet.
                </p>
                <p className="mb-3 text-sm font-semibold text-sky-400">29,99 € inkl. MwSt.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
                    Sofort in-game freischaltbar
                  </span>
                  <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
                    Reine Kosmetik, kein Pay-to-Win
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Über das Spiel & Freemium-Modell */}
        <section
          id="about"
          className="mt-12 grid gap-8 border-t border-slate-800 pt-8 md:grid-cols-2"
          aria-labelledby="about-heading"
        >
          <div>
            <h2 id="about-heading" className="mb-3 text-sm font-semibold tracking-tight text-slate-100">
              Über Skyward Realms & Aurora Forge Games
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-slate-300">
              Aurora Forge Games ist ein unabhängiges Studio mit Sitz in Wien. Unser
              achtköpfiges Team entwickelt kooperative Spiele mit Fokus auf faire
              Monetarisierung, langfristige Betreuung und gute Zugänglichkeit.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Skyward Realms richtet sich an Spieler:innen, die gemeinsame Abenteuer mögen –
              ob auf PC oder Konsole. Fortschritt wird plattformübergreifend synchronisiert,
              damit du jederzeit dort weiterspielen kannst, wo du aufgehört hast.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
              Freemium ohne versteckte Haken
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-slate-100">Grundspiel:</span> Kostenlos
                spielbar mit allen Kernfunktionen.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Shop-Inhalte:</span> Kosmetische
                Skins, Reittiere, Emotes und saisonale Battle-Pässe.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Fairness:</span> Keine
                spielrelevanten Vorteile durch Käufe, alle Inhalte sind langfristig erspielbar.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Transparenz:</span> Alle Preise
                sind klar ausgezeichnet, Lizenz- und Datenschutzinfos findest du gebündelt im
                unteren Seitenbereich.
              </li>
            </ul>
          </div>
        </section>

        {/* Feature-Bereich */}
        <section className="mt-12 border-t border-slate-800 pt-8">
          <h2 className="mb-4 text-sm font-semibold tracking-tight text-slate-100">
            Warum Skyward Realms für unser Start-up geeignet ist
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {coreFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Medien-Bereich */}
        <section className="mt-12 border-t border-slate-800 pt-8" aria-labelledby="media-heading">
          <h2 id="media-heading" className="mb-4 text-sm font-semibold tracking-tight text-slate-100">
            Trailer & Sound von Skyward Realms
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                Gameplay-Trailer (Vorschau)
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-slate-300">
                Ein kurzer Ausschnitt aus dem fiktiven Gameplay-Trailer zeigt Kämpfe auf
                schwebenden Inseln und Koop-Mechaniken. Das Video ist Teil dieser Übung und
                symbolisiert eingebundene Bewegtbild-Inhalte.
              </p>
              <video
                className="aspect-video w-full rounded-lg border border-slate-800 bg-slate-900"
                controls
                aria-label="Gameplay-Trailer zu Skyward Realms"
              >
                <source src="https://cdn.aurora-forge.games/media/skyward-realms-trailer.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Element nicht.
              </video>
            </article>
            <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                Soundtrack-Ausschnitt
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-slate-300">
                Der Soundtrack von Skyward Realms setzt auf orchestrale Themen mit leichten
                Synth-Elementen. Der folgende Ausschnitt steht exemplarisch für eingebundene
                Audioinhalte.
              </p>
              <audio className="w-full" controls aria-label="Musik-Ausschnitt des Skyward Realms Hauptthemas">
                <source src="https://cdn.aurora-forge.games/media/skyward-realms-theme-snippet.mp3" type="audio/mpeg" />
                Ihr Browser unterstützt das Audio-Element nicht.
              </audio>
            </article>
          </div>
        </section>

        {/* Kurzer Hinweisbereich zu Barrierefreiheit & Rechtlichem */}
        <section id="accessibility" className="mt-12 grid gap-6 border-t border-slate-800 pt-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-sm font-semibold tracking-tight text-slate-100">Barrierefreiheit (WCAG 2.2 AA)</h2>
            <p className="mb-2 text-sm leading-relaxed text-slate-300">
              Wir orientieren uns an den Anforderungen der WCAG 2.2 Stufe AA. Dazu gehören
              ausreichende Farbkontraste, sinnvolle Überschriftenstrukturen, Tastaturbedienbarkeit
              und Alternativtexte für wesentliche Inhalte.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Solltest du auf Barrieren stoßen, kannst du uns jederzeit über das Kontaktformular
              oder per E-Mail kontaktieren. Details findest du in der ausführlichen
              Barrierefreiheitserklärung.
            </p>
          </div>
          <div id="legal">
            <h2 className="mb-3 text-sm font-semibold tracking-tight text-slate-100">Rechtliche Informationen & Lizenzen</h2>
            <p className="mb-2 text-sm leading-relaxed text-slate-300">
              Informationen zu Urheberrechten, Marken, Lizenzen und Datenschutz findest du in den
              jeweiligen Abschnitten unserer Impressums-, Lizenz- und Datenschutzseiten.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Bitte beachte, dass diese Texte einen beispielhaften Charakter besitzen und in einem
              echten Projekt durch rechtliche Fachberatung ergänzt oder ersetzt werden sollten.
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-200 hover:border-slate-500"
                onClick={() => {
                  // Der Imprint-Bereich ist auf einer separaten Seite; ggf. zukünftig routen.
                  const el = document.getElementById('imprint')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    // Fallback: navigiere zur Impressumsseite, falls Route vorhanden
                    navigate('/imprint')
                  }
                }}
              >
                Impressum
              </button>
              <button
                type="button"
                className="rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-200 hover:border-slate-500"
                onClick={() => {
                  const el = document.getElementById('license')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    navigate('/license')
                  }
                }}
              >
                Lizenz & Nutzungsbedingungen
              </button>
              <button
                type="button"
                className="rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-200 hover:border-slate-500"
                onClick={() => {
                  // Navigiere zur separaten Datenschutz-Seite
                  navigate('/privacy')
                }}
              >
                Datenschutz
              </button>
            </div>
          </div>
        </section>

        {/* Hinweis: Die separate Datenschutz-Seite wurde nach /privacy ausgelagert. */}
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Aurora Forge Games GmbH, Wien. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="text-xs text-slate-400 hover:text-slate-200"
              onClick={() => {
                const el = document.getElementById('imprint')
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' })
                } else {
                  navigate('/imprint')
                }
              }}
            >
              Impressum (Aurora Forge Games GmbH, Wien)
            </button>
            <button
              type="button"
              className="text-xs text-slate-400 hover:text-slate-200"
              onClick={() => {
                navigate('/privacy')
              }}
            >
              Datenschutz (Skyward Realms Webshop)
            </button>
            <button
              type="button"
              className="text-xs text-slate-400 hover:text-slate-200"
              onClick={() => {
                const el = document.getElementById('license')
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' })
                } else {
                  navigate('/license')
                }
              }}
            >
              Lizenz & Nutzungsbedingungen
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
