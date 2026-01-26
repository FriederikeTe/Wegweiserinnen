import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TextHeap() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeHoverRegion, setActiveHoverRegion] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const leaveTimeoutRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const regionLeaveTimeoutRef = useRef(null);

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredId(null);
    }, 100);
    
    // Region-Timeout mit längerer Verzögerung
    if (regionLeaveTimeoutRef.current) {
      clearTimeout(regionLeaveTimeoutRef.current);
    }
    regionLeaveTimeoutRef.current = setTimeout(() => {
      setActiveHoverRegion(null);
    }, 800);
  };

  const handleMouseEnter = (id) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    if (regionLeaveTimeoutRef.current) {
      clearTimeout(regionLeaveTimeoutRef.current);
    }
    
    const item = texts.find(t => t.id === id);
    const leftPos = parseFloat(item.left);
    const topPos = parseFloat(item.top);
    
    // Definiere Region (grob nach Position)
    const region = `${Math.floor(leftPos / 20)}-${Math.floor(topPos / 20)}`;
    
    // Wenn wir in der gleichen Region sind, sofort hovern
    if (activeHoverRegion === region) {
      setHoveredId(id);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    } else {
      // Neue Region - mit Verzögerung
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredId(id);
        setActiveHoverRegion(region);
      }, 400);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollX(window.scrollX);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const styles = {
    big: { 
      className: "text-[0.875rem] font-bold text-black font-andada text-center",
      lineSpacing: '-5px',
      scaleFactor: 2.2,
      expandedFontSize: '2.2rem' // 0.875 * 2.2
    },
    small: { 
      className: "text-[0.6rem] font-light text-black font-andada text-center",
      lineSpacing: '-3px',
      scaleFactor: 2.2,
      expandedFontSize: '1.5rem' // 0.6 * 2.2
    },
    medium: { 
      className: "text-[0.7rem] font-light text-black font-andada text-center",
      lineSpacing: '-4px',
      scaleFactor: 2.2,
      expandedFontSize: '1.8rem' // 0.7 * 2.2
    },
    xmedium: {
      className: "text-[0.75rem] font-normal text-black font-andada text-center",
      lineSpacing: '-5px',
      scaleFactor: 2.2,
      expandedFontSize: '1.8rem' // 0.7 * 2.2
    }
  };
  
  const texts = [
    // Haufen 1 - Links oben
    { id: 1, text: ["»Die Frau hat Jahrhundertelang als Lupe gedient,", "welche die magische und köstliche Fähigkeit besaß,", "den Mann doppelt so groß zu zeigen wie er von Natur aus ist.«", "– Virginia Woolf"], top: "17%", left: "8%", style: "big" },
    { id: 2, text: ["»Wenn das Recht einer jungen Frau auf Unversehrtheit wirklich ernst genommen würde,", "gäbe es Selbstverteidigung für Frauen als Schulfach.", "Stattdessen lernen wir nach wie vor Anpassung.«", "– Luisa Francia"], top: "16%", left: "14%", style: "small" },
    { id: 3, text: [""], top: "11%", left: "17%", style: "medium" },
    { id: 4, text: ["»Wüsstest du auch nur um die Hälfte der außergewöhnlichen", "unbesonnen Dinge, die ich tue, du würdest gewiss dem Gedanken", "zuneigen, dass irgendein Zauber auf mir liegt.«", "– Ada Lovelace"], top: "19%", left: "11%", style: "small", link: "/lovelace", circleColor: "#a855f7" },
    { id: 5, text: [""], top: "14%", left: "11%", style: "big" },
    { id: 6, text: [""], top: "10.5%", left: "6%", style: "xmedium" },
    
    // Haufen 2 - Mitte oben
    { id: 7, text: ["»Zu wissen, dass die Zeitgenossinnen meiner Großmutter", "nicht nur brave Ehefrauen, Mütter, Hausfrauen und Köchinnen waren,", "sondern vielmehr eine Generation potentieller Freiheitskämpferinnen,", "gibt ihrem Dasein eine neue Dimension und meinem Leben neue Kraft.«", "– Midge Mackenzie"], top: "12%", left: "45%", style: "medium" },
    { id: 8, text: [""], top: "12%", left: "46%", style: "big" },
    { id: 9, text: [""], top: "15%", left: "47%", style: "small" },
    { id: 10, text: ["»... many Englishwomen have become remarkably proficient,", "equal, indeed, to any but the very best of the other sex.«", "– Madge Syers"], top: "11%", left: "45.5%", style: "small", link: "/syers", circleColor: "#a855f7" },
    { id: 11, text: [""], top: "14%", left: "46.5%", style: "xmedium" },
    { id: 12, text: ["»Frauen werden nicht frei sein,", "solange ihre Unterwerfung als sexy gilt.«", "– Sheila Jeffreys"], top: "9%", left: "51%", style: "big" },
    { id: 13, text: [""], top: "13%", left: "44.5%", style: "small" },
    
    // Haufen 3 - Rechts oben
    { id: 14, text: ["»Männer haben Angst, dass Frauen über sie lachen.", "Frauen haben Angst, dass Männer sie umbringen.«", "– Margaret Atwood"], top: "17%", left: "72%", style: "big" },
    { id: 15, text: [""], top: "22%", left: "76%", style: "xmedium" },
    { id: 16, text: ["»Wir sehen die Dinge nicht, wie sie sind,", "wir sehen sie so, wie wir sind.«", "– Anais Nin"], top: "21.5%", left: "77%", style: "small" },
    { id: 17, text: [""], top: "23%", left: "75.5%", style: "small" },
    { id: 18, text: [""], top: "24%", left: "76.5%", style: "big" },
    { id: 19, text: ["»Ich habe mich von Jugend an", "mit der Erforschung der Insekten beschäftigt.«", "– Maria Sibylla Merian"], top: "20%", left: "78%", style: "medium", link: "/merian", circleColor: "#a855f7" },
    { id: 20, text: [""], top: "19%", left: "74.5%", style: "small" },
    
    // Haufen 4 - Links Mitte
    { id: 21, text: [""], top: "35%", left: "6%", style: "medium" },
    { id: 22, text: ["»Es war wichtig, nicht rot zu werden,", "und das lernte ich schnell. Meine weiblichen Studienfreunde", "nahmen an, dass ich das Studienfach wechseln würde.", "Wenn ich nicht so sicher gewesen wäre,", "dass ich Radioastronomin werden wollte,", "hätte ich es vielleicht getan!«", "– Jocelyn Bell Burnell"], top: "37%", left: "8%", style: "small" },
    { id: 23, text: [""], top: "36%", left: "7%", style: "small" },
    { id: 24, text: ["»Wenn Frauen unter Emanzipation die Übernahme", "der männlichen Rolle verstehen, dann sind wir in der Tat verloren.«", "– Germaine Greer"], top: "38%", left: "9%", style: "small" },
    { id: 25, text: ["»Nach wie vor werden Frauen als eine Gefahr gesehen,", "die es einzudämmen gilt,", "als Wesen mit subversiver Kraft,", "die man in der Defensive halten und ausschließen muss.«", "– Fatima Mernissi"], top: "39%", left: "7%", style: "xmedium" },
    { id: 26, text: [""], top: "35.5%", left: "6%", style: "big" },
    { id: 27, text: [""], top: "40%", left: "11%", style: "small" },
    { id: 28, text: ["»Männer haben Angst, dass Frauen über sie lachen.", "Frauen haben Angst, dass Männer sie umbringen.«", "– Margaret Atwood"], top: "34.5%", left: "12%", style: "medium" },
    
    // Haufen 5 - Zentrum
    { id: 29, text: [""], top: "45%", left: "48%", style: "big" },
    { id: 30, text: ["»Es gibt keine Freiheit der Männer,", "wenn es nicht eine Freiheit der Frauen gibt.«", "– Hedwig Dohm"], top: "47%", left: "49%", style: "medium" },
    { id: 31, text: ["»Lasst uns von Frauen sprechen,", "die gut und wertvoll sind, und ihre großen Tugenden loben,", "denn sie verdienen Ehrung.«", "– Christine de Pizan"], top: "46%", left: "40%", style: "small", link: "/pizan", circleColor: "#a855f7" },
    { id: 32, text: ["»Allein bin ich und will es immer bleiben«", "– Christine de Pizan"], top: "49%", left: "43.5%", style: "small", link: "/pizan", circleColor: "#a855f7" },
    { id: 33, text: [""], top: "49%", left: "49.5%", style: "big" },
    { id: 34, text: ["»Der unbezahlte Zustand der Hausarbeit war die stärkste Waffe,", "um die verbreitete Annahme zu bekräftigen, dass Hausarbeit keine Arbeit sei – und so", "Frauen daran zu hindern, dagegen anzukämpfen.«", "– Silvia Federici"], top: "43%", left: "35%", style: "medium" },
    { id: 35, text: [""], top: "50%", left: "47.5%", style: "small" },
    { id: 36, text: ["»Ich möchte, dass Frauen sich großen", "und schwierigen Aufgaben zuwenden.", "Sie sollen nicht dauernd an der Küste herumlungern,", "aus Angst davor in See zu stechen.«", "– Ethel Smyth"], top: "48%", left: "28%", style: "big" },
    { id: 37, text: [""], top: "51%", left: "50.5%", style: "medium" },
    { id: 38, text: [""], top: "43.5%", left: "48.5%", style: "small" },
    
    // Haufen 6 - Rechts Mitte
    { id: 39, text: ["»Der Frau bleibt kein anderer Ausweg,", "als an ihrer Befreiung zu arbeiten.", "Diese Befreiung kann nur eine kollektive sein.«", "– Simone de Beauvoir"], top: "41%", left: "81%", style: "medium" },
    { id: 40, text: [""], top: "42%", left: "79%", style: "big" },
    { id: 41, text: ["»Das Patriarchat ist ein Richter, der uns bei Geburt schon verurteilt", "und unsere Strafe ist Gewalt, die du nicht siehst.", "Das Patriarchat ist ein Richter, der uns bei Geburt schon verurteilt", "und unsere Strafe ist die Gewalt, die du schon sehen wirst.«", "Las Tesis"], top: "40%", left: "78%", style: "small" },
    { id: 42, text: [""], top: "43%", left: "78.5%", style: "small" },
    { id: 43, text: [""], top: "44%", left: "79.5%", style: "medium" },
    { id: 44, text: ["»Ich weiß, ich könnte etwas werden,", "aber was soll man machen in Unterröcken?", "Die Heirat ist die einzige Karriere der Weiber,", "die Männer haben sechsunddreißig Chancen,", "das Weib nur eine.«", "– Marie Bashkirtseff"], top: "42.5%", left: "74%", style: "big" },
    { id: 45, text: [""], top: "39.5%", left: "77.5%", style: "small" },
    
    // Haufen 7 - Links unten
    { id: 46, text: [""], top: "75%", left: "2%", style: "big" },
    { id: 47, text: ["»Science and everyday life cannot and should not be separated.«", "– Rosalind Franklin"], top: "77%", left: "4%", style: "medium", link: "/franklin", circleColor: "#a855f7" },
    { id: 48, text: [""], top: "76%", left: "1%", style: "small" },
    { id: 49, text: ["»Macht und Gewalt sind Gegensätze.", "Wo die eine absolut herrscht, ist die andere nicht vorhanden.«", "– Hannah Arendt "], top: "78%", left: "3%", style: "small" },
    { id: 50, text: [""], top: "79%", left: "6%", style: "big" },
    { id: 51, text: ["»Selbst denken ist der höchste Mut.", "Wer wagt selbst zu denken,", "der wird auch selbst handeln.«", "–Bettina von Arnim"], top: "75.5%", left: "4%", style: "xmedium" },
    { id: 52, text: ["»Gegen den Rückschritt gibt es nur ein Mittel:", "immer wieder von vorn anfangen.«", "– Teresa von Avila"], top: "80%", left: "2%", style: "small" },
    { id: 53, text: [""], top: "74.5%", left: "2%", style: "medium" },
    
    // Haufen 8 - Mitte unten
    { id: 54, text: [""], top: "70%", left: "50%", style: "medium" },
    { id: 55, text: ["»Man will die sittliche Natur fördern,", "und man verdammt die Hälfte der Menschheit zur Dienerin", "der sinnlichen Natur. Was ist diese Häuslichkeit anderes", "als ein stetes Abmühen für die niedersten Bedürfnisse?«", "– Louise Dittmar"], top: "72%", left: "56%", style: "big" },
    { id: 56, text: [""], top: "71%", left: "52%", style: "small" },
    { id: 57, text: [""], top: "73%", left: "50.5%", style: "small" },
    { id: 58, text: ["»But an Englisch major who knew shorthand was somethiing else again.", "Everybody would want her.", "She would be in demand among all the up-and-coming young men", "and she would transcribe thriiling letter after thrilling leter.", "The trouble was, I hated the idea to serve men in any way.", "I wanted to dictate my own thrilling letters.«", " – Sylvia Plath, The Bell Jar"], top: "74%", left: "51.5%", style: "medium" },
    { id: 59, text: [""], top: "70.5%", left: "53%", style: "big" },
    { id: 60, text: ["»Die jungen Intellektuellen rufen »Revolution, Revolution!«,", "aber ich sage, die Revolution muss in unseren Häusern beginnen,", "indem die Gleichberechtigung für alle Frauen erlangt wird.«", "– Qiu Jin"], top: "69.5%", left: "49.5%", style: "small" },
    
    // Haufen 9 - Rechts unten
    { id: 61, text: [""], top: "85%", left: "72%", style: "big" },
    { id: 62, text: [""], top: "87%", left: "73%", style: "medium" },
    { id: 63, text: ["»I knew if I quit, nobody would ever believe that", "women had the capcity to run 26-plus miles.", "If I quit, everybody would say it was a publicity stunt.", "If I quit, it would set women's sports back, way back", "instead of forward.", "If I quit, I'd never run Boston.", "If I quit, Jock Semple and all those like him would win.«", "– Kathrine Switzer"], top: "86%", left: "68%", style: "small" },
    { id: 64, text: [""], top: "88%", left: "72.5%", style: "small" },
    { id: 65, text: ["»Man Makes the Beads of Life", "but Woman Must Thread Them.«", "– Frances MacDonald"], top: "89%", left: "74.5%", style: "big" , link: "/macDonald", circleColor: "#a855f7"},
    { id: 66, text: [""], top: "85.5%", left: "75%", style: "medium" },
    { id: 67, text: ["»Die Frauenarbeit abschaffen oder auch nur beschränken wollen,", "das läuft darauf hinaus", "die Frau zu dauernder ökonomischer Abhängigkeit,", "zur gesellschaftlichen Knechtung und Ächtung,", "zur Prostitution in- und außerhalb der Ehe zu verurteilen.«", "– Clara Zetkin"], top: "90%", left: "67%", style: "small" },
    { id: 68, text: [""], top: "84.5%", left: "73.5%", style: "medium" },
    
    // Zusätzliche verstreute Texte
    { id: 69, text: [""], top: "25%", left: "35%", style: "big" },
    { id: 70, text: ["»Wie der Arbieter vom Kapitalisten", "unterjocht wird so die Frau vom Mann;", "und sie wird unterjocht bleiben, solange sie", "nicht wirtschaftlich unabhängig dasteht.«", "– Clara Zetkin"], top: "27%", left: "36%", style: "small" },
    { id: 71, text: ["»Man kommt sich auf dem Gebiet der Frauenfrage immer wie ein Wiedekäuer vor.", "Das liegt an der Taktik der Gegner.«", "– Hedwig Dohm"], top: "55%", left: "65%", style: "medium" },
    { id: 72, text: ["We realize that the only people who care enough about us", "to work consistently for our liberation are us.", "– Combahee River Collective"], top: "57%", left: "66%", style: "small", link: "Combahee", circleColor: "#a855f7"},
    { id: 73, text: [""], top: "30%", left: "60%", style: "big" },
    { id: 74, text: ["»Mann bsit du im Stande gerecht zu sein?", "Es ist eine Frau, die dir diese Frage stellt; dieses", "Recht wenigstens kannst du ihr nicht nehmen.", "Sage mir, wer hat dir die souveräne Macht verliehen,", "mein Geschlecht zu unterdrücken?«", "– Olympe de Gouges"], top: "32%", left: "61%", style: "medium" },
    { id: 75, text: [""], top: "60%", left: "20%", style: "small" },
    { id: 76, text: ["»Weder Herkunft noch Geschlecht setzen dem Genie Grenzen.«", "– Charlotte Bronte"], top: "62%", left: "21%", style: "big" },
    { id: 77, text: [""], top: "22%", left: "30%", style: "medium" },
    { id: 78, text: ["»Ich zeifle,", "ob ich je heiraten werde.", "Ich glaube, dass eine Frau", "Karriere machen kann, wie ein Mann.«", "– Mileva Maric"], top: "24%", left: "31%", style: "small" },
    { id: 79, text: [""], top: "82%", left: "45%", style: "big" },
    { id: 80, text: ["»Schon eine Frau zu sein ist hier ein halbes Verbrechen.«", "– Lise Meitner"], top: "90%", left: "20%", style: "medium" },
    { id: 81, text: ["Impressum"], top: "95%", left: "90%", style: "big", isImpressum: true },
  ];

