/**
 * @file Privacy.tsx
 * @description Vollständige Datenschutzseite (DSGVO) mit strukturierten Abschnitten.
 */

import React from "react";

/**
 * @interface SectionProps
 * @description Props für die wiederverwendbare Abschnittskomponente.
 */
interface SectionProps {
  /** ID des Abschnitts für Ankerlinks */
  id: string;
  /** Titel des Abschnitts */
  title: string;
  /** Inhalt des Abschnitts als React.ReactNode */
  children: React.ReactNode;
}

/**
 * @component PrivacySection
 * @description Kleine, wiederverwendbare Komponente zur Darstellung eines Abschnitts der Datenschutzerklärung.
 * @param {SectionProps} props - Eigenschaften des Abschnitts.
 * @returns {JSX.Element}
 */
function PrivacySection({ id, title, children }: SectionProps): JSX.Element {
  return (
    <section id={id} className="mb-6">
      <h3 className="text-sm font-semibold text-slate-100 mb-2">{title}</h3>
      <div className="text-sm text-slate-200">{children}</div>
    </section>
  );
}

/**
 * @component PrivacyPage
 * @description Seite mit vollständiger Datenschutzerklärung gemäß DSGVO für Aurora Forge Games.
 *              Enthält klare Abschnitte, speicherbare Logfile-Dauer, Cookie-Infos, Google Analytics,
 *              Social-Plugins, Newsletter und Nutzerrechte.
 * @returns {JSX.Element}
 */
