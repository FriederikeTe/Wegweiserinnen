import { useEffect } from 'react';
import InfoPageLayout from '../components/InfoPageLayout'

export default function Merian() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <InfoPageLayout
      title="Maria Sibylla Merian"
      backgroundColor="bg-white"
      backButtonColor="#a855f7"
      titlePosition={{
        top:'3rem',
        left: '9rem'
      }}
      subtitlePosition={{
        top:'7.5rem',
        left: '16rem'
      }}
      subtitle="(1647–1717) Künstlerin, Naturforscherin und Pionierin der Entomologie und Ökologie"
      headerImage="/images/Merian_Schmetterling_sw.png"
      headerImageSize="cover"
      headerImagePosition="center" 
      headerImageRotate="-10deg"
      headerImageOffset={{
        top: '-11vh',         // 8% der Viewport-Höhe (statt -120px)
        left: '-25vw',       // 25% der Viewport-Breite (statt -400px)
        right: '0',
        bottom: '0'
      }}
      headerImageWidth="80%"
      headerImageHeight="auto"
      sections={[
        // Row 1: Intro Text (links, 7 Spalten) + Schmetterling 1 (rechts, 5 Spalten, überlappt)
        {
          type: 'text',
          gridColumn: '5 / 10',      // Spalte 1-7
          gridRow: '4 / 5',         // Zeile 1-2
          padding: '0 0 0 0',
          zIndex: 10,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: 'Von ihrem Stiefvater, dem Maler und Kunsthändler <strong>Jacob Marell</strong>, erhält Maria Sibylla von früher Kindheit an Anschauungsunterricht im Malen und in der Kunst des Kupferstichs. Die Künstlerin und Naturforscherin gilt als <strong>Wegbereiterin</strong> der <strong>modernen Insektenkunde</strong>.'
            }
          ]
        },
        {
          type: 'image',
          srcBW: '/images/Merian_Schmetterling_02_sw.png',
          srcColor: '/images/Merian_Schmetterling_02_ei_kl.png',
          alt: 'Schmetterling',
          gridColumn: '7 / 13',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '5 / 7',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 2rem 0 0',
          size: 'w-full',
          rotate: '-15deg',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.0',
          caption: [
            'Schmetterling aus dem Buch »Metamorphosis',
            'insectorum Surinamensium« von Maria',
            'Sibylla Merian, 1705'
          ]
        },

        // Row 2-3: Haupttext (links, 8 Spalten) + Porträt (rechts, 4 Spalten)
        {
          type: 'text',
          gridColumn: '2 / 7',
          gridRow: '6 / 7',
          padding: '0 2rem 0 1rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: 'Schon im frühen Mädchenalter, mit 13 Jahren, hält und züchtet Merian Seidenraupen und andere Schmetterlinge. Sie ist fasziniert von der <strong>Verwandlung</strong> von Raupen in Schmetterlinge und erstellt <strong>präzise gezeichnete Bilder</strong>, um den Lebenszyklus von Insekten zu dokumentieren.'
            },
            {
              content: '<strong>1705</strong> veröffentlicht sie das bahnbrechendste Werk ihrer Karriere, <strong>»Metamorphosis Insectorum Surinamensium«</strong>. Als eine der ersten untersucht sie die Interaktionen zwischen den von ihr untersuchten Arten – <strong>die Grundlage der Ökologie</strong>.'
            }
          ]
        },
        {
          type: 'image',
          srcBW: '/images/Merian_Porträt_sw_02.jpg',
          srcColor: '/images/Merian_Porträt.jpg',
          alt: 'Porträt Maria Sibylla Merian',
          gridColumn: '9 / 12',
          gridRow: '6 / 10',
          zIndex: 3,
          padding: '1rem 0 0 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionLineHeight: '1.0',
          caption: [
            'Bildnis der Maria Sibylla Merian von Jacob Marrel, 1679'
          ]
        },

        // Row 4-5: Ast (links, groß, 6 Spalten) + Deckblatt (rechts oben, 4 Spalten)
        {
          type: 'image',
          srcBW: '/images/Merian_Ast_01_sw.png',
          srcColor: '/images/Merian_Ast_01_gesp.png',
          alt: 'Ast mit Raupe und Schmetterling',
          gridColumn: '1 / 7',
          gridRow: '7 / 12',
          zIndex: 1,
          padding: '2rem 0 2rem 2rem',
          size: 'w-full',
          captionGap: '0.5rem',
          captionPosition: 'below',
          captionLineHeight: '1.0',
          caption: [
            'Zeichnung aus dem Buch »Metamorphosis insectorum Surinamensium«'
          ]
        },
        {
          type: 'image',
          srcBW: '/images/Merian_Metamorphosis_Deckblatt_sw.jpg',
          srcColor: '/images/Merian_Metamorphosis_Deckblatt.jpg',
          alt: 'Deckblatt Metamorphosis',
          gridColumn: '4 / 8',
          gridRow: '8 / 11',
          zIndex: 2,
          padding: '7rem 0 0 0',
          size: 'w-full',
          captionGap: '1.5rem',
          captionPosition: 'below',
          captionLineHeight: '1.0',
          caption: [
            'Titelblatt des Buches »Metamorphosis insectorum Surinamensium«'
          ]
        },

        // Row 6-7: Langer Text (rechts, 7 Spalten)
        {
          type: 'text',
          gridColumn: '8 / 13',
          gridRow: '9 / 10',
          padding: '0 3rem 1rem 1rem',
          zIndex: 3,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: '<strong>Maria Sibylla Merian</strong> ist künstlerisch begabt und stellt schon mit elf Jahren Kupferstiche her. Als <strong>Jugendliche</strong> erforscht sie das Leben der Insekten, züchtet sie, beschreibt und illustriert die <strong>Entwicklungsstadien</strong>, etwa beim Schmetterling: vom Ei über Raupe und Puppe bis zum fertigen Falter.'
            },
            {
              content: 'Ihren Bildern, in leuchtenden Farben auf Pergament gemalt, stellt sie erläuternde Begleittexte an die Seite. Im Juni <strong>1699</strong> bricht sie mit ihrer jüngsten Tochter Dorothea Maria mit 52 Jahren auf eine Forschungsreise nach <strong>Surinam</strong> auf, zu dieser Zeit eine niederländische Kolonie, um die Lebenszyklen exotischer Schmetterlinge in den Tropenwäldern zu erforschen – <strong>allein als Frau, gegen alle Konventionen der Zeit</strong>.'
            },
            {
              content: '<strong>»Metamorphosis Insectorum Surinamensium«</strong>, auf Niederländisch und Latein veröffentlicht, mit 60 naturgetreuen Bildtafeln, die den gesamten Lebenszyklus von tropischen Insekten und anderen Tieren innerhalb eines Habitats zeigen, sorgte in ganz Europa für Aufsehen. Vor Merian hatte noch niemand den Lebenszyklus von Insekten in allen Entwicklungsstadien mitsamt ihrer Wirtspflanzen dargestellt.'
            }
          ]
        },

        // Row 8: Schmetterling 3 (rechts unten, 5 Spalten)
        {
          type: 'image',
          srcBW: '/images/Merian_Schmetterling_03_sw.png',
          srcColor: '/images/Merian_Schmetterling_03_gesp.png',
          alt: 'Schmetterling',
          gridColumn: '1 / 6',
          gridRow: '11 / 14',
          zIndex: 1,
          padding: '12rem 0 0 2rem',
          size: 'w-full',
          rotate: '20deg',
          captionGap: '2.5rem',
          captionPosition: 'below',
          captionLineHeight: '1.0',
          caption: [
            'Schmetterling aus dem Buch »Metamorphosis insectorum Surinamensium«'
          ]
        },
                {
          type: 'image',
          srcBW: '/images/Merian_Ast_02_sw.png',
          srcColor: '/images/Merian_Ast_02.png',
          alt: 'Schmetterling',
          gridColumn: '7 / 12',
          gridRow: '10 / 14',
          zIndex: 3,
          padding: '0 0 0 6rem',
          size: 'w-full',
          rotate: '-15deg',
          captionGap: '0rem',
          captionPosition: 'below',
          captionLineHeight: '1.0',
          caption: [
            'Zeichnung aus dem Buch »Metamorphosis insectorum Surinamensium«'
          ]
        }
      ]}
    />
  )
}