/**
 * Copy for /datenschutz and /impressum.
 *
 * The English text is the user-authored source (verbatim). The German text
 * is a faithful translation of that same source, done here rather than
 * supplied — it has not been reviewed by a German-speaking legal reader and
 * should be checked before this page is relied on for compliance purposes.
 */

import { SITE } from './routes.js';

const CONTROLLER_EN = [SITE.author, 'Aargau, Switzerland'];
const CONTROLLER_DE = [SITE.author, 'Aargau, Schweiz'];

const privacy = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: September 2026',
    intro:
      'This is a personal portfolio website. It has no user accounts, no analytics and no advertising. The sections below explain the limited personal data involved in providing the website and the single preference stored locally in your browser.',
    sections: [
      {
        heading: 'Who is responsible',
        body: [
          ...CONTROLLER_EN,
          `Email: ${SITE.email}`,
          'No postal address is published on this website. If you need to contact me regarding a matter that requires one, please contact me by email first.',
        ],
      },
      {
        heading: 'Hosting and technical access data',
        body: [
          'This website is hosted by Vercel Inc., USA, which provides the infrastructure and content delivery network used to make the website available.',
          'When you visit the website, technical information may be processed by Vercel. Depending on the request, this may include information such as your IP address, date and time of access, requested URL, referring page, browser or device information, approximate location derived from the IP address, and technical log data.',
          'This information is necessary to deliver the website, maintain the service, diagnose faults and protect the infrastructure against abuse.',
          'I do not use this technical information for advertising, visitor profiling or behavioural tracking.',
          "Vercel may process information in the United States and other jurisdictions in which it or its service providers operate. Vercel states that it participates in the Swiss-U.S. Data Privacy Framework for relevant transfers of personal data from Switzerland and uses appropriate legal safeguards where required.",
          "Further information about Vercel's processing practices is available in Vercel's own privacy documentation.",
        ],
      },
      {
        heading: 'No analytics, tracking or advertising cookies',
        body: [
          'This website does not use an analytics service, tracking pixels, advertising networks or marketing cookies.',
          'No visitor profiles are created and I do not use the website to track visitors across other websites.',
          'Web fonts are hosted directly on this domain rather than loaded from an external font provider.',
          'Because the website does not currently use analytics, advertising or other consent-based tracking technologies, no cookie consent banner is displayed.',
        ],
      },
      {
        heading: 'Language preference in your browser',
        body: [
          'When you switch between German and English, the selected language is stored locally in your browser using localStorage under the key:',
          'jpg.lang',
          'The stored value is only "de" or "en".',
          'This preference is not linked to an account or other identifier and is not intentionally transmitted to me or used for tracking. You can remove it at any time by deleting the website\'s stored site data in your browser.',
        ],
      },
      {
        heading: 'Contact by email',
        body: [
          'If you contact me by email, I process your email address, your message and any information you voluntarily include in it in order to respond to your enquiry.',
          'Email communication is handled using Gmail, a service provided by Google. The technical delivery of an email may therefore involve processing by Google and by the email provider used by the sender.',
          'I do not use email enquiries for unrelated advertising or profiling and do not intentionally disclose their contents to third parties unless this is necessary to provide the email service, required by law or necessary to protect legitimate rights.',
          'Email is generally not end-to-end encrypted. Please avoid sending highly sensitive or confidential information by ordinary email.',
        ],
      },
      {
        heading: 'Links to other websites',
        body: [
          'This website contains links to external websites and profiles, including GitHub and Instagram.',
          'No content from these platforms is embedded for tracking purposes. When you follow an external link, you leave this website and the privacy rules of the respective external provider apply.',
          'Those providers may process information about your visit after you open their website.',
        ],
      },
      {
        heading: 'Retention',
        body: [
          'The language preference remains in your browser until you delete the website\'s stored data.',
          'Emails are retained only for as long as reasonably necessary to respond to the enquiry and handle any related follow-up, unless a longer period is required for legal or legitimate organisational reasons.',
          "Technical infrastructure and access data processed by Vercel is retained according to Vercel's applicable service settings, policies and legal obligations.",
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Under the Swiss Federal Act on Data Protection (FADP), you may have the right, within the limits of applicable law, to request information about personal data concerning you and to request that inaccurate data be corrected or that data be deleted or its processing restricted where applicable.',
          `Requests relating to data processed directly by me can be sent to: ${SITE.email}`,
          'If you believe that personal data is being processed in violation of Swiss data protection law, you may also report the matter to the Federal Data Protection and Information Commissioner (FDPIC).',
        ],
      },
      {
        heading: 'Changes',
        body: [
          'This privacy policy may be updated if the website or the services it uses change.',
          'The date shown at the top of this page indicates the current version.',
        ],
      },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    updated: 'Stand: September 2026',
    intro:
      'Dies ist eine persönliche Portfolio-Website. Es gibt keine Benutzerkonten, keine Analyse-Tools und keine Werbung. Die folgenden Abschnitte erläutern die begrenzten personenbezogenen Daten, die für den Betrieb der Website erforderlich sind, sowie die einzige Einstellung, die lokal in Ihrem Browser gespeichert wird.',
    sections: [
      {
        heading: 'Verantwortliche Person',
        body: [
          ...CONTROLLER_DE,
          `E-Mail: ${SITE.email}`,
          'Auf dieser Website wird keine Postadresse veröffentlicht. Sollten Sie mich zu einem Anliegen kontaktieren müssen, das eine solche erfordert, wenden Sie sich bitte zunächst per E-Mail an mich.',
        ],
      },
      {
        heading: 'Hosting und technische Zugriffsdaten',
        body: [
          'Diese Website wird von Vercel Inc., USA, gehostet, das die Infrastruktur und das Content-Delivery-Netzwerk bereitstellt, über das die Website verfügbar gemacht wird.',
          'Beim Besuch der Website können technische Informationen durch Vercel verarbeitet werden. Je nach Anfrage können dazu Angaben wie Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs, die angeforderte URL, die verweisende Seite, Browser- oder Geräteinformationen, ein aus der IP-Adresse abgeleiteter ungefährer Standort sowie technische Protokolldaten gehören.',
          'Diese Informationen sind notwendig, um die Website auszuliefern, den Betrieb aufrechtzuerhalten, Störungen zu diagnostizieren und die Infrastruktur vor Missbrauch zu schützen.',
          'Ich verwende diese technischen Informationen nicht für Werbung, die Erstellung von Besucherprofilen oder Verhaltens-Tracking.',
          'Vercel kann Informationen in den USA und anderen Rechtsordnungen verarbeiten, in denen Vercel oder dessen Dienstleister tätig sind. Vercel gibt an, für relevante Übermittlungen personenbezogener Daten aus der Schweiz am Swiss-U.S. Data Privacy Framework teilzunehmen und, soweit erforderlich, geeignete rechtliche Garantien zu verwenden.',
          'Weitere Informationen zu den Verarbeitungspraktiken von Vercel finden Sie in der eigenen Datenschutzdokumentation von Vercel.',
        ],
      },
      {
        heading: 'Keine Analyse-, Tracking- oder Werbe-Cookies',
        body: [
          'Diese Website verwendet keinen Analysedienst, keine Tracking-Pixel, keine Werbenetzwerke und keine Marketing-Cookies.',
          'Es werden keine Besucherprofile erstellt, und ich nutze die Website nicht, um Besucher über andere Websites hinweg zu verfolgen.',
          'Web-Schriften werden direkt von dieser Domain ausgeliefert und nicht von einem externen Schriftanbieter geladen.',
          'Da die Website derzeit keine Analyse-, Werbe- oder anderen zustimmungspflichtigen Tracking-Technologien einsetzt, wird kein Cookie-Consent-Banner angezeigt.',
        ],
      },
      {
        heading: 'Sprachwahl im Browser',
        body: [
          'Wenn Sie zwischen Deutsch und Englisch wechseln, wird die gewählte Sprache lokal in Ihrem Browser mittels localStorage unter folgendem Schlüssel gespeichert:',
          'jpg.lang',
          'Gespeichert wird ausschliesslich der Wert «de» oder «en».',
          'Diese Einstellung ist nicht mit einem Konto oder einer anderen Kennung verknüpft und wird nicht absichtlich an mich übermittelt oder zu Tracking-Zwecken verwendet. Sie können sie jederzeit entfernen, indem Sie die gespeicherten Website-Daten in Ihrem Browser löschen.',
        ],
      },
      {
        heading: 'Kontakt per E-Mail',
        body: [
          'Wenn Sie mich per E-Mail kontaktieren, verarbeite ich Ihre E-Mail-Adresse, Ihre Nachricht sowie alle Informationen, die Sie freiwillig darin angeben, um Ihre Anfrage zu beantworten.',
          'Die E-Mail-Kommunikation erfolgt über Gmail, einen Dienst von Google. Die technische Zustellung einer E-Mail kann daher eine Verarbeitung durch Google sowie durch den vom Absender genutzten E-Mail-Anbieter beinhalten.',
          'Ich verwende E-Mail-Anfragen nicht für sachfremde Werbung oder Profilbildung und gebe deren Inhalte nicht absichtlich an Dritte weiter, es sei denn, dies ist zur Erbringung des E-Mail-Dienstes erforderlich, gesetzlich vorgeschrieben oder zur Wahrung berechtigter Rechte notwendig.',
          'E-Mail ist im Allgemeinen nicht Ende-zu-Ende-verschlüsselt. Bitte vermeiden Sie es, hochsensible oder vertrauliche Informationen per gewöhnlicher E-Mail zu versenden.',
        ],
      },
      {
        heading: 'Links zu anderen Websites',
        body: [
          'Diese Website enthält Links zu externen Websites und Profilen, unter anderem GitHub und Instagram.',
          'Es werden keine Inhalte dieser Plattformen zu Tracking-Zwecken eingebettet. Wenn Sie einem externen Link folgen, verlassen Sie diese Website, und es gelten die Datenschutzbestimmungen des jeweiligen externen Anbieters.',
          'Diese Anbieter können Informationen über Ihren Besuch verarbeiten, nachdem Sie deren Website geöffnet haben.',
        ],
      },
      {
        heading: 'Aufbewahrung',
        body: [
          'Die Sprachpräferenz verbleibt in Ihrem Browser, bis Sie die gespeicherten Daten der Website löschen.',
          'E-Mails werden nur so lange aufbewahrt, wie dies zur Beantwortung der Anfrage und zur Bearbeitung damit zusammenhängender Rückfragen angemessen erforderlich ist, sofern nicht aus rechtlichen oder berechtigten organisatorischen Gründen eine längere Frist erforderlich ist.',
          'Technische Infrastruktur- und Zugriffsdaten, die von Vercel verarbeitet werden, werden gemäss den geltenden Diensteinstellungen, Richtlinien und rechtlichen Verpflichtungen von Vercel aufbewahrt.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        body: [
          'Nach dem schweizerischen Bundesgesetz über den Datenschutz (DSG) haben Sie im Rahmen des geltenden Rechts gegebenenfalls das Recht, Auskunft über Sie betreffende personenbezogene Daten zu verlangen sowie die Berichtigung unrichtiger Daten oder, soweit anwendbar, deren Löschung oder die Einschränkung der Bearbeitung zu verlangen.',
          `Anfragen zu Daten, die direkt von mir verarbeitet werden, können gerichtet werden an: ${SITE.email}`,
          'Wenn Sie der Ansicht sind, dass personenbezogene Daten unter Verstoss gegen das schweizerische Datenschutzrecht verarbeitet werden, können Sie sich zudem an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden.',
        ],
      },
      {
        heading: 'Änderungen',
        body: [
          'Diese Datenschutzerklärung kann aktualisiert werden, wenn sich die Website oder die von ihr genutzten Dienste ändern.',
          'Das oben auf dieser Seite angegebene Datum zeigt die aktuelle Version an.',
        ],
      },
    ],
  },
};

