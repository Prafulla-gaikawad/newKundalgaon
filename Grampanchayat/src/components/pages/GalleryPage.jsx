import PageHero from '../PageHero';
import kundalgaonImage from '../../images/kundalgaon.jpg';
import IMG1 from '../../images/IMG-20251112-WA0001.jpg';
import IMG2 from '../../images/IMG-20251112-WA0002.jpg';
import IMG3 from '../../images/IMG-20251112-WA0005.jpg';
import IMG4 from '../../images/IMG-20251112-WA0006.jpg';
import IMG5 from '../../images/IMG-20251112-WA0007.jpg';
import IMG6 from '../../images/IMG-20251112-WA0008.jpg';
import IMG7 from '../../images/IMG-20251112-WA0009.jpg';
import IMG8 from '../../images/IMG-20251112-WA0010.jpg';
import IMG9 from '../../images/IMG-20251112-WA0012.jpg';
import IMG10 from '../../images/IMG-20251112-WA0013.jpg';
import IMG11 from '../../images/IMG-20251112-WA0014.jpg';
import IMG12 from '../../images/IMG-20251112-WA0015.jpg';
import IMG13 from '../../images/IMG-20251112-WA0016.jpg';
import IMG14 from '../../images/IMG-20251112-WA0017.jpg';
import IMG15 from '../../images/IMG-20251112-WA0018.jpg';
import IMG16 from '../../images/IMG-20251112-WA0020.jpg';
import IMG17 from '../../images/IMG-20251112-WA0021.jpg';
import IMG18 from '../../images/IMG-20251112-WA0022.jpg';
import IMG19 from '../../images/IMG-20251112-WA0023.jpg';
import IMG20 from '../../images/IMG-20251112-WA0024.jpg';
import IMG21 from '../../images/IMG-20251112-WA0025.jpg';
import IMG22 from '../../images/IMG-20251112-WA0026.jpg';
import IMG23 from '../../images/IMG-20251112-WA0027.jpg';
import IMG24 from '../../images/IMG-20251112-WA0028.jpg';

const GalleryPage = () => {
  const images = [
    { id: 1, src: IMG1, alt: 'Gallery Image 1' },
    { id: 2, src: IMG2, alt: 'Gallery Image 2' },
    { id: 3, src: IMG3, alt: 'Gallery Image 3' },
    { id: 4, src: IMG4, alt: 'Gallery Image 4' },
    { id: 5, src: IMG5, alt: 'Gallery Image 5' },
    { id: 6, src: IMG6, alt: 'Gallery Image 6' },
    { id: 7, src: IMG7, alt: 'Gallery Image 7' },
    { id: 8, src: IMG8, alt: 'Gallery Image 8' },
    { id: 9, src: IMG9, alt: 'Gallery Image 9' },
    { id: 10, src: IMG10, alt: 'Gallery Image 10' },
    { id: 11, src: IMG11, alt: 'Gallery Image 11' },
    { id: 12, src: IMG12, alt: 'Gallery Image 12' },
    { id: 13, src: IMG13, alt: 'Gallery Image 13' },
    { id: 14, src: IMG14, alt: 'Gallery Image 14' },
    { id: 15, src: IMG15, alt: 'Gallery Image 15' },
    { id: 16, src: IMG16, alt: 'Gallery Image 16' },
    { id: 17, src: IMG17, alt: 'Gallery Image 17' },
    { id: 18, src: IMG18, alt: 'Gallery Image 18' },
    { id: 19, src: IMG19, alt: 'Gallery Image 19' },
    { id: 20, src: IMG20, alt: 'Gallery Image 20' },
    { id: 21, src: IMG21, alt: 'Gallery Image 21' },
    { id: 22, src: IMG22, alt: 'Gallery Image 22' },
    { id: 23, src: IMG23, alt: 'Gallery Image 23' },
    { id: 24, src: IMG24, alt: 'Gallery Image 24' },
  ];

  return (
    <div>
      <PageHero 
        title="फोटो गॅलरी" 
        subtitle="माहिती"
        image={kundalgaonImage}
      />
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Dotted Line */}
          <div className="flex justify-center mb-4">
            <div className="w-32 border-t-2 border-dotted border-gray-400"></div>
          </div>

          {/* Sub-heading */}
          <p className="text-sm text-gray-500 text-center mb-2">माहिती</p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
            फोटो गॅलरी
          </h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GalleryPage;

