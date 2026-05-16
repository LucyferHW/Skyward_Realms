/**
 * @file Imprint.tsx
 * @description Statische Seite für Impressumsangaben der Aurora Forge Games GmbH.
 */

/**
 * @description Impressumsseite mit beispielhaften, aber konsistenten Unternehmensdaten (Österreich, § 24 Mediengesetz).
 */
export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-50">
      <div className="mx-auto max-w-3xl">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
            Impressum
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Dieses Impressum gilt für den fiktiven Webauftritt des Start-ups „Aurora
            Forge Games GmbH“ und den Webshop für das Videospiel „Skyward Realms“.
            Alle Angaben dienen ausschließlich Übungs- und Demonstrationszwecken.
          </p>
        </header>

        <section className="space-y-5 text-sm leading-relaxed text-slate-200">
          <div>
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Angaben gemäß § 24 Mediengesetz (AT) und vergleichbarer Vorschriften
            </h2>
            <p>
              Aurora Forge Games GmbH
              <br />
              Mariahilfer Straße 100
              <br />
              1060 Wien
              <br />
              Österreich
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Unternehmensgegenstand
            </h2>
            <p>
              Entwicklung, Vertrieb und Betrieb von Computerspielen sowie
              Bereitstellung von Online-Diensten und digitalen Inhalten, insbesondere
              des Videospiels „Skyward Realms“.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Vertretungsberechtigte Geschäftsführung
            </h2>
            <p>
              Geschäftsführung: Lina Hartmann
              <br />
              (fiktive Person, nur zu Übungszwecken)
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Kontakt
            </h2>
            <p>
              Telefon: +43 (0)1 234 56 78
              <br />
              E-Mail: support@aurora-forge.games
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Firmenbuch &amp; Aufsichtsbehörde
            </h2>
            <p>
              Firmenbuchnummer: FN 123456a
              <br />
              Firmenbuchgericht: Handelsgericht Wien
              <br />
              Zuständige Aufsichtsbehörde im medienrechtlichen Sinn:
              {' '}
              Bundeskanzleramt Österreich (fiktiver Bezug für diese Übung)
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer (UID):
              {' '}
              ATU12345678
              {' '}
              (fiktiv)
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Verantwortlichkeit für Inhalte
            </h2>
            <p>
              Inhaltlich verantwortlich im Sinne medienrechtlicher Bestimmungen ist
              die Aurora Forge Games GmbH, vertreten durch die Geschäftsführung.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-sm font-semibold text-slate-100">
              Haftungsausschluss
            </h2>
            <p>
              Diese Website ist Teil einer Lehrveranstaltung bzw. Übung. Es werden
              keine echten Vertragsverhältnisse begründet und es besteht kein
              Anspruch auf Verfügbarkeit der dargestellten Dienste. Verweise auf
              externe Websites (Links) sind rein illustrativ; für deren Inhalte wird
              keine Haftung übernommen.
            </p>
          </div>

          <p className="text-xs text-slate-400">
            Hinweis: Alle genannten Namen, Adressen und Kennnummern sind fiktiv und
            wurden ausschließlich für diese Übung erstellt. In einem realen Projekt
            müssen die Angaben an die tatsächliche Unternehmenssituation und die
            jeweils gültigen rechtlichen Vorgaben angepasst werden.
          </p>
        </section>
      </div>
    </div>
  )
}