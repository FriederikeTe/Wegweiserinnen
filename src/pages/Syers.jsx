import { useEffect } from 'react';
import InfoPageLayout from '../components/InfoPageLayout'

export default function Merian() {
      useEffect(() => {
        window.scrollTo(0, 0);  // Scroll nach oben links
      }, []);
  return (
    <InfoPageLayout
      title="Madge Syers"
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
      subtitle=" (1881–1917) Erste Olympiasiegerin im Eiskunstlauf"
      headerImage="/images/Syers_Spuren_02_ausg.png"
      headerImageSize="cover"
      headerImagePosition="center"
      headerImageRotate='30deg'
      headerImageOffset={{
        top: '-1vh',         // 8% der Viewport-Höhe (statt -120px)
        left: '-10vw',       // 25% der Viewport-Breite (statt -400px)
        right: '0',
        bottom: '0'
      }}
      headerImageWidth="55%"
      headerImageHeight="auto"
      sections={[
    {
         type: 'text',
          gridColumn: '6 / 12',      // Spalte 1-7
          gridRow: '3 / 4',         // Zeile 1-2
          padding: '0 7rem 0 0',
          zIndex: 10,
          lineHeight: '1.2',
          paragraphs: [
    {
        content: '<strong>Madge Syers</strong> entdeckte schon früh ihre <strong>Leidenschaft</strong> für das <strong>Eiskunstlaufen</strong>. Bereits in jungen Jahren durfte sie als eines von 15 Kindern des Bauunternehmers und Immobilien-Entwicklers Edward Jarvis Cave zum berühmten <strong>Londoner Prince’s Skating Club in Knightsbridge</strong> gehen, wo die britische Eiskunstlauf-Elite trainierte.'
    }
  ]
},
                // Nur Text (rechts oben)
        {
          type: 'text',
          gridColumn: '1 / 7',
          gridRow: '6 / 7',
          padding: '4rem 3rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
                content: '<strong>1902</strong> kündigte Madge Syers ihre <strong>Teilnahme</strong> an den <strong>Eiskunstlauf-Weltmeisterschaften öffentlich</strong> an. Eiskunstlauf war zu der Zeit noch ein ausschließlich <strong>männlich</strong> angesehene Sportart, weshalb Frauen in den Regeln <strong>nicht explizit ausgeschlossen</strong> worden sind. Syers gewann den <strong>zweiten Platz</strong>, hinter dem Schweden Ulrich Salshow.'
            }
          ]
        },
         {
        type: 'image',
        position: 'absolut',
        srcBW: '/images/Syers_Porträt_sw.png',
        srcColor: '/images/Madge_Syers_Porträt.png',
        alt: 'Madge Syers Porträt',
          gridColumn: '7 / 12',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '3 / 12',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '3rem 0 0 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Foto von Madge Syers beim Eiskunstlauf'
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Syers_Kingsrink_sw_02.jpg',
        srcColor: '/images/Kingsrink.jpg',
        alt: 'Prince’s Skating Rink in Knightsbridge',
          gridColumn: '2 / 6',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '7 / 11',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Prince’s Skating Rink in Knightsbridge'
          ]
        },
         {
          type: 'text',
          gridColumn: '1 / 7',
          gridRow: '11 / 12',
          padding: '3rem 2rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: 'Der Eiskunstläufer T. D. Richardson sagte darüber später: <strong>»Gerüchte, nein, mehr als Gerüchte – eine ganze Reihe von Expertenstimmen – waren der Meinung, dass sie hätte gewinnen müssen.«</strong> '
            },
            {
              content: 'Auf ihrer nächsten Tagung <strong>1903</strong> diskutierte dann die <strong>Eislaufunion</strong>, ob Frauen weiterhin im Eiskunstlaufen starten dürften. Aufgrund von <strong>Vorbehalten</strong> wie: <strong>»Ein Punktrichter, dem eines der Mädchen gefällt, bewertet nicht objektiv«</strong> oder <strong>»die langen Kleider hindern die Richter daran, die Fußarbeit zu sehen«</strong>, wurde beschlossen <strong>Frauen</strong> zukünftig von Meisterschaften <strong>auszuschließen</strong>. Da die Öffentlichkeit aber gefallen an Frauen im Eiskunstlaufen gefunden hatte, wurde <strong>1906 die Eislauf-Weltmeisterschaft der Frauen</strong> eingeführt, bei der sie vor der Österreicherein Jenny Herz und der Ungarin Lili Kronberger den ersten Platz belegte. Bei den <strong>Olympischen Spielen 1908</strong> gewann Syers die <strong>Goldmedaille</strong> im Eiskunstlaufen der Frauen. Sie starb am neunten September <strong>1917</strong> bei der Geburt ihrer Tochter. '
            }
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Syers_Paar_ausg_sw_04.png',
        srcColor: '/images/Syers_Paar_ausg.png',
        alt: 'Schmetterling aus dem Buch Metamorphosis',
          gridColumn: '2 / 5',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '12 / 14',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 0 0',
          size: 'w-full',
          rotate: '5deg',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Madge Syers und ihr Ehemann beim Schlittschuhlaufen als Paar'
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Syers_Herz_sw.jpg',
        srcColor: '/images/Syer_Herz.jpg',
        alt: 'Schmetterling aus dem Buch Metamorphosis',
          gridColumn: '9 / 12',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '10 / 14',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 0 3rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Jenny Herz, 1912, Vize-Weltmeisterin von 1906'
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Syers_Kronberger_sw.jpg',
        srcColor: '/images/Syers_Kronberger.jpg',
        alt: 'Schmetterling aus dem Buch Metamorphosis',
          gridColumn: '7 / 9',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '9 / 13',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '3rem 0 4rem 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Lili Kronberger, erreichte den dritten Platz bei der Weltmeisterschaft 1906'
          ]
        },
      ]}
    />
  )
}