const imprint = {
  en: {
    title: 'Legal Notice',
    updated: 'Last updated: September 2026',
    intro: 'Information about the person responsible for this website.',
    sections: [
      {
        heading: 'Responsible for this website',
        body: [...CONTROLLER_EN, `Email: ${SITE.email}`],
      },
      {
        heading: 'Purpose of this website',
        body: [
          'This is a personal portfolio presenting software development and photography work.',
          'No products or services are sold directly through this website, and no orders or payments are processed through it.',
        ],
      },
      {
        heading: 'Hosting',
        body: [
          'This website is hosted by:',
          'Vercel Inc., USA',
          'Further information about the processing of personal data in connection with hosting can be found in the Privacy Policy.',
        ],
      },
      {
        heading: 'Copyright and third-party rights',
        body: [
          'Unless otherwise stated, original photographs, texts and graphics created for this website are protected by copyright and may not be reproduced, distributed or reused without permission.',
          'Third-party names, logos, trademarks and other protected material remain the property of their respective rights holders. Technology logos are used only to identify the technologies concerned.',
        ],
      },
      {
        heading: 'Liability',
        body: [
          'I make reasonable efforts to keep the information on this website accurate and up to date. However, errors or outdated information cannot be completely excluded.',
          'Where permitted by applicable law, no responsibility is assumed for losses resulting solely from reliance on information provided on this website.',
          'This website contains links to external websites operated by third parties. I have no control over their content or data processing practices. Responsibility for those websites lies with their respective operators.',
        ],
      },
    ],
  },
  de: {
    title: 'Impressum',
    updated: 'Stand: September 2026',
    intro: 'Angaben zur für diese Website verantwortlichen Person.',
    sections: [
      {
        heading: 'Verantwortlich für diese Website',
        body: [...CONTROLLER_DE, `E-Mail: ${SITE.email}`],
      },
      {
        heading: 'Zweck dieser Website',
        body: [
          'Dies ist eine persönliche Portfolio-Website, die Arbeiten aus Softwareentwicklung und Fotografie präsentiert.',
          'Über diese Website werden keine Produkte oder Dienstleistungen direkt verkauft, und es werden keine Bestellungen oder Zahlungen darüber abgewickelt.',
        ],
      },
      {
        heading: 'Hosting',
        body: [
          'Diese Website wird gehostet von:',
          'Vercel Inc., USA',
          'Weitere Informationen zur Verarbeitung personenbezogener Daten im Zusammenhang mit dem Hosting finden Sie in der Datenschutzerklärung.',
        ],
      },
      {
        heading: 'Urheberrecht und Rechte Dritter',
        body: [
          'Sofern nicht anders angegeben, sind für diese Website erstellte Original-Fotografien, Texte und Grafiken urheberrechtlich geschützt und dürfen ohne Zustimmung nicht vervielfältigt, verbreitet oder anderweitig weiterverwendet werden.',
          'Namen, Logos, Marken und sonstiges geschütztes Material Dritter verbleiben im Eigentum der jeweiligen Rechteinhaber. Technologie-Logos dienen ausschliesslich der Kennzeichnung der betreffenden Technologien.',
        ],
      },
      {
        heading: 'Haftung',
        body: [
          'Ich bemühe mich in angemessenem Umfang, die Informationen auf dieser Website korrekt und aktuell zu halten. Fehler oder veraltete Angaben können jedoch nicht vollständig ausgeschlossen werden.',
          'Soweit gesetzlich zulässig, wird keine Verantwortung für Schäden übernommen, die allein aus dem Vertrauen auf die auf dieser Website bereitgestellten Informationen entstehen.',
          'Diese Website enthält Links zu externen, von Dritten betriebenen Websites. Ich habe keinen Einfluss auf deren Inhalte oder Datenverarbeitungspraktiken. Die Verantwortung für diese Websites liegt bei den jeweiligen Betreibern.',
        ],
      },
    ],
  },
};

export const legalDocuments = { privacy, imprint };
