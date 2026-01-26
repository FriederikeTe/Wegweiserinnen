import { Link } from 'react-router-dom'
import { useState } from 'react'

function ImageWithHover({ section, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovered(false);
    }, 10000);
    setTimeoutId(id);
  };

  return (
    <div 
      className="relative w-full h-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={section.srcBW || section.src}
        alt={section.alt || `Bild ${index}`}
        className={`w-full h-auto transition-opacity duration-[3000ms] ease-in-out ${section.className || ''}`}
        style={{
          ...(section.style || {}),
          ...(section.rotate && { transform: `rotate(${section.rotate})` }),
          opacity: isHovered ? 0 : 1
        }}
      />
      
      {section.srcColor && (
        <img 
          src={section.srcColor}
          alt={section.alt || `Bild ${index}`}
          className={`w-full h-auto absolute top-0 left-0 transition-opacity duration-[4000ms] ease-in-out ${section.className || ''}`}
          style={{
            ...(section.style || {}),
            ...(section.rotate && { transform: `rotate(${section.rotate})` }),
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0
          }}
        />
      )}
    </div>
  );
}

export default function InfoPageLayout({
  title, 
  subtitle = '',
  titlePosition = { top: '3rem', left: '9rem' },
  subtitlePosition = { top: '7rem', left: '15rem' },
  backgroundColor = 'bg-white',
  backButtonColor = '#991b1b',
  headerImage,
  headerImageSize = 'cover',
  headerImagePosition = 'center',
  headerImageOpacity = '1',
  headerImageRotate = '0deg',
  headerImageOffset = { top: '0', left: '0', right: '0', bottom: '0' },
  headerImageWidth = '100%',
  headerImageHeight = '100%',
  headerHeight = '85vh',  // Wie hoch der Header-Bereich sein soll
  sections = [],
  showBackButton = true
}) {
  return (
    <div className={`min-h-screen ${backgroundColor} relative`}>
      {/* Back Button */}
      {showBackButton && (
        <Link 
          to="/" 
          className="fixed top-4 left-4 md:top-6 md:left-8 z-50 hover:opacity-60 transition-opacity"
        >
          <svg className="w-16 h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px]" viewBox="0 0 120 120">
            <defs>
              <radialGradient id={`fadeGradient-${backButtonColor.replace('#', '')}`}>
                <stop offset="0%" stopColor={backButtonColor} stopOpacity="1" />
                <stop offset="15%" stopColor={backButtonColor} stopOpacity="0.95" />
                <stop offset="30%" stopColor={backButtonColor} stopOpacity="0.8" />
                <stop offset="45%" stopColor={backButtonColor} stopOpacity="0.5" />
                <stop offset="60%" stopColor={backButtonColor} stopOpacity="0.2" />
                <stop offset="75%" stopColor={backButtonColor} stopOpacity="0.05" />
                <stop offset="90%" stopColor={backButtonColor} stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="60" cy="60" r="55" fill={`url(#fadeGradient-${backButtonColor.replace('#', '')})`} />
          </svg>
        </Link>
      )}

      {/* ALLES im Grid - Desktop */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-0 relative" style={{ 
          gridAutoRows: 'minmax(100px, auto)',
          /*minHeight: '200vh'*/
        }}>
          
          {/* Header Background Image - als Grid-Element */}
          {headerImage && (
            <div 
              className="absolute z-0"
              style={{
                gridColumn: '1 / 13',
                gridRow: `1 / span ${Math.ceil(parseInt(headerHeight) / 50)}`,
                top: headerImageOffset.top || '0',
                left: headerImageOffset.left || '0',
                width: headerImageWidth,
                height: headerImageHeight,
                opacity: headerImageOpacity,
                transform: `rotate(${headerImageRotate})`,
                pointerEvents: 'none'
              }}
            >
              <img 
                src={headerImage} 
                alt="Header" 
                className="w-full h-full"
                style={{
                  objectFit: headerImageSize,
                  objectPosition: headerImagePosition
                }}
              />
            </div>
          )}
          
          {/* Title - als Grid-Element */}
          <div 
            className="absolute z-30"
            style={{
              gridColumn: '1 / 13',
              gridRow: '1',
              top: titlePosition.top || '3rem',
              left: titlePosition.left || '9rem'
            }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-andada text-black max-w-4xl md:max-w-5xl bg-white/95 md:bg-white p-2">
              {title}
            </h1>
          </div>
          
          {/* Subtitle - als Grid-Element */}
          {subtitle && (
            <div 
              className="absolute z-30"
              style={{
                gridColumn: '1 / 12',
                gridRow: '1 / 2',
                top: subtitlePosition.top || '7rem',
                left: subtitlePosition.left || '15rem'
              }}
            >
              <p className="text-xs md:text-sm leading-relaxed font-andada text-black bg-white/95 md:bg-white p-2 max-w-xl md:max-w-xl">
                {subtitle}
              </p>
            </div>
          )}

          {/* Sections - als Grid-Elemente */}
          {sections.map((section, index) => {
            // TEXT SECTION
            if (section.type === 'text') {
              return (
                <div
                  key={index}
                  className="font-andada"
                  style={{
                    gridColumn: section.gridColumn || 'span 6',
                    gridRow: section.gridRow || 'auto',
                    padding: section.padding || '2rem',
                    zIndex: section.zIndex || 1,
                    position: 'relative'
                  }}
                >
                  {section.heading && (
                    <h2 className={`${section.headingSize || 'text-3xl'} font-bold mb-6 font-andada`}>
                      {section.heading}
                    </h2>
                  )}
                  
                  {section.paragraphs.map((para, i) => {
                    const content = typeof para === 'string' ? para : para.content;
                    const paraSize = typeof para === 'object' ? para.size : undefined;
                    const paraLineHeight = typeof para === 'object' ? para.lineHeight : undefined;
                    const paraClassName = typeof para === 'object' ? para.className : '';
                    
                    return (
                      <p 
                        key={i}
                        className={`text-lg font-andada text-black mb-4 ${paraClassName}`}
                        style={{ 
                          fontSize: paraSize,
                          lineHeight: paraLineHeight || section.lineHeight || '1.7',
                          hyphens: 'auto',
                          WebkitHyphens: 'auto',
                          MsHyphens: 'auto'
                        }}
                        lang="de"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    );
                  })}
                </div>
              );
            }

            // IMAGE SECTION
            if (section.type === 'image') {
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    gridColumn: section.gridColumn || 'span 4',
                    gridRow: section.gridRow || 'auto',
                    padding: section.padding || '1rem',
                    zIndex: section.zIndex || 1,
                    display: 'flex',
                    flexDirection: section.captionPosition === 'below' ? 'column' : 
                                   section.captionPosition === 'above' ? 'column-reverse' :
                                   section.captionPosition === 'left' ? 'row-reverse' : 'row',
                    gap: section.captionGap || '1rem',
                    alignItems: section.captionAlign === 'bottom' ? 'flex-end' : 'flex-start'
                  }}
                >
                  {/* Image */}
                  <div 
                    className={section.size || 'w-full'}
                    style={{
                      width: section.customWidth || undefined,
                      transform: section.rotate ? `rotate(${section.rotate})` : undefined
                    }}
                  >
                    {section.srcColor ? (
                      <ImageWithHover section={section} index={index} />
                    ) : (
                      <img 
                        src={section.src}
                        alt={section.alt || `Bild ${index}`}
                        className="w-full h-auto"
                        style={{
                          ...(section.style || {})
                        }}
                      />
                    )}
                  </div>

                  {/* Caption */}
                  {section.caption && section.caption.length > 0 && (
                    <div 
                      className="text-xs text-black font-andada italic"
                      style={{
                        lineHeight: section.captionLineHeight || '1.4',
                        maxWidth: section.captionWidth || '60vw'
                      }}
                    >
                      {Array.isArray(section.caption) 
                        ? section.caption.map((line, i) => (
                            <p key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: line }} />
                          ))
                        : <p dangerouslySetInnerHTML={{ __html: section.caption }} />
                      }
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* Mobile: Stacked Layout (<768px) */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="relative h-[50vh] overflow-hidden mb-8">
          {headerImage && (
            <img 
              src={headerImage} 
              alt="Header" 
              className="w-full h-full object-contain"
              style={{ opacity: headerImageOpacity }}
            />
          )}
          
          <div className="absolute top-4 left-4 right-4 z-10">
            <h1 className="text-3xl font-bold font-andada text-black bg-white/95 p-2 mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs leading-relaxed font-andada text-black bg-white/95 p-2">
                {subtitle}
              </p>
            )}
          </div>
        </header>

        {/* Mobile Sections */}
        {sections.map((section, index) => {
          if (section.type === 'text') {
            return (
              <div key={index} className="py-8 px-4">
                {section.heading && (
                  <h2 className="text-2xl font-bold mb-4 font-andada">
                    {section.heading}
                  </h2>
                )}
                
                {section.paragraphs.map((para, i) => {
                  const content = typeof para === 'string' ? para : para.content;
                  
                  return (
                    <p 
                      key={i}
                      className="text-base font-andada text-black mb-3"
                      style={{ 
                        hyphens: 'auto',
                        WebkitHyphens: 'auto',
                        MsHyphens: 'auto',
                        lineHeight: '1.7'
                      }}
                      lang="de"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  );
                })}
              </div>
            );
          }

          if (section.type === 'image') {
            return (
              <div key={index} className="py-4 px-4">
                <div className="w-full max-w-full overflow-hidden">
                  {section.srcColor ? (
                    <ImageWithHover section={{...section, rotate: undefined}} index={index} />
                  ) : (
                    <img 
                      src={section.src}
                      alt={section.alt || `Bild ${index}`}
                      className="w-full h-auto"
                    />
                  )}
                </div>
                
                {section.caption && section.caption.length > 0 && (
                  <div className="text-xs text-black font-andada italic mt-2">
                    {Array.isArray(section.caption) 
                      ? section.caption.map((line, i) => (
                          <p key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: line }} />
                        ))
                      : <p dangerouslySetInnerHTML={{ __html: section.caption }} />
                    }
                  </div>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}