const getTransform = (item) => {
  if (expandedId === item.id) {
    const scaleFactor = styles[item.style].scaleFactor;
    return `translate(-50%, -50%) scale(${scaleFactor})`;
  }
  
  // Wenn expandedId gesetzt → alle anderen zu den Rändern verteilen
  if (expandedId !== null && expandedId !== item.id) {
    const leftPos = parseFloat(item.left);
    const topPos = parseFloat(item.top);
    
    // Berechne wo sich der Text aktuell befindet (in Pixel)
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
    const containerWidth = viewportWidth; // 100vw
    const containerHeight = viewportHeight * 2; // 200vh
    
    const currentX = (leftPos / 100) * containerWidth;
    const currentY = (topPos / 100) * containerHeight;
    
    const margin = viewportWidth * 0.05; // 5% Abstand
    const marginRight = viewportWidth * 0.20; // 15% Abstand rechts (wegen Textbreite)
    
    let targetX = currentX;
    let targetY = currentY;
    
    // Einfache Logik: Basierend auf Prozent-Position
    // Horizontale Verteilung hat Priorität
    if (leftPos < 40) {
      // Links → zum linken Rand
      targetX = scrollX + margin;
      // Y-Position beibehalten
    } else if (leftPos > 60) {
      // Rechts → zum rechten Rand (mit mehr Abstand)
      targetX = scrollX + viewportWidth - marginRight;
      // Y-Position beibehalten
    } else if (topPos < 40) {
      // Mitte-oben → zum oberen Rand
      targetY = scrollY + margin;
      // X-Position beibehalten
    } else if (topPos > 60) {
      // Mitte-unten → zum unteren Rand
      targetY = scrollY + viewportHeight - margin;
      // X-Position beibehalten
    } else {
      // Zentrum → zum nächsten Rand
      const distToLeft = currentX - scrollX;
      const distToRight = (scrollX + viewportWidth) - currentX;
      const distToTop = currentY - scrollY;
      const distToBottom = (scrollY + viewportHeight) - currentY;
      
      const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);
      
      if (minDist === distToLeft) {
        targetX = scrollX + margin;
      } else if (minDist === distToRight) {
        targetX = scrollX + viewportWidth - marginRight;
      } else if (minDist === distToTop) {
        targetY = scrollY + margin;
      } else {
        targetY = scrollY + viewportHeight - margin;
      }
    }
    
    // Berechne die Translation in Pixel
    const pushX = targetX - currentX;
    const pushY = targetY - currentY;
    
    return `translate(${pushX}px, ${pushY}px) scale(0.5)`;
  }
    
  // Nur wenn activeHoverRegion gesetzt UND kein Text expandiert → nahe Texte weichen aus
  if (activeHoverRegion !== null && hoveredId !== null && hoveredId !== item.id && expandedId === null) {
    const leftPos = parseFloat(item.left);
    const topPos = parseFloat(item.top);
    
    const hoveredItem = texts.find(t => t.id === hoveredId);
    const hoveredLeft = parseFloat(hoveredItem.left);
    const hoveredTop = parseFloat(hoveredItem.top);
    
    const deltaX = leftPos - hoveredLeft;
    const deltaY = topPos - hoveredTop;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Nahe Texte wegdrücken - stärker und mit größerem Radius
    if (distance < 10) {
      let pushX = deltaX * 30;
      let pushY = deltaY * 20;
      
      // Berechne die tatsächliche Position des Elements
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Responsiver Abstand zum Rand (5% der Viewport-Breite/Höhe)
      const marginX = viewportWidth * 0.05;
      const marginY = viewportHeight * 0.05;
      
      // Aktuelle Position in Pixel
      const currentX = (leftPos / 100) * viewportWidth;
      const currentY = (topPos / 100) * viewportHeight;
      
      // Neue Position nach Push
      const newX = currentX + pushX;
      const newY = currentY + pushY;
      
      // Begrenze auf Viewport
      if (newX < marginX) {
        pushX = marginX - currentX;
      } else if (newX > viewportWidth - marginX) {
        pushX = (viewportWidth - marginX) - currentX;
      }
      
      if (newY < marginY) {
        pushY = marginY - currentY;
      } else if (newY > viewportHeight - marginY) {
        pushY = (viewportHeight - marginY) - currentY;
      }
      
      return `translate(${pushX}px, ${pushY}px) scale(0.75)`;
    }
  }
  
  // Der gehoverte Text selbst wird größer (nur wenn kein Text expandiert)
  if (hoveredId === item.id && expandedId === null) {
    return 'translate(0, 0) scale(1.15)';
  }
  
  return 'translate(0, 0) scale(1)';
};

  return (
    <div className="w-[100vw] min-h-[200vh] h-screen overflow-hidden bg-stone-50 relative">
      {/* Kleiner dekorativer Kreis oben links hinter dem Titel */}
      <div style={{
        position: 'fixed',
        top: '-12vh',
        left: '-6vw',
        zIndex: 0,
        width: '370px',
        height: '370px',
        pointerEvents: 'none'
      }}>
        <svg width="370" height="370" viewBox="0 0 150 150">
          <defs>
            <radialGradient id="fadeGradient-topleft">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="15%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#a855f7" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#a855f7" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="75%" stopColor="#a855f7" stopOpacity="0.15" />
              <stop offset="90%" stopColor="#a855f7" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="75" cy="75" r="70" fill="url(#fadeGradient-topleft)" />
        </svg>
      </div>

      <div className="fixed top-16 left-20 z-[10000] pointer-events-none">
        <h1 className="text-4xl font-bold font-andada">
          Wegweiserinnen
        </h1>
        <p className="text-sm font-andada -m-1 ml-24">
          Zitate erfolgreicher Frauen und ihre Geschichten
        </p>
      </div>

      {/* Unsichtbarer Hintergrund zum Schließen */}
      {expandedId !== null && (
        <div 
          className="absolute inset-0 z-[9998] cursor-none"
          style={{ cursor: 'none' }}
          onClick={() => {
            setExpandedId(null);
            setIsAnimating(false);
          }}
        />
      )}

      {texts.map((item) => (
        <div
  key={item.id}
  className="absolute"
  style={{ 
  top: expandedId === item.id 
    ? (item.isImpressum 
        ? `${scrollY + window.innerHeight * 0.35}px`
        : `${scrollY + window.innerHeight / 2}px`)
    : item.top,
  left: expandedId === item.id 
    ? `${scrollX + window.innerWidth / 2}px`
    : item.left,
  zIndex: expandedId === item.id ? 10000 : (hoveredId === item.id ? 9999 : 1),
  transform: getTransform(item),
  filter: !isAnimating && expandedId === item.id ? 'contrast(1.1) blur(0px)' : 'none',
  imageRendering: !isAnimating && expandedId === item.id ? 'crisp-edges' : 'auto',
    transition: expandedId === item.id
      ? (item.isImpressum 
          ? 'transform 1.5s ease-out, z-index 0s, top 1.5s ease-out, left 1.5s ease-out'  // Impressum: sofort zur Position, dann vergrößern
          : 'transform 1.5s ease-out 1.2s, z-index 0s, top 1.5s ease-out 1.2s, left 1.5s ease-out 1.2s')
      : hoveredId === item.id 
      ? 'transform 1.2s ease-out, z-index 0s, top 1.2s ease-out, left 1.2s ease-out'
      : 'transform 1.2s ease-out, z-index 0s, top 1.2s ease-out, left 1.2s ease-out',
    pointerEvents: expandedId !== null ? 'none' : (hoveredId !== null && hoveredId !== item.id ? 'none' : 'auto'),
  }}
  onMouseEnter={() => handleMouseEnter(item.id)}
  onMouseLeave={handleMouseLeave}
  onClick={() => {
  if (expandedId !== item.id) {
    // Setze scroll Position SOFORT
    const currentScrollY = window.scrollY;
    const currentScrollX = window.scrollX;
    setScrollY(currentScrollY);
    setScrollX(currentScrollX);
    
    // Kleine Verzögerung damit scrollY/scrollX im State sind
    requestAnimationFrame(() => {
      setExpandedId(item.id);
      setIsAnimating(true);
      
      // Impressum braucht kürzere Animation-Zeit
      const animationDuration = item.isImpressum ? 1100 : 2700;
      
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          const textDiv = document.querySelector(`[data-item-id="${item.id}"] > div`);
          if (textDiv) textDiv.style.opacity = '1';
        }, 50);
      }, animationDuration);
    });
  }
}}
>
<div 
  className={`${styles[item.style].className} tracking-wide`}
