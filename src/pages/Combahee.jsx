import { useEffect } from 'react';
import InfoPageLayout from '../components/InfoPageLayout'

export default function Merian() {
      useEffect(() => {
        window.scrollTo(0, 0);  // Scroll nach oben links
      }, []);
  return (
    <InfoPageLayout
      title="Combahee River Collective"
      backgroundColor="bg-white"
      backButtonColor="#a855f7"
      titlePosition={{
        top:'3rem',
        left: '9rem'
      }}
      subtitlePosition={{
        top:'7rem',
        left: '16rem'
      }}
      subtitle=" (1974–1980) Radikale Schwarze feministische Organisation in den USA"
      headerImage="/images/CRC_Combahee_River_sw.png"
      headerImageSize="cover"
      headerImagePosition="center" 
      headerImageRotate="0deg"
      headerImageOffset={{
        top: '-22vh',         // 8% der Viewport-Höhe (statt -120px)
        left: '-25vw',       // 25% der Viewport-Breite (statt -400px)
        right: '0',
        bottom: '0'
      }}
      headerImageWidth="100%"
      headerImageHeight="auto"
      sections={[
{
          type: 'text',
          gridColumn: '1 / 6',      // Spalte 1-7
          gridRow: '4 / 5',         // Zeile 1-2
          padding: '0 0 0 2rem',
          zIndex: 10,
          lineHeight: '1.2',
          paragraphs: [
    {
        content: 'Der Name des Kollektivs stammt vom Überfall auf den Combahee Fluss (Combahee River Raid) vom Juni 1863, der von <strong>Harriet Tubman</strong> angeführt wurde und 750 versklavte Menschen befreite. Ihr <strong>Combahee River Collective Statement</strong> wurde 1977 veröffentlicht und gilt als wegbereitend für intersektionalen Feminismus. Es ist ein Stück <strong>Zeitgeschichte</strong> des Schwarzen Feminismus und der revolutionären Linken in den USA.'
    }
  ]
},
    {
        type: 'image',
        srcBW: '/images/CRC_Tubmann_ausg_sw.png',
        srcColor: '/images/CRC_Tubmann_aug.png',
        alt: 'Porträt Maria Sibylla Merian',
          gridColumn: '9 / 11',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '3 / 6',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Porträt Harriet Tubmann'
          ]
        },
    {
        type: 'image',
        srcBW: '/images/CRC_BSmith_Porträt_sw.jpg',
        srcColor: '/images/CRC_BSmith_Porträt.jpg',
        alt: 'Porträt Maria Sibylla Merian',
          gridColumn: '1 / 4',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '5 / 9',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 0 0 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Barbara Smith, 1969'
          ]
        },
    {
          type: 'text',
          gridColumn: '4 / 9',
          gridRow: '5 / 7',
          padding: '0 2rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
                content: 'Im Jahr 1974 gründeten die <strong>Schwestern Barbara</strong> und <strong>Beverly Smith</strong> zusammen mit Demita Frazier das CRC. Zunächst brachten Barbara Smith und Frazier eine Gruppe von Frauen aus dem Raum Boston zusammen, die sich weitgehend mit der National Black Feminist Organization (NBFO) identifizierten. Bald stellten die beiden jedoch fest, dass ihre Prioritäten – die Ablehnung des Kapitalismus und eine nicht-hierarchische Gruppenstruktur – sie von vielen in der NBFO unterschieden.'
            },
            {
                content: 'Sie trennten sich, um mit Beverly Smith ihre eigene Organisation zu gründen, und nannten sich Combahee River Collective. Sie wählten diesen Namen, um Harriet Tubmans Überfall auf den Combahee River von 1863 zu ehren und sich davon inspirieren zu lassen – die erste größere militärische Operation in der Geschichte der USA, die von einer Frau geplant und geleitet wurde. Während des Überfalls befehligte Tubman 150 schwarze Unionstruppen und befreite mehr als 700 versklavte Menschen in South Carolina.'
            }
          ]
        },
            {
          type: 'text',
          gridColumn: '8 / 13',
          gridRow: '7 / 9',
          padding: '0 4rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
                content: 'Individuell und kollektiv arbeiteten die Mitglieder des CRC an Themen wie <strong>häuslicher Gewalt, sexuellen Übergriffen, Polizeibrutalität, Aufhebung der Rassentrennung an Schulen, Gesundheitsversorgung</strong> und <strong>reproduktiver Gerechtigkeit</strong>. Während sich viele weiße Frauen in der Frauenbewegung auf Abtreibungsrechte konzentrierten und dafür kämpften, erweiterten Women of Color das Konzept oft zu einem der <strong>reproduktiven Gerechtigkeit</strong>, einschließlich des Rechts, Kinder zu bekommen, da sie wussten, dass sie mit viel größerer Wahrscheinlichkeit Opfer erzwungener Sterilisation durch die medizinische Einrichtungen werden würden. Das Recht auf Abtreibung war nur ein Teil der reproduktiven Autonomie, die Feministinnen of Color zu erreichen suchten.'
            }
          ]
        },
        {
        type: 'image',
        srcBW: '/images/CRC_BESmith_Porträt_sw.jpg',
        srcColor: '/images/CRC_BESmith_Porträt.jpg',
        alt: 'Ast mit Raupe und Schmetterling',
          gridColumn: '3 / 8',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '7 / 12',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Beverley Smith, 1979'
          ]
        },
        {
        type: 'image',
        srcBW: '/images/CRC_Statement_sw.jpg',
        srcColor: '/images/CRC_Statement.jpg',
        alt: 'Seite des Nature Artikels mit Foto 51',
          gridColumn: '8 / 11',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '9 / 14',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 0 3rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
          'Combahee River Collective Statement']
        },
         {
          type: 'text',
          gridColumn: '2 / 8',
          gridRow: '10 / 14',
          padding: '2rem 1rem 0 0',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
          {
            content: 'Im April <strong>1977</strong> veröffentlichte das CRC »The Combahee River Collective Statement«. Das Essay erklärte ihre Absicht: <strong>»to develop a politics that was anti-racist, unlike those of white women, and anti-sexist, unlike those of Black and white men.«</strong>'
          },
          {
            content: 'Es drückte auch ihre Ansicht aus, dass der schwarze Feminismus »the logical political movement to combat the manifold and simultaneous oppressions that all women of color face« darstellte. Die Erklärung betonte die miteinander verflochtene Natur von rassistischer, sexueller, heterosexueller und Klassenunterdrückung und erklärte: <strong>»The synthesis of these oppressions creates the conditions of our lives.«</strong>'
          },
          {
            content: 'Das CRC hielt es für entscheidend, sich mit dem Zusammenfluss dieser Kräfte auseinanderzusetzen: Jede Revolution, die es versäumte, all diese Faktoren zu berücksichtigen, würde letztlich für schwarze Frauen zu kurz greifen.'
          }
          ]
        },
        {
        type: 'image',
        srcBW: '/images/CRC_Crenshaw_Porträt_sw.jpg',
        srcColor: '/images/CRC_Crenshaw_Porträt.jpg',
        alt: 'Schmetterling aus dem Buch Metamorphosis',
          gridColumn: '1 / 8',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '13 / 18',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 0 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Kimberlé Crenshaw bei einem TED Talk 2016'
          ]
        },
        {
          type: 'text',
          gridColumn: '8 / 13',
          gridRow: '14 / 15',
          padding: '2rem 4rem 0 2rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
                content: 'Heute bezeichnen wir diese mehrdimensionale Perspektive häufiger als <strong>»Intersektionalität«</strong>. Die Juraprofessorin <strong>Kimberlé Crenshaw</strong> prägte den Begriff erstmals 1989. Ihre juristische Analyse, die aufzeigte, wie verschiedene Identitätskategorien auf eine Weise miteinander verwoben sind, die zu sozialer Ungleichheit führen kann, baute auf der Wissenschaft der Critical Race Theory und der konzeptionellen Arbeit schwarzer Feministinnen auf, einschließlich des Combahee River Collective.'
            }
          ]
        }
      ]}
    />
  )
}