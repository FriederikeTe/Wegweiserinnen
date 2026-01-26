import { useEffect } from 'react';
import InfoPageLayout from '../components/InfoPageLayout'

export default function MacDonald() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <InfoPageLayout
      title="Margaret und Frances MacDonald"
      backgroundColor="bg-white"
      backButtonColor="#a855f7"
      titlePosition={{
        top:'3rem',
        left: '9rem'
      }}
      subtitlePosition={{
        top:'7.7rem',
        left: '16rem'
      }}
      subtitle="(1864–1933, 1873–1921) Künstlerinnen und Pionierinnen des Jugendstils"
      headerImage="/images/Margaret_SiebenPrinzessinnen_close_sw_02.png"
      headerImageSize="cover"
      headerImagePosition="center"
      headerImageOffset={{
        top: '-1vh',         // 8% der Viewport-Höhe (statt -120px)
        left: '-1vw',       // 25% der Viewport-Breite (statt -400px)
        right: '0',
        bottom: '0'
      }}
      headerImageWidth="80%"
      headerImageHeight="auto"
      sections={[
        // Intro Text
        {
          type: 'text',
          gridColumn: '1 / 7',      // Spalte 1-7
          gridRow: '5 / 8',         // Zeile 1-2
          padding: '4rem 3rem 0 4rem',
          zIndex: 10,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: '<strong>Margaret</strong> und <strong>Frances MacDonald</strong> gehören zu den prägenden Gestalten des europäischen <strong>Jugendstils</strong> und trugen maßgeblich zur Entwicklung des <strong>»Glasgow Styles«</strong> bei. Zusammen mit Charles Rennie Mackintosh und James Herbert McNair bildeten sie die Gruppe <strong>»The Four«</strong> und schufen ein umfangreiches Werk, geprägt von <strong>mystischen Frauenfiguren, keltischer Symbolik</strong> und <strong>mittelalterlicher Handwerkskunst</strong>.'
            }
          ]
        },

        // Erste Textsektion
        {
          type: 'text',
          gridColumn: '8 / 13',
          gridRow: '9 / 10',
          padding: '4rem 2rem 0 0',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: '<strong>1890</strong> starteten sie ihr Kunststudium an der <Strong>Glasgow School of Art</strong>, die im Gegensatz zu anderen Kunsthochschulen Frauen schon ab den 1870ern in ihren Kursen zuließ. Neben Malerei und Bildhauerei konnten dort zudem auch Weberei, Schmuckdesign, Metallarbeiten oder Keramik erlernt werden. In der <strong>Glasgow Society of Lady Artists</strong>, konnten sich Studentinnen und Dozentinnen austauschen und zusammen <strong>Ausstellungen</strong> organisieren. Auch Margaret und Frances waren Teil dieser Gruppe, hatten aber erst Ende der 1890er Jahre ihren <strong>Durchbruch</strong> als Teil der Gruppe »The Four«. Aus James und Frances und Charles und Margaret wurden während ihrer Zusammenarbeit <strong>Ehepaare</strong>, die bis an ihr Lebensende zusammen arbeiteten. '
            }
          ]
        },

        // Bild: Margaret Porträt
        {
          type: 'image',
          srcBW: '/images/Margaret_Porträt_sw_02.png',
          srcColor: '/images/Margaret_Porträt.jpg',
          alt: 'Porträt Margaret MacDonald',
          gridColumn: '8 / 11',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '4 / 7',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 0 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Porträt Margaret MacDonald'
          ]
        },

        // Bild: Frances Porträt
        {
          type: 'image',
          srcBW: '/images/Frances_Porträt_sw_02.jpg',
          srcColor: '/images/Frances_Porträt.jpg',
          alt: 'Porträt Frances MacDonald',
          gridColumn: '9 / 13',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '5 / 9',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '10rem 2rem 0 6rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Porträt Frances MacDonald'
          ]
        },

        // Bild: Blackthorns
        {
          type: 'image',
          srcBW: '/images/Margaret_Blackthorns_sw.jpg',
          srcColor: '/images/Margaret_Blackthorns.jpg',
          alt: 'The Legend of the Blackthorns',
          gridColumn: '1 / 8',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '6 / 11',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '4rem 2rem 0 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Margaret MacDonald, The Legend of the Blackthorns'
          ]
        },

        // Zweite Textsektion
        {
          type: 'text',
          gridColumn: '1 / 7',
          gridRow: '11 / 15',
          padding: '0 2rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: 'Im Jahr <strong>1900</strong> lud <strong>Gustav Klimt</strong> sie zur 13. Ausstellung der Vereinigung der bildender Künstler Österreichs in Wien ein, nachdem er auf ihre Arbeit aufmerksam geworden war. Besonders die Werke <strong>»The May Queen«</strong> und <strong>»Summer«</strong> von <strong>Margaret</strong> übten eine nachhaltige Faszination auf ihn aus und <strong>inspirierten</strong> ihn zu mehreren seiner <strong>berühmtesten Werke</strong>, wie »Beethovenfries«, » Adele Bloch-Bauer I«, »Wasserschlangen I«.'
            },
            {
              content: 'Trotzdem geraten die MacDonald Schwestern, die zu den <strong>bedeutensten</strong> und <strong>meistdiskutierten Vertreterinnen</strong> des <strong>Jugendstils</strong> gehörten, in Vergessenheit und werden erst jetzt, wie so viele andere Frauen, <strong>wiederentdeckt</strong>. Von der Gruppe »The Four« blieben nur die beiden Männer und besonders Mackintosh in Erinnerung, der nach seinem Tod sogar als einer der bedeutendsten Designer und Architekten des Jugendstils gewürdigt worden ist.'
            }
          ]
        },

        // Bild: Spring
        {
          type: 'image',
          srcBW: '/images/Frances_Spring_sw.png',
          srcColor: '/images/Frances_Spring.jpg',
          alt: 'Frances Spring',
          gridColumn: '7 / 13',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '10 / 13',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 2rem 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Frances MacDonald, Spring'
          ]
        },
                {
          type: 'image',
          srcBW: '/images/Margaret_EmproideredPanels_links_ausg_sw.png',
          srcColor: '/images/Margaret_EmproideredPanels_links_ausg.png',
          alt: 'Emproidered Panels linke Seite',
          gridColumn: '1 / 4',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '13 / 19',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 0 0 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Frances, Emproidered Panels'
          ]
        },
                {
          type: 'image',
          srcBW: '/images/Margaret_EmproideredPanels_rechts_ausg_sw.png',
          srcColor: '/images/Margaret_EmproideredPanels_rechts_ausg.png',
          alt: 'Embroidered Panels rechte Seite',
          gridColumn: '10 / 13',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '13 / 19',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 2rem 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Frances, Emproidered Panels'
          ]
        },

        // Dritte Textsektion
        {
          type: 'text',
          gridColumn: '4 / 10',
          gridRow: '14 / 16',
          padding: '0 3rem 0 3rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: 'Dieser schrieb seiner Frau Margaret kurz vor seinem Tod: <strong>»Denk dran, dass du die Hälfte, wenn nicht drei Viertel meiner Architekturarbeiten ausmachst.«</strong>'
            },
            {
              content: 'Ihre eigenen Werke galten über Jahrzehnte hingegen als <strong>verschollen</strong> und ihr Werk <strong>»Seven Princesses«</strong> wurde beispielsweise erst <strong>1990</strong> in einer Kiste im <strong>Keller</strong> des Museums für angewandte Kunst in Wien entdeckt und anschließend in die <strong>Dauerausstellung</strong> aufgenommen. Von Frances Werk ist leider nicht mehr viel erhalten geblieben, da ihr Ehemann McNair fast ihr gesamtes Werk in einer Art <strong>Verzweiflungstat</strong> nach ihrem <strong>frühen Tod 1921 zerstörte</strong> und danach bis zu seinem Tod 1955 selbst nie wieder malte.'
            }
          ]
        },
        {
          type: 'image',
          srcBW: '/images/Margaret_Summer_sw.jpg',
          srcColor: '/images/Margaret_Summer.jpg',
          alt: 'Embroidered Panels rechte Seite',
          gridColumn: '5 / 9',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '16 / 20',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 4rem 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Margaret, Summer'
          ]
        }
      ]}
    />
  )
}