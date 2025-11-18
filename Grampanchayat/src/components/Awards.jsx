// You can replace these with actual award images
import awardImage1 from '../images/puraskarKundalgaon.jpg';
import awardImage2 from '../images/puraskarKundalgaon.jpg';
import awardImage3 from '../images/puraskarKundalgaon.jpg';

const Awards = () => {
  const awards = [
    {
      id: 1,
      image: awardImage1,
      title: 'सौर ऊर्जेवर पुरस्कार',
      description: 'सौर ऊर्जा यशस्वी उपक्रम, नवीन ऊर्जा आणि घर आणि शाळांसाठी पर्यावरणास अनुकूल योजना.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'कुंडलगाव'
    },
    {
      id: 2,
      image: awardImage2,
      title: 'जलसंधारणातील गौरव',
      description: 'यशस्वी जलसंधारणामुळे पाण्याची उपलब्धता सुधारली, पाण्याच्या स्रोतांची शुद्धी, विहिरींचे संरक्षण आणि पाणी साठवणूक वाढवणे.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'कुंडलगाव'
    },
    {
      id: 3,
      image: awardImage3,
      title: 'TB मुक्त पंचायत पुरस्कार',
      description: 'TB मुक्त पंचायत पुरस्कार हा एक सकारात्मक आणि प्रेरणादायी उदाहरण आहे, गावातील आरोग्य सेवा आणि सार्वजनिक सहभागाचे परिणाम.',
      date: '22 Sep 2025',
      category: 'पुरस्कार / यशोगाथा',
      village: 'कुंडलगाव'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Sub-heading and Line */}
          <div className="mb-4">
            <p className="text-sm text-gray-500 text-center mb-2">माहिती</p>
            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 bg-clip-text text-transparent">
              पुरस्कार / यशोगाथा
            </h2>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {awards.map((award) => (
              <div 
                key={award.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image Container with Avatar Overlay */}
                <div className="relative overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Avatar Icon Overlapping Bottom-Left */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                {/* Metadata Bar */}
                <div className="px-4 pt-4 pb-2 space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>{award.village}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{award.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{award.category}</span>
                    </div>
                  </div>
                </div>

                {/* Award Title */}
                <div className="px-5 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent mb-3 group-hover:from-teal-600 group-hover:to-teal-500 transition-all duration-300">
                    {award.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-5 pb-6">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