>
  {Array.isArray(item.text) 
    ? item.text.map((line, i) => (
        <div key={i} style={{ marginTop: i > 0 ? styles[item.style].lineSpacing : '0' }}>
          {line}
        </div>
      ))
    : item.text
  }

{/* Impressums-Inhalt nur anzeigen wenn expandiert */}
  {item.isImpressum && expandedId === item.id && !isAnimating && (
    <div 
      className=" text-[0.7rem] font-light text-black font-andada text-center leading-relaxed max-w-3xl mx-auto"
      style={{ 
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0,
        animation: 'fadeIn 0.5s ease-in forwards',
        animationDelay: '0.5s',
        lineHeight: '1.3',
        width: '800px'
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      
      <div className="mb-4">
        HAW Hamburg<br />
        Department Design<br />
        Bachelorthesis<br />
        Friederike Temme<br />
        Kommunikationsdesign<br />
        Matrikelnummer: 2643634<br />
        Erstprüfer: Prof. Stefan Stefanescu<br />
        Zweitprüferin: Prof. Gabriele Basch<br />

      </div>
      
    </div>
  )}
</div>

       {/* Kreis für Links */}
          {item.link && (
  <div
    data-circle-id={item.id}
    onClick={(e) => {
      if (expandedId === item.id && !isAnimating) {
        e.stopPropagation();
        navigate(item.link);
      }
    }}
    className={expandedId === item.id && !isAnimating ? "cursor-pointer" : ""}
    style={{
      position: 'absolute',
      bottom: expandedId === item.id ? '-250px' : '-25px',
      right: expandedId === item.id ? '-300px' : '-15px',
      width: expandedId === item.id ? '500px' : '0px',
      height: expandedId === item.id ? '500px' : '0px',
      zIndex: expandedId === item.id ? 9999 : -10,
      transition: expandedId === item.id 
          ? 'all 1.5s ease-out 1.2s, opacity 0.3s ease-out'
          : 'all 0.8s ease-out, opacity 0.3s ease-out',
      opacity: expandedId === item.id ? 1 : 0,
      pointerEvents: expandedId === item.id && !isAnimating ? 'auto' : 'none'
    }}
  >
              <svg 
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
                style={{ 
                  transition: expandedId === item.id 
                    ? 'all 1.5s ease-out 1.2s' 
                    : 'all 0.8s ease-out'
                }}
              >
                <defs>
                  <radialGradient id={`fadeGradient-${item.id}`}>
                    <stop offset="0%" stopColor={item.circleColor || "#000000"} stopOpacity="0.7" />
                    <stop offset="15%" stopColor={item.circleColor || "#000000"} stopOpacity="0.65" />
                    <stop offset="30%" stopColor={item.circleColor || "#000000"} stopOpacity="0.5" />
                    <stop offset="45%" stopColor={item.circleColor || "#000000"} stopOpacity="0.3" />
                    <stop offset="60%" stopColor={item.circleColor || "#000000"} stopOpacity="0.15" />
                    <stop offset="75%" stopColor={item.circleColor || "#000000"} stopOpacity="0.03" />
                    <stop offset="90%" stopColor={item.circleColor || "#000000"} stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="150" cy="150" r="140" fill={`url(#fadeGradient-${item.id})`} />
                
                {/* Unsichtbarer Hover-Bereich in der Mitte */}
                <circle 
                  cx="150" 
                  cy="150" 
                  r="70" 
                  fill="transparent"
                  style={{ pointerEvents: 'all' }}
                  onMouseEnter={() => {
                    if (expandedId === item.id && !isAnimating) {
                      const parentDiv = document.querySelector(`[data-circle-id="${item.id}"]`);
                      if (parentDiv) parentDiv.style.opacity = '0.8';
                    }
                  }}
                  onMouseLeave={() => {
                    if (expandedId === item.id && !isAnimating) {
                      const parentDiv = document.querySelector(`[data-circle-id="${item.id}"]`);
                      if (parentDiv) parentDiv.style.opacity = '1';
                    }
                  }}
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}