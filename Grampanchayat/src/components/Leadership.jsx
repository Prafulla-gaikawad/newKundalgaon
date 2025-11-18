import { useHomeData } from '../hooks/useHomeData';
import kakaImage from '../images/kaka.jpg'; // Fallback image

// Import leadership images
import sarpanchImage from '../images/Kavita sitaram more -  Sarpanch.jpg';
import upSarpanchImage from '../images/rajendra namdev gidge - Up sarpanch.jpg';
import sadasya1Image from '../images/Baban kedu kadnor - sadasya.jpg';
import sadasya2Image from '../images/Bijlabai maharu Chaudhari - sadasya.jpg';
import sadasya3Image from '../images/Dayanand mahadu ahire - sadasya.jpg';
import sadasya4Image from '../images/pratibha Rohidas pagare - sadasya.jpg';
import sadasya5Image from '../images/Rekha rajendra gidge - sadasya.jpg';
import sadasya6Image from '../images/Sangita nana kadnor - sadasya.jpg';
import sadasya7Image from '../images/sarla dattu mali - sadasya.jpg';
import karmachari1Image from '../images/Raju v zende - grampanchayat karmchari.jpg';
import karmachari2Image from '../images/tulshiram M kadnor - grampanchayat karmchari.jpg';

const Leadership = () => {
  const { data, loading } = useHomeData();
  const language = 'mr'; // Default to Marathi

  const getApiBaseUrl = () => {
    // If on localhost, check .env file first
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    }
    // For production/Netlify: Always use Render backend
    return 'https://grampanchayat-website-project-code.onrender.com/api';
  };
  // Helper to get full image URL
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return kakaImage;
    if (imageUrl.startsWith('http')) return imageUrl;
    
    // API returns URLs like "/api/images/..." 
    // VITE_API_BASE_URL is "http://localhost:5000/api"
    // So we need to remove /api from base URL if URL already starts with /api
    const baseUrl = getApiBaseUrl();
    if (imageUrl.startsWith('/api')) {
      // Remove /api from base URL to avoid double /api
      const baseWithoutApi = baseUrl.replace(/\/api$/, '');
      return `${baseWithoutApi}${imageUrl}`;
    }
    return `${baseUrl}${imageUrl}`;
  };

  // Static leadership data from images
  const staticLeadershipData = {
    sarpanch: {
      name: { mr: 'कविता सीताराम मोरे' },
      role: { mr: 'सरपंच' },
      image: sarpanchImage
    },
    upSarpanch: {
      name: { mr: 'राजेंद्र नामदेव गिडगे' },
      role: { mr: 'उपसरपंच' },
      image: upSarpanchImage
    },
    sadasya: [
      { name: { mr: 'बाबन केदू कडनोर' }, role: { mr: 'सदस्य' }, image: sadasya1Image },
      { name: { mr: 'बिजलाबाई महारू चौधरी' }, role: { mr: 'सदस्य' }, image: sadasya2Image },
      { name: { mr: 'दयानंद महादू आहिरे' }, role: { mr: 'सदस्य' }, image: sadasya3Image },
      { name: { mr: 'प्रतिभा रोहिदास पगारे' }, role: { mr: 'सदस्य' }, image: sadasya4Image },
      { name: { mr: 'रेखा राजेंद्र गिडगे' }, role: { mr: 'सदस्य' }, image: sadasya5Image },
      { name: { mr: 'संगीता नाना कडनोर' }, role: { mr: 'सदस्य' }, image: sadasya6Image },
      { name: { mr: 'सरला दत्तू माळी' }, role: { mr: 'सदस्य' }, image: sadasya7Image }
    ],
    karmachari: [
      { name: { mr: 'राजू व्ही. झेंडे' }, role: { mr: 'ग्रामपंचायत कर्मचारी' }, image: karmachari1Image },
      { name: { mr: 'तुळशीराम एम. कडनोर' }, role: { mr: 'ग्रामपंचायत कर्मचारी' }, image: karmachari2Image }
    ]
  };

  // Get leadership data from API, fallback to static data
  const leadershipData = data?.leadership;
  const sarpanch = leadershipData?.sarpanch || staticLeadershipData.sarpanch;
  const upSarpanch = staticLeadershipData.upSarpanch;
  const sadasya = staticLeadershipData.sadasya;
  const karmachari = staticLeadershipData.karmachari;
  const teamMembers = leadershipData?.teamMembers || [];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading with horizontal lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-teal-600"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mx-6 tracking-wide">
              नेतृत्व
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-teal-400 to-teal-600"></div>
          </div>

          {/* Descriptive Paragraph */}
          <p className="text-lg md:text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            आमचे आदरणीय सरपंच नेतृत्व समर्पण, प्रामाणिकपणा आणि विकासाच्या दृष्टिकोनाने करतात.
          </p>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">लोड होत आहे...</p>
            </div>
          ) : (
            <>
              {/* Sarpanch and Up Sarpanch Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
                {/* Sarpanch Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-2 bg-gradient-to-br from-teal-50 to-blue-50">
                    <div className="bg-white rounded-lg p-4">
                      <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={sarpanch?.image || kakaImage} 
                          alt={sarpanch?.role?.[language] || sarpanch?.role?.mr || 'सरपंच'} 
                          className="w-full h-[400px] object-cover object-center hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          style={{ imageRendering: 'auto' }}
                        />
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                          {sarpanch?.name?.[language] || sarpanch?.name?.mr || 'संपूर्ण नाव'}
                        </h3>
                        <div className="inline-block px-4 py-1 bg-teal-100 rounded-full mb-2">
                          <p className="text-lg font-semibold text-teal-800">
                            {sarpanch?.role?.[language] || sarpanch?.role?.mr || 'सरपंच'}
                          </p>
                        </div>
                        {sarpanch?.village && (
                          <p className="text-base text-gray-600 font-medium">
                            {sarpanch.village?.[language] || sarpanch.village?.mr || ''}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Up Sarpanch Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="p-2 bg-gradient-to-br from-teal-50 to-blue-50">
                    <div className="bg-white rounded-lg p-4">
                      <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={upSarpanch?.image || kakaImage} 
                          alt={upSarpanch?.role?.[language] || upSarpanch?.role?.mr || 'उपसरपंच'} 
                          className="w-full h-[400px] object-cover object-center hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          style={{ imageRendering: 'auto' }}
                        />
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                          {upSarpanch?.name?.[language] || upSarpanch?.name?.mr || 'संपूर्ण नाव'}
                        </h3>
                        <div className="inline-block px-4 py-1 bg-teal-100 rounded-full mb-2">
                          <p className="text-lg font-semibold text-teal-800">
                            {upSarpanch?.role?.[language] || upSarpanch?.role?.mr || 'उपसरपंच'}
                          </p>
                        </div>
                        {upSarpanch?.village && (
                          <p className="text-base text-gray-600 font-medium">
                            {upSarpanch.village?.[language] || upSarpanch.village?.mr || ''}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sadasya Section */}
              <div className="mt-16 md:mt-24">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">सदस्य</h3>
                  <div className="w-24 h-1 bg-teal-500 mx-auto rounded"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                  {sadasya.map((member, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="overflow-hidden">
                        <img 
                          src={member.image || kakaImage} 
                          alt={member.role?.[language] || member.role?.mr || 'सदस्य'} 
                          className="w-full h-[300px] object-cover object-center hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          style={{ imageRendering: 'auto' }}
                        />
                      </div>
                      <div className="p-6 text-center space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">
                          {member.name?.[language] || member.name?.mr || 'संपूर्ण नाव'}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-teal-100 rounded-full mb-1">
                          <p className="text-sm md:text-base font-semibold text-teal-800">
                            {member.role?.[language] || member.role?.mr || 'सदस्य'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Karmachari Section */}
              <div className="mt-16 md:mt-24">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">कर्मचारी</h3>
                  <div className="w-24 h-1 bg-teal-500 mx-auto rounded"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                  {karmachari.map((member, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="overflow-hidden">
                        <img 
                          src={member.image || kakaImage} 
                          alt={member.role?.[language] || member.role?.mr || 'कर्मचारी'} 
                          className="w-full h-[350px] object-cover object-center hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          style={{ imageRendering: 'auto' }}
                        />
                      </div>
                      <div className="p-6 text-center space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">
                          {member.name?.[language] || member.name?.mr || 'संपूर्ण नाव'}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-teal-100 rounded-full mb-1">
                          <p className="text-base font-semibold text-teal-800">
                            {member.role?.[language] || member.role?.mr || 'ग्रामपंचायत कर्मचारी'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
