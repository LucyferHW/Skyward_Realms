/**
 * @file License.tsx
 * @description Seite "Lizenzen" mit Platzhalter-Lizenzen in wiederverwendbaren Karten.
 */

import React, { useState } from "react";

/**
 * @interface License
 * @description Datenmodell für eine Lizenzkarte.
 */
interface License {
  /** Eindeutige ID */
  id: string;
  /** Titel der Lizenz */
  title: string;
  /** Kurze Zusammenfassung / Auszug */
  short: string;
  /** Volltext oder ausführlicher Platzhaltertext */
  full: string;
}

/**
 * @component LicenseCard
 * @description Zeigt eine einzelne Lizenz als Karte mit Kurztext und ausklappbarem Volltext.
 * @param {{license: License}} props - Die anzuzeigende Lizenzdaten.
 * @returns {JSX.Element}
 */
function LicenseCard({ license }: { license: License }): JSX.Element {
  const [open, setOpen] = useState(false);

  /**
   * @function toggleOpen
   * @description Schaltet den Ansichtszustand der Lizenz (auf/zu).
   */
  function toggleOpen() {
    setOpen((s) => !s);
  }

  return (
    <article className="rounded-lg border border-slate-700 bg-slate-900/60 p-5 shadow-sm">
      <header className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{license.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{license.short}</p>
        </div>

        <div className="ml-4 flex-shrink-0">
          <button
            onClick={toggleOpen}
            className="rounded-md bg-transparent border border-slate-600 px-3 py-1 text-sm text-slate-100 hover:bg-slate-800/50"
            aria-expanded={open}
            aria-controls={`license-${license.id}`}
          >
            {open ? "Schließen" : "Volltext"}
          </button>
        </div>
      </header>

      {open && (
        <div
          id={`license-${license.id}`}
          className="mt-4 max-h-72 overflow-auto text-sm leading-relaxed text-slate-200"
        >
          <pre className="whitespace-pre-wrap">{license.full}</pre>
        </div>
      )}
    </article>
  );
}

/**
 * @component LicensePage
 * @description Seite mit mehreren Platzhalter-Lizenzen. Nutzt LicenseCard zur Darstellung.
 * @returns {JSX.Element}
 */
export default function LicensePage(): JSX.Element {
  const licenses: License[] = [
    {
      id: "mit",
      title: "MIT License",
      short: "Kurz: Sehr permissive Open‑Source‑Lizenz. Nutzung, Kopie und Modifikation erlaubt.",
      full:
        "MIT License\n\nCopyright (c) [Jahr] [Inhaber]\n\nHier steht ein kurzer Platzhalter‑Volltext der MIT License. " +
        "Diese Version ist nur ein Platzhalter und ersetzt keine rechtlich verbindliche Lizenzdatei. " +
        "Bitte fügen Sie bei Bedarf die originale MIT License ein: https://opensource.org/licenses/MIT\n",
    },
    {
      id: "apache",
      title: "Apache License 2.0",
      short: "Kurz: Erlaubt Nutzung und Verteilung, enthält Patentklauseln und Hinweis‑Pflichten.",
      full:
        "Apache License 2.0 \n\nCopyright (c) [Jahr] [Inhaber]\n\nDies ist ein Platzhaltertext " +
        "für die Apache License 2.0. Für eine rechtsverbindliche Version nutzen Sie die offizielle Quelle: https://www.apache.org/licenses/LICENSE-2.0\n",
    },
    {
      id: "gplv3",
      title: "GPLv3",
      short: "Kurz: Copyleft‑Lizenz, Änderungen müssen unter gleichen Bedingungen veröffentlicht werden.",
      full:
        "GNU General Public License v3\n\nCopyright (c) [Jahr] [Inhaber]\n\nHinweis: Dies ist nur ein Platzhalter. " +
        "Die vollständige GPLv3 finden Sie unter: https://www.gnu.org/licenses/gpl-3.0.de.html\n",
    },
    {
      id: "cc-by-sa",
      title: "Creative Commons BY‑SA 4.0",
      short: "Kurz: Teilen und Bearbeiten erlaubt, Namensnennung erforderlich, Weitergabe unter gleichen Bedingungen.",
      full:
        "Creative Commons Attribution‑ShareAlike 4.0\n\nDieses Dokument ist ein Platzhalter. " +
        "Für die vollständigen Lizenzbedingungen siehe: https://creativecommons.org/licenses/by-sa/4.0/legalcode.de\n",
    },
    {
      id: "proprietary",
      title: "Proprietäre Beispiel‑Lizenz",
      short: "Kurz: Beispiel für eine eingeschränkte, proprietäre Lizenz mit Nutzungsbedingungen.",
      full:
        "Proprietäre Beispiel‑Lizenz\n\n© [Jahr] [Firma]\n\nDies ist ein Beispiel für eine proprietäre Lizenz, " +
        "die bestimmte Nutzungsrechte einräumt und andere einschränkt. Fügen Sie hier ihren konkreten Lizenztext ein.\n",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-50">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50">Lizenzen</h1>
          <p className="mt-2 text-sm text-slate-300">
            Platzhalter‑Lizenzen zur Ansicht. Ersetzen Sie die Texte durch Ihre tatsächlichen Lizenztexte.
          </p>
        </header>

        <main className="grid gap-4 sm:grid-cols-2">
          {licenses.map((lic) => (
            <LicenseCard key={lic.id} license={lic} />
          ))}
        </main>
      </div>
    </div>
  );
}