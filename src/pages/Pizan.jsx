import { useEffect } from 'react';
import InfoPageLayout from '../components/InfoPageLayout'

export default function Merian() {
      useEffect(() => {
        window.scrollTo(0, 0);  // Scroll nach oben links
      }, []);
  return (
    <InfoPageLayout
      title="Christine de Pizan"
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
      subtitle=" (1364–nach 1429) Die erste Autorin, die von ihrem Schreiben leben konnte"
      headerImage="/images/Pizan_Druckermarke_02_sw.png"
      headerImageSize="cover"
      headerImagePosition="center" 
      headerImageRotate="-20deg"
      headerImageOffset={{
        top: '-1vh',         // 8% der Viewport-Höhe (statt -120px)
        left: '-2vw',       // 25% der Viewport-Breite (statt -400px)
        right: '0',
        bottom: '0'
      }}
      headerImageWidth="30%"
      headerImageHeight="auto"
      sections={[
    {
            type: 'text',
            gridColumn: '5 / 11',      // Spalte 1-7
            gridRow: '3 / 4',         // Zeile 1-2
            padding: '0 0 0 0',
            zIndex: 10,
            lineHeight: '1.2',
            paragraphs: [
            {
                content: 'Christine de Pizan wird <strong>1364</strong> in Venedig geboren und lebte seit 1368 in Paris am <strong>Hof des französischen Königs Charles V.</strong>, dessen Leibarzt und Astrologe ihr Vater Tommaso war. Als junge Witwe überwand sie eine Lebenskrise, behauptete sich als Autorin in dem männlich dominierten literarischen Feld des frühen 15. Jahrhunderts und wurde die <strong>erste Autorin</strong>, die vom <strong>Schreiben</strong> leben konnte.'
            }
          ],
        },
        {
          type: 'text',
          gridColumn: '6 / 12',
          gridRow: '4 / 5',
          padding: '0 0 0 0',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: 'Christine des Pizans berühmtestes Werk ist <strong>»Das Buch von der Stadt der Frauen«</strong> von 1405, das im 20. Jahrhundert über seine Übersetzungen in zahlreichen Sprachen zu einem <strong>Klassiker der Weltliteratur</strong> und immer wieder neu gelesen und interpretiert wird.'
            }
          ]
        },
                {
          type: 'text',
          gridColumn: '6 / 12',
          gridRow: '5 / 6',
          padding: '0 0 0 3rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
                content: 'Sie verfasste zudem Gedichte über Liebe und Trauer und schrieb Erziehungsbücher für junge Ritter und für Frauen aller Schichten (Das Buch von den Drei Tugenden). Mit ihrem Buch vom Frieden, ihrer Biografie des Königs Charles V. und ihren Flugschriften war sie zugleich eine <strong>wichtige politische Stimme</strong> im Frankreich des Hundertjährigen Kriegs.'
            }
          ]
        },
                {
          type: 'text',
          gridColumn: '7 / 12',
          gridRow: '6 / 7',
          padding: '4rem 0 0 0',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: 'Um <strong>1400</strong> entfachte sie den Streit um den zweiten Rosenroman und machte die <strong>geschlechterpolitische Fragwürdigkeit</strong> dieses ›Kultbuchs‹ und seines Autors Jean de Meun öffentlich. Damit wurde sie zu einer der ersten Stimmen in der europäischen <strong>»Querelle des Femmes«</strong>.'
            },
            {
                content: 'Ihre heutige Bekanntheit verdankt sie auch der <strong>Schaffung eines eigenen Bildgedächtnisses</strong>, wie mit ihrem berühmtesten Autorinnenbild <strong>»Junge Frau im blauen Kleid«</strong>, welches sie für Frauen damals unüblich, an einem Schreibpult beim Beschreiben von Buchseiten zeigt. Das Kleid in einem marianischen Blau und die weiße Hörnerhaube dienen in vielen weiteren Bildern als Erkennungsmerkmal.'
            },
            {
                content: 'Wie bei so vielen heute noch bekannten Frauen, waren auch Pizans <strong>Ausgangsbedingungen</strong> sehr günstig, da ihre Familie zum norditaliensichen Landadel gehörte und ihr Vater als Arzt und Gelehrter viel Wissen zu vermitteln hatte. Von diesem <strong>Wissen</strong> hatte sie als Mädchen trotzdem nur einen <strong>beschränkten Zugang</strong>, was sie später oft beklagte.'
            }
          ]
        },
         {
        type: 'image',
        srcBW: '/images/Pizan_Porträt_sw.jpg',
        srcColor: '/images/Pizan_Porträt.jpg',
        alt: 'Porträt Christine de Pizan',
          gridColumn: '1 / 6',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '6 / 8',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '2rem 0 0 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Junge Frau in blauem Kleid, Pizans berühmtestes Autorinnenbild'
          ]
        },
            {
        type: 'image',
        srcBW: '/images/Pizan_WheelofFortune_sw.jpg',
        srcColor: '/images/Pizan_WheelofFortune.jpg',
        alt: 'Porträt Maria Sibylla Merian',
          gridColumn: '7 / 12',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '7 / 9',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 2rem 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Rad des Schicksals, Illustration aus dem Manuskript der Königin Isabeau de Baviére'
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Pizan_StadtderFrauen_sw.jpg',
        srcColor: '/images/Pizan_StadtderFrauen.jpg',
        alt: 'Ast mit Raupe und Schmetterling',
          gridColumn: '7 / 13',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '10 / 12',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '3rem 2rem 0 0',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
            'Illustration von Christine de Pizan, aus dem Buch von der Stadt der Frauen, auch enthalten im Manuskript der Königin'
          ]
        },
        {
        type: 'image',
        srcBW: '/images/Pizan_Buchseite_Queen_sw.jpg',
        srcColor: '/images/Pizan_Buchseite_Queen.jpg',
        alt: 'Buchseite aus dem Queens Manuscript: Christine de Pizan überreicht ihr Buch der Königin',
          gridColumn: '1 / 6',     // Spalte 7-12 (überlappt mit Text!)
          gridRow: '10 / 13',         // Zeile 1-3
          zIndex: 1,                // Hinter dem Text
          padding: '0 0 4rem 2rem',
          size: 'w-full',
          captionPosition: 'below',
          captionGap: '0.5rem',
          captionLineHeight: '1.4',
          caption: [
          'Christine de Pizan übergibt ihr Werk der Königin, Buchseite aus dem Manuskript der Königin'
        ]
        },
         {
          type: 'text',
          gridColumn: '1 / 6',
          gridRow: '8 / 11',
          padding: '2rem 0 0 2rem',
          zIndex: 2,
          lineHeight: '1.2',
          paragraphs: [
            {
              content: '1368 wird Pizans Familie aufgrund des Stellung des Vaters von König Charles V. persönlich im Louvre empfangen und so wächst sie in einer <strong>priviligierten Umgebung</strong> mit Zugang zu der Bibliothek im Louvre, welche eine der größten Bibliotheken Europas war, auf. 1380 heiratet sie mit fünfzehn Jahren den Adeligen Étienne du Castel, mit dem sie drei Kinder bekommt und welcher zehn Jahre später wahrscheinlich an den Folgen der Pest verstirbt. Mit dem Tod des Königs 1380 und dem ihres Vaters 1387 ist sie nach dem Tod ihres Ehemanns <strong>auf sich allein gestellt</strong>.'
            },
            {
              content: 'Rückblickend schreibt sie: <strong>»Damit öffnete sich die Pforte zu unserem Unglück, und ich, die ich noch sehr jung war, wurde hineingestoßen«.</strong>'
            },
            {
              content: 'Über ihren Kampf gegen die Armut und ihrer Situation als Witwe schreibt sie zudem: <strong>»Ach, mein Gott, wenn ich daran denke, wie viele Morgenstunden ich im königlichen Gericht vergeudet habe und dabei im Winter vor Kälte fast erfror – und das alles nur, um meinen Gönnern aufzulauern, sie an meine Anliegen zu erinnern und um Unterstützung zu bitten. Wie oft vernahm ich dort Beschlüsse, die mir Tränen in die Augen trieben, und wie viele Belästigungen und widerliche Blicke, wie viel Spott aus dem Munde angetrunkener Männer musste ich mir dort gefallen lassen! Aber aus Angst, meinen Belangen zu schaden , ließ ich mir nichts anmerken, antwortete nicht (..) oder ich tat so, als hätte ich nicht verstanden.«</strong>'
            },
            {
                content: 'Ihr wohl berühmtestes Gedicht »Seulette suis et seulette vueil estre« (dt. Ich bin allein und ich möchte allein sein) gibt ihren <strong>Einsamkeitserfahrungen</strong> eine vollendete poetische Form.'
            }
          ]
        },
            {
            type: 'text',
            gridColumn: '7 / 12',      // Spalte 1-7
            gridRow: '9 / 10',         // Zeile 1-2
            padding: '2rem 0 0 0',
            zIndex: 10,
            lineHeight: '1.2',
            paragraphs: [
            {
                content: 'Um ihre Familie versorgen zu können, schrieb sie dann zunächst als <strong>Kopistin</strong> fremde Werke ab und beginnt langsam mit dem Erstellen <strong>eigener Werke</strong>, die sie zuerst selber geschrieben hat und später mit steigender Berühmtheit halfen ihr zwei weitere Personen beim Erstellen von Kopien. Ihren <strong>ersten Schritt in die Öffentlichkeit</strong> als Schriftstellerin tätigt sie, indem sie der <strong>französischen Königin Isabeau de Baviére</strong> ihr erstes Werk »Cent Balades« überreicht. Dieser überreicht sie später auch ein Manuskript ihrer Werke, das in der Harleien Collection der British Library unter <strong>Harley MS 4431</strong> gefunden werden kann. '
            },
            {
                content: 'Von 1400–1430 erscheint dann in schneller Abfolge ein umfangreiches Werk in Prosa und Versen und endet mit ihrem <strong>hymnischen Gedicht auf Jeanne d’Arc</strong> Ende 1429. Kurz darauf ist sie wahrscheinlich in einem Kloster verstorben.'
            }
          ],
        },
      ]}
    />
  )
}