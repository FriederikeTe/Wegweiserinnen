import { useEffect } from 'react';
import InfoPageLayout from '../components/InfoPageLayout'

export default function Merian() {
      useEffect(() => {
        window.scrollTo(0, 0);  // Scroll nach oben links
      }, []);
  return (
    <InfoPageLayout
      title="Rosalind Franklin"
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
      subtitle=" (1920–1958) Biochemikerin und Spezialistin der Röntgenstrukturanalyse"
      headerImage="/images/Franklin_DNA_ausg_sw_02.png"
      headerImageSize="cover"
      headerImagePosition="center" 
      headerImageRotate="45deg"
      headerImageOffset={{
        top: '-28vh',         // 8% der Viewport-Höhe (statt -120px)
        left: '-15vw',       // 25% der Viewport-Breite (statt -400px)
        right: '0',
        bottom: '0'
      }}
      headerImageWidth="30%"
      headerImageHeight="auto"
      sections={[
{
          type: 'text',
          gridColumn: '5 / 10',      // Spalte 1-7
          gridRow: '3 / 4',         // Zeile 1-2
          padding: '0 4rem 0 3rem',
          zIndex: 10,
          lineHeight: '1.2',
          paragraphs: [
    {
        content: 'Rosalind Franklin wird <strong>1920</strong> in eine gutsituierte Familie von <strong>Akademiker:innen</strong> geboren. Ihre Eltern legten viel Wert auf eine gute Schulbildung.'
    }
  ]
},
{
          type: 'text',
          gridColumn: '4 / 8',      // Spalte 1-7
          gridRow: '4 / 5',         // Zeile 1-2
          padding: '0 0 0 2rem',
          zIndex: 10,
          lineHeight: '1.2',
          paragraphs: [
    {
        content: 'Früh zeigte sich bei ihr eine <strong>naturwissenschaftliche Begabung</strong> und so besuchte sie Internate und Privatschulen mit einem Fokus auf Naturwissenschaften.'
    }
  ]
},
    {
        type: 'image',
        srcBW: '/images/Franklin_Porträt_sw_02.jpg',
        srcColor: '/images/Franklin_Porträt.jpg',
        alt: 'Porträt Maria Sibylla Merian',
          gridColumn: '8 / 12',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '4 / 8',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 2rem 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Porträt Rosalind Franklin'
          ]
        },
    {
          type: 'text',
          gridColumn: '3 / 8',
          gridRow: '5 / 6',
          padding: '0 2rem 0 1rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
                content: '<strong>1938</strong> begann sie ihr Studium in den Naturwissenschaften an der <strong>Cambridge Universität</strong>. Zu der Zeit waren Frauen nur an den zwei Colleges Newnham und Girton zugelassen und zwischen <strong>5000 Männern</strong> durften dort nur <strong>500 Frauen</strong> studieren.'
            }
          ]
        },
            {
          type: 'text',
          gridColumn: '2 / 7',
          gridRow: '6 / 7',
          padding: '1rem 2rem 0 3rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
                content: '<strong>1945</strong> schloss sie ihr Studium mit einem Doktor in <strong>Chemie</strong> ab. Danach arbeitete sie in Paris am Laboratoire Central des Services Chemiquies de L’Etat primär mit der Methode der <strong>Kristallstrukturanalyse</strong>. 1952 gelang ihr die Aufnahme des bekannten <strong>Fotos 51</strong>, welches den richtigen Aufbau der DNA-Struktur offenbarte.'
            }
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Franklin_Foto51_sw.png',
        srcColor: '/images/Franklin_Foto52_ausg.png',
        alt: 'Ast mit Raupe und Schmetterling',
          gridColumn: '1 / 6',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '6 / 11',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '10rem 0 0 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Foto 51'
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Franklin_NatureArtikel_sw.png',
        srcColor: '/images/Franklin_NatureArtikel.png',
        alt: 'Seite des Nature Artikels mit Foto 51',
          gridColumn: '3 / 8',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '7 / 13',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '15rem 0 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.0',
          caption: [
          'Seite aus dem Nature Artikel mit Foto 51,',
            'oben links steht die kurze Erwähnung Franklins']
        },
         {
          type: 'text',
          gridColumn: '8 / 13',
          gridRow: '8 / 13',
          padding: '1rem 3rem 0 0',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
          {
            content: 'Zuvor hatte sie <strong>1950</strong> einen Forschungsauftrag am Londoner King’s College erhalten, einschließlich eines dreijährigen Vollstipendiums, um mithilfe von <strong>Röntgenstrahlen</strong> an der <strong>Strukturanalyse der DNA</strong> zu forschen. Ihre Stelle teilte sie sich mit dem stellvertretenden Leiter des Laboratoriums <strong>Maurice Wilkins</strong>, der zuerst davon ausging, dass Franklin seine <strong>Assistentin</strong> sein würde. Mit der Tatsache, dass er sich seine <strong>Stelle</strong> fortan mit einer Frau <strong>teilen</strong> würde, konnte er sich nur schwer abfinden und stand bald mit zwei Kollegen im <strong>Austausch</strong>, die ebenfalls an der DNA forschten: <strong>Francis Crick</strong> und <strong>James Watson</strong> von der Cambridge Universität.'
          },
          {
            content: 'Den drei Wissenschaftlern ging es bei der Erforschung der DNA hauptsächlich um den <strong>Ruhm</strong> und den wahrscheinlichen Gewinn des <strong>Nobelpreises</strong> fü ein korrektes Modell des Aufbaus der DNA. Um ihr Ziel zu erreichen scheuten sie nicht davor zurück, die <strong>Forschungsergebnisse</strong> von Franklin zu <strong>stehlen</strong>. So erwischte sie <strong>Watson</strong> einmal dabei, wie er sich durch ihre <strong>Unterlagen wühlte</strong> und sich Notizen machte. Nach der Vorstellung eines <strong>fehlerhaften Modells</strong> erinnerte sich Watson in seinem Buch »Die Doppelhelix« an die <strong>Ursache</strong> für die Fehler: »Bei dieser Gelegenheit kam die peinlich Tatsache heraus, dass mich meine Erinnerung an Rosys Angaben über den Wassergehalt ihrer DNA-Moleküle getäuscht haben musste«.'
          },
          {
            content: 'Einige Monate danach gelang Franklin dann der <strong>Durchbruch</strong> mit dem <strong>Foto 51</strong>, das eindeutig zeigte, dass die Struktur der DNA eine <strong>Doppelhelix</strong> ist. In den folgenden Monaten berechnete sie die genaue Zusammensetzung der Moleküle und reichte ihren Bericht <strong>1952</strong> beim <strong>Medical Research Council</strong> ein.'
          }
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Franklin_WatsonuCrick_sw_02.png',
        srcColor: '/images/Franklin_WatsonuCrick_ausg.png',
        alt: 'Schmetterling aus dem Buch Metamorphosis',
          gridColumn: '7 / 13',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '13 / 16',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 2rem 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Watson und Crick mit ihrem DNA-Modell'
          ]
        },
        {
          type: 'text',
          gridColumn: '1 / 6',
          gridRow: '13 / 14',
          padding: '3rem 0 0 2rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
                content: 'Während ihre Arbeit geprüft wurde, fertigte <strong>Wilkins</strong> eine <strong>Kopie</strong> des Fotos 51 an und leitete es an Crick und Watson weiter. Zum Verständnis des Fotos reichte ihnen ein Kollege den <strong>unveröffentlichten Bericht Franklins</strong> unter der Hand weiter und so veröffentlichten sie am 25. April 1953 das richtige Modell der DNA. Die Mitarbeit Franklins erwähnten sie nur ganz kurz am Ende des Artikels. 1962 bekamen Watson, Crick und Wilkins den Nobelpreis, wobei <strong>keiner</strong> von ihnen den <strong>großen Anteil Franklins</strong> an den Forschungen je hervorgehoben hat.'
            }
          ]
        }
      ]}
    />
  )
}