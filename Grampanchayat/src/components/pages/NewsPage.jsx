import PageHero from '../PageHero';
import News from '../News';
import newsImage from '../../images/news.jpg';

const NewsPage = () => {
  return (
    <div>
      <PageHero 
        title="न्युज/अपडेट्स" 
        subtitle="माहिती"
        image={newsImage}
      />
      <News />
    </div>
  );
};

export default NewsPage;

