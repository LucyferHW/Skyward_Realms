/**
 * @file ChTitle.tsx
 * @description Wiederverwendbare Titel-Komponente mit Icon für sider.ai; ersetzt fehlerhaften Inline-HTML-Code durch semantisch korrekte JSX.
 */

import React from 'react'

/**
 * @interface ChTitleProps
 * @description Props für die ChTitle-Komponente.
 */
interface ChTitleProps {
  /**
   * @description Der sichtbare Titeltext.
   */
  title?: string
  /**
   * @description Überschriftslevel, standardmäßig 'h2'.
   */
  level?: 'h1' | 'h2' | 'h3'
  /**
   * @description Pfad zum Icon-Bild.
   */
  imgSrc?: string
  /**
   * @description Alternativtext für das Icon.
   */
  imgAlt?: string
  /**
   * @description Zusätzliche CSS-Klassen für das Überschriften-Element.
   */
  className?: string
}

/**
 * @component ChTitle
 * @description Rendert eine semantisch korrekte Überschrift mit Icon.
 * - Vermeidet ungültige Verschachtelungen (z. B. h1 in h2).
 * - Nutzt className statt class für React.
 *
 * @param props ChTitleProps
 * @returns JSX.Element
 */
export default function ChTitle({
  title = 'Skyward Realms',
  level = 'h2',
  imgSrc = '/favicon.ico',
  imgAlt = 'Skyward Realms',
  className = '',
}: ChTitleProps): JSX.Element {
  // Dynamisches Überschriftselement basierend auf `level`
  const Heading = level as keyof JSX.IntrinsicElements

  return (
    // Beachte: className verwenden (React) und semantisch korrektes Heading-Element
    // Bild und Text sind inline und vertikal zentriert
    // Tailwind-Klassen können je nach Projektstil angepasst werden
    React.createElement(
      Heading,
      { className: `ch-title-zone flex items-center gap-2 ${className}` },
      <>
        <img src={imgSrc} className="heading-favicon h-5 w-5" alt={imgAlt} />
        <span className="text-inherit font-semibold">{title}</span>
      </>
    )
  )
}