export default function PrivacyPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-10 text-slate-50">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Datenschutzerklärung</h1>
          <p className="mt-2 text-sm text-slate-300">
            Diese Datenschutzerklärung informiert über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten.
          </p>
        </header>

        <nav className="mb-6 rounded-md bg-slate-800/40 p-3 text-sm text-slate-200">
          <ul className="flex flex-wrap gap-3">
            <li><a className="underline" href="#i-grundlegendes">I. Grundlegendes</a></li>
            <li><a className="underline" href="#ii-verantwortlicher">II. Verantwortlicher</a></li>
            <li><a className="underline" href="#iii-dsb">III. Datenschutzbeauftragter</a></li>
            <li><a className="underline" href="#iv-allgemeines">IV. Allgemeines</a></li>
            <li><a className="underline" href="#v-zugriffsdaten">V. Zugriffsdaten</a></li>
            <li><a className="underline" href="#vi-cookies">VI. Cookies</a></li>
            <li><a className="underline" href="#vii-kontakt">VII. Umgang mit Kontaktdaten</a></li>
            <li><a className="underline" href="#viii-kommentare">VIII. Kommentare</a></li>
            <li><a className="underline" href="#ix-analytics">IX. Google Analytics</a></li>
            <li><a className="underline" href="#x-facebook">X. Facebook-Plugins</a></li>
            <li><a className="underline" href="#xi-newsletter">XI. Newsletter</a></li>
            <li><a className="underline" href="#xii-rechte">XII. Rechte</a></li>
            <li><a className="underline" href="#xiii-widerspruch">XIII. Widerspruch</a></li>
          </ul>
        </nav>

        <article className="prose prose-invert max-w-none">
          <PrivacySection id="i-grundlegendes" title="I. Grundlegendes">
            <p>
              Mit dieser Datenschutzerklärung informieren wir Sie über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch den Websitebetreiber Aurora Forge Games, [Postadresse].
            </p>
            <p>
              Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften. Da durch neue Technologien und die ständige Weiterentwicklung dieser Webseite Änderungen an dieser Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen, sich die Datenschutzerklärung in regelmäßigen Abständen wieder durchzulesen.
            </p>
            <p>
              Der Begriff „personenbezogene Daten“ meint alle Daten, die auf Sie persönlich beziehbar sind. Darunter fallen beispielsweise Name, Adresse, E-Mail‑Adressen, Nutzerverhalten. Hinsichtlich der übrigen Begrifflichkeiten, insbesondere der Begriffe „Verarbeitung“ und „Einwilligung“ verweisen wir auf die gesetzlichen datenschutzrechtlichen Definitionen. Weitere Definitionen finden Sie in Art. 4 DSGVO.
            </p>
          </PrivacySection>

          <PrivacySection id="ii-verantwortlicher" title="II. Name und Anschrift des Verantwortlichen">
            <p>
              Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p className="font-medium">Aurora Forge Games<br />[Postadresse]<br />E‑Mail: [E‑Mail‑Adresse]</p>
          </PrivacySection>

          <PrivacySection id="iii-dsb" title="III. Name und Anschrift des Datenschutzbeauftragten">
            <p>
              Der Datenschutzbeauftragte des Verantwortlichen ist:
            </p>
            <p className="font-medium">Aurora Forge Games<br />[Postadresse]<br />E‑Mail: [E‑Mail‑Adresse]</p>
          </PrivacySection>

          <PrivacySection id="iv-allgemeines" title="IV. Allgemeines zur Datenverarbeitung">
            <p className="font-semibold">Umfang der Verarbeitung personenbezogener Daten</p>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme besteht, wenn eine vorherige Einholung der Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung durch gesetzliche Vorschriften gestattet ist.
            </p>

            <p className="font-semibold">Rechtsgrundlagen</p>
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung einholen, ist Art. 6 Abs. 1 lit. a DSGVO die Rechtsgrundlage. Bei Verarbeitung zur Erfüllung eines Vertrags gilt Art. 6 Abs. 1 lit. b. Sind wir gesetzlich zur Verarbeitung verpflichtet, ist Art. 6 Abs. 1 lit. c relevant. Soweit berechtigte Interessen vorliegen, kann Art. 6 Abs. 1 lit. f Anwendung finden.
            </p>

            <p className="font-semibold">Datenlöschung und Speicherdauer</p>
            <p>
              Personenbezogene Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn gesetzliche Aufbewahrungsfristen dies verlangen. Daten werden gesperrt oder gelöscht, sobald entsprechende Fristen ablaufen, sofern keine weitere Erforderlichkeit besteht.
            </p>
          </PrivacySection>

          <PrivacySection id="v-zugriffsdaten" title="V. Zugriffsdaten">
            <p>
              Wir erheben aufgrund unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) Daten über Zugriffe auf die Website und speichern diese als Server‑Logfiles. Protokolliert werden u. a.:
            </p>
            <ul>
              <li>Besuchte Website</li>
              <li>Uhrzeit des Zugriffs</li>
              <li>Menge der gesendeten Daten in Byte</li>
              <li>Quelle/Verweis (Referrer)</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendete IP‑Adresse</li>
              <li>Kontaktaufnahme über das Kontaktformular</li>
            </ul>
            <p>
              Server‑Logfiles werden für maximal 7 Tage gespeichert und anschließend gelöscht. Aus Sicherheitsgründen können Daten länger gespeichert werden, sofern sie für die Aufklärung von Missbrauchsfällen benötigt werden oder aus Beweisgründen aufgehoben werden müssen.
            </p>
          </PrivacySection>

          <PrivacySection id="vi-cookies" title="VI. Reichweitenmessung & Cookies">
            <p>
              Diese Website verwendet Cookies zur pseudonymisierten Reichweitenmessung, die entweder vom Server oder von Drittanbietern gesetzt werden. Cookies sind kleine Dateien, die auf Ihrem Endgerät gespeichert werden und den Browser bei wiederholten Zugriffen erkennen.
            </p>
            <p>
              Sie können Cookies in den Einstellungen Ihres Browsers deaktivieren. Beachten Sie, dass dadurch ggf. nicht alle Funktionen der Website zur Verfügung stehen.
            </p>
            <p className="font-semibold">Opt‑Out / Deaktivierung</p>
            <ul>
              <li><a className="underline" href="http://optout.networkadvertising.org/?c=1#!/">Cookie‑Deaktivierungsseite (Netzwerkwerbeinitiative)</a></li>
              <li><a className="underline" href="http://optout.aboutads.info/?c=2#!/">Cookie‑Deaktivierungsseite (US)</a></li>
              <li><a className="underline" href="http://optout.networkadvertising.org/?c=1#!/">Cookie‑Deaktivierungsseite (EU)</a></li>
            </ul>
            <p>
              Zur Verbesserung unseres Angebots speichern wir – ohne Personenbezug – Zugriffsdaten in anonymisierter Form.
            </p>
          </PrivacySection>

          <PrivacySection id="vii-kontakt" title="VII. Umgang mit Kontaktdaten">
            <p>
              Wenn Sie uns über Kontaktmöglichkeiten erreichen, werden die von Ihnen übermittelten Angaben gespeichert, um Ihre Anfrage bearbeiten zu können. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.
            </p>
          </PrivacySection>

          <PrivacySection id="viii-kommentare" title="VIII. Umgang mit Kommentaren und Beiträgen">
            <p>
              Hinterlassen Sie Beiträge oder Kommentare, kann Ihre IP‑Adresse gespeichert werden. Diese Speicherung erfolgt aufgrund unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO), um bei Rechtsverstößen die Verantwortlichen identifizieren zu können.
            </p>
          </PrivacySection>

          <PrivacySection id="ix-analytics" title="IX. Google Analytics">
            <p>
              Diese Website nutzt Google Analytics zur Optimierung und Analyse des Online‑Angebots (Art. 6 Abs. 1 lit. f DSGVO). Google Analytics verwendet Cookies; die damit gewonnenen Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p>
              Es wird IP‑Anonymisierung verwendet, sodass Ihre IP innerhalb der EU verkürzt wird. Google kombiniert die vom Browser übermittelte IP‑Adresse nicht mit anderen von Google gespeicherten Daten.
            </p>
            <p>
              Sie können die Speicherung der Cookies durch entsprechende Einstellungen in Ihrem Browser verhindern oder ein Browser‑Plugin installieren, das die Erhebung durch Google verhindert: <a className="underline" href="https://tools.google.com/dlpage/gaoptout?hl=de">Google Analytics Opt‑Out</a>.
            </p>
            <p>Weitere Informationen:</p>
            <ul>
              <li><a className="underline" href="https://policies.google.com/privacy/partners?hl=de">Daten von Google‑Partnern</a></li>
              <li><a className="underline" href="https://adssettings.google.de/authenticated">Einstellungen für Werbung</a></li>
              <li><a className="underline" href="https://policies.google.com/technologies/ads?hl=de">Verwendung von Cookies in Anzeigen</a></li>
            </ul>
          </PrivacySection>

          <PrivacySection id="x-facebook" title="X. Nutzung von Social‑Media‑Plugins von Facebook">
            <p>
              Wir verwenden aufgrund berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) ggf. Facebook‑Plugins. Das Plugin stellt eine direkte Verbindung zu den Facebook‑Servern her; der Websitebetreiber hat keinen Einfluss auf Umfang und Inhalt der übermittelten Daten.
            </p>
            <p>
              Sind Sie bei Facebook eingeloggt, kann die Nutzung der Funktionen mit Ihrem Facebook‑Konto verknüpft werden. Weitere Infos finden Sie in der Facebook‑Datenschutzerklärung: <a className="underline" href="https://www.facebook.com/about/privacy/">https://www.facebook.com/about/privacy/</a>
            </p>
            <p>Weitere Einstellungen:</p>
            <ul>
              <li><a className="underline" href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen">Profileinstellungen bei Facebook</a></li>
              <li><a className="underline" href="http://optout.aboutads.info/?c=2#!/">Cookie‑Deaktivierungsseite (US)</a></li>
              <li><a className="underline" href="http://optout.networkadvertising.org/?c=1#!/">Cookie‑Deaktivierungsseite (EU)</a></li>
            </ul>
          </PrivacySection>

          <PrivacySection id="xi-newsletter" title="XI. Newsletter">
            <p className="font-semibold">Beschreibung und Umfang</p>
            <p>
              Auf dieser Seite können Sie einen kostenlosen Newsletter abonnieren. Bei Anmeldung übermitteln Sie uns typischerweise:
            </p>
            <ul>
              <li>E‑Mail‑Adresse</li>
              <li>IP‑Adresse des aufrufenden Rechners</li>
              <li>Datum und Uhrzeit der Registrierung</li>
            </ul>
            <p>
              Für die Verarbeitung wird Ihre Einwilligung eingeholt. Zweck ist die Zusendung des Newsletters; Rechtsgrundlage ist Ihre Einwilligung bzw. bei Werbezwecken ggf. § 7 Abs. 3 UWG.
            </p>
            <p className="font-semibold">Dauer der Speicherung</p>
            <p>
              Ihre E‑Mail‑Adresse wird so lange gespeichert, wie das Newsletter‑Abonnement aktiv ist. Sie können das Abonnement jederzeit kündigen; in jedem Newsletter finden Sie einen Abmeldelink.
            </p>
          </PrivacySection>

          <PrivacySection id="xii-rechte" title="XII. Rechte des Nutzers">
            <p>
              Sie haben das Recht, Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten, sowie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Gegebenenfalls können Sie Datenportabilität verlangen. Bei vermuteter rechtswidriger Verarbeitung können Sie Beschwerde bei der zuständigen Aufsichtsbehörde einreichen.
            </p>
            <p className="font-semibold">Löschung von Daten</p>
            <p>
              Sofern keine gesetzliche Aufbewahrungspflicht besteht und die Daten nicht mehr zur Zweckverfolgung benötigt werden, werden sie gelöscht. Kann eine Löschung nicht erfolgen, wird die Verarbeitung eingeschränkt und die Daten gesperrt.
            </p>
          </PrivacySection>

          <PrivacySection id="xiii-widerspruch" title="XIII. Widerspruchsrecht">
            <p>
              Nutzer können jederzeit der Verarbeitung ihrer personenbezogenen Daten widersprechen. Für Berichtigung, Sperrung, Löschung oder Auskunft wenden Sie sich bitte an folgende E‑Mail‑Adresse: <span className="font-medium">[E‑Mail‑Adresse]</span>
            </p>
          </PrivacySection>

          <footer className="mt-8 text-xs text-slate-400">
            <p>
              Hinweis: Diese Datenschutzerklärung stellt eine Muster‑Vorlage dar. Sie ersetzt keine rechtliche Beratung. Bitte prüfen und ergänzen Sie die Inhalte (z. B. konkrete Adressen, Opt‑Out‑Links, technische Maßnahmen) in Abstimmung mit einer qualifizierten Rechtsberatung.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}