import { useEffect } from 'react';
import InfoPageLayout from '../components/InfoPageLayout'

export default function Lovelace() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <InfoPageLayout
      title="Ada Lovelace"
      backgroundColor="bg-white"
      backButtonColor="#a855f7"
      subtitle="(1818–1852) Mathematikerin und Pionierin der Informatik"
      titlePosition={{
        top:'3rem',
        left: '9rem'
      }}
      subtitlePosition={{
        top:'7rem',
        left: '16rem'
      }}
      headerImage="/images/Lovelace_Algorithmus_Auszug_ausg.png"
      headerImageSize="cover"
      headerImagePosition="center" 
      headerImageRotate="0"
      headerImageOffset={{
        top: '-11vh',         // 8% der Viewport-Höhe (statt -120px)
        left: '-2vw',       // 25% der Viewport-Breite (statt -400px)
        right: '0',
        bottom: '0'
      }}
      headerImageWidth="80%"
      headerImageHeight="auto"
      sections={[
        // Row 1: Intro Text (links, 7 Spalten) + Schmetterling 1 (rechts, 5 Spalten, überlappt)
        {
          type: 'text',
          gridColumn: '7 / 12',
          gridRow: '3 / 4',
          padding: '0 0 0 2rem',
          zIndex: 2,
          lineHeight: '1.3',
          paragraphs: [
            {
              content: 'Augusta Ada Byron wird am <strong>10. Dezember 1815</strong> in London als Tochter der britischen Aristokratin <strong>Anne Isabella Milbanke</strong> und des romantischen Dichters <strong>Lord Byron</strong> geboren. Später ist sie unter dem Namen <strong>Ada Lovelace</strong> bekannt.'
            }
          ]
        },
        {
          type: 'text',
          gridColumn: '8 / 12',
          gridRow: '4 / 5',
          padding: '0 3rem 0 0',
          zIndex: 2,
          lineHeight: '1.3',
          paragraphs: [
            {
              content: 'Den Titel <strong>erste Pionierin</strong> bekam sie für ihre Übersetzung und weiterführenden Kommentare zu der <strong>Analytical Engine</strong> von Charles Babbage.'
            }
          ]
        },
        {
          type: 'text',
          gridColumn: '1 / 6',
          gridRow: '5 / 6',
          padding: '2rem 2rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.3',
          paragraphs: [
            {
              content: 'Schon als Kind außergewöhnlich wissbegierig, verschreibt sie sich der <strong>Mathematik</strong>. Mit ihrem Mentor Charles Babbage forscht die Gräfin ab <strong>1833</strong> an einer <strong>revolutionären Rechenmaschine</strong>.'
            }
          ]
        },
                {
          type: 'text',
          gridColumn: '1 / 7',
          gridRow: '6 / 7',
          padding: '0 3rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.3',
          paragraphs: [
            {
              content: 'Und erkennt, dass ein Gerät dieser Art mittels eines <strong>Codes</strong> Informationen verarbeiten könnte: Es ist eine Vision des <strong>modernen Computers</strong> – die jedoch kaum einer ihrer Zeitgenossen versteht.'
            }
          ]
        },
        
        // Bild: Porträt
        {
          type: 'image',
          srcBW: '/images/Lovelace_Poträt_sw.jpg',
          srcColor: '/images/Ada-Lovelace.jpg',
          alt: 'Porträt Ada Lovelace',
          gridColumn: '8 / 11',
          gridRow: '5 / 8',
          zIndex: 4,
          padding: '2rem 0 0 2rem',
          size: 'w-full',
          captionGap: '0.5rem',
          captionPosition: 'below',
          captionLineHeight: '1.4',
          caption: [
            'Ada Lovelace, 1840, von <strong>Margaret Sarah Carpenter</strong>, einer der erfolgreichsten Künstlerinnen ihrer Zeit in Großbritannien'
          ]
        },

        // Bild: Analytical Engine
        {
          type: 'image',
          srcBW: '/images/Lovelace_Analytical_Engine_sw_02.png',
          srcColor: '/images/Lovelace_Analytical_Engine_ausg.png',
          alt: 'Analytical Engine',
          align: 'left',
          gridColumn: '1 / 9',
          gridRow: '7 / 13',
          zIndex: 3,
          size: 'w-full',
          captionGap: '0.5rem',
          captionPosition: 'below',
          captionLineHeight: '1.4',
          caption: [
            'Analytical Engine von Charles Babbage'
          ]
        },

        // Zweite Textsektion
        {
          type: 'text',
          gridColumn: '8 / 13',
          gridRow: '10 / 13',
          padding: '0 3rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.3',
          paragraphs: [
            {
              content: 'Zudem war Ada Lovelace <strong>Musikerin</strong> und <strong>Dichterin</strong>, sie wollte das menschliche Fliegen durch Dampfantrieb revolutionieren, war selbstbewusste <strong>Wissenschaftlerin</strong> und <strong>Förderin</strong> männlicher und weiblicher Zeitgenossen und hatte ein interdisziplinäres Wissenschaftverständnis.'
            },
            {
              content: 'Trotz ihrer <strong>Weitsicht</strong> in den Anmerkungen zur Analytical Engine wurde sie erst in den letzten Jahren als <strong>Pionierin der Informatik</strong> wiederentdeckt. Auch heute gibt es noch Kritiker, die ihren Beitrag zur Geschichte der Informatik anzweifeln.'
            }
          ]
        },

        // Bild: Algorithmus Tabelle (Original)
        {
          type: 'image',
          srcBW: '/images/Lovelace_Algorithmus_Auszug.jpg',
          srcColor: '/images/Algorithmus_Tabelle.jpg',
          alt: 'Algorithmus Tabelle Bernoulli Zahlen',
          align: 'right',
          gridColumn: '2 / 12',
          gridRow: '13 / 17',
          zIndex: 3,
          padding: '6rem 0 4rem 0',
          size: 'w-full',
          captionGap: '0.5rem',
          captionPosition: 'below',
          captionLineHeight: '1.4',
          caption: [
            'Berechnungen für die Analytical Engine'
          ]
        }
      ]}
    />
  )
}