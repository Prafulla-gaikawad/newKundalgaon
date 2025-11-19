import PageHero from "../PageHero";
import kundalgaonImage from "../../images/kundalgaon.jpg";
import IMG1 from "../../images/IMG-20251112-WA0001.jpg";
import IMG2 from "../../images/IMG-20251112-WA0002.jpg";
// Only keep gallery photos that exist in the images folder. Removed imports for files not present.
// import IMG17 from "../../images/IMG-20251112-WA0021.jpg";
import IMG18 from "../../images/IMG-20251112-WA0022.jpg";
import IMG19 from "../../images/IMG-20251112-WA0023.jpg";
import IMG20 from "../../images/IMG-20251112-WA0024.jpg";
import IMG21 from "../../images/IMG-20251112-WA0025.jpg";
// Leadership images: also used in Leadership component — include them in gallery
import sarpanchImage from "../../images/Kavita sitaram more -  Sarpanch.jpg";
import upSarpanchImage from "../../images/rajendra namdev gidge - Up sarpanch.jpg";
import sadasya1Image from "../../images/Baban kedu kadnor - sadasya.jpg";
import sadasya2Image from "../../images/Bijlabai maharu Chaudhari - sadasya.jpg";
import sadasya3Image from "../../images/Dayanand mahadu ahire - sadasya.jpg";
import sadasya4Image from "../../images/pratibha Rohidas pagare - sadasya.jpg";
import sadasya5Image from "../../images/Rekha rajendra gidge - sadasya.jpg";
import sadasya6Image from "../../images/Sangita nana kadnor - sadasya.jpg";
import sadasya7Image from "../../images/sarla dattu mali - sadasya.jpg";
import karmachari1Image from "../../images/Raju v zende - grampanchayat karmchari.jpg";
import karmachari2Image from "../../images/tulshiram M kadnor - grampanchayat karmchari.jpg";
import IMG22 from "../../images/IMG-20251112-WA0026.jpg";
import IMG23 from "../../images/IMG-20251112-WA0027.jpg";
import IMG24 from "../../images/IMG-20251112-WA0028.jpg";

const GalleryPage = () => {
  // Keep only the images that actually exist in src/images, this prevents build errors
  // and keeps the gallery consistent with what is used.
  const images = [
    { id: 1, src: IMG1, alt: "Gallery Image 1" },
    { id: 2, src: IMG2, alt: "Gallery Image 2" },
    // { id: 3, src: IMG17, alt: "Gallery Image 3" },
    { id: 4, src: IMG18, alt: "Gallery Image 4" },
    { id: 5, src: IMG19, alt: "Gallery Image 5" },
    { id: 6, src: IMG20, alt: "Gallery Image 6" },
    { id: 7, src: IMG21, alt: "Gallery Image 7" },
    { id: 8, src: IMG22, alt: "Gallery Image 8" },
    { id: 9, src: IMG23, alt: "Gallery Image 9" },
    { id: 10, src: IMG24, alt: "Gallery Image 10" },
    // Leadership images - also visible in liderança/team sections
    { id: 11, src: sarpanchImage, alt: "सारपंच" },
    { id: 12, src: upSarpanchImage, alt: "उपसरपंच" },
    { id: 13, src: sadasya1Image, alt: "सदस्य 1" },
    { id: 14, src: sadasya2Image, alt: "सदस्य 2" },
    { id: 15, src: sadasya3Image, alt: "सदस्य 3" },
    { id: 16, src: sadasya4Image, alt: "सदस्य 4" },
    { id: 17, src: sadasya5Image, alt: "सदस्य 5" },
    { id: 18, src: sadasya6Image, alt: "सदस्य 6" },
    { id: 19, src: sadasya7Image, alt: "सदस्य 7" },
    { id: 20, src: karmachari1Image, alt: "कर्मचारी 1" },
    { id: 21, src: karmachari2Image, alt: "कर्मचारी 2" },
  ];

  return (
    <div>
      <PageHero title="फोटो गॅलरी" subtitle="माहिती" image={kundalgaonImage} />
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
