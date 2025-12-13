import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Diving In Sri Lanka | PADI Certified Scuba Diving Center",
  description = "PADI-certified scuba diving center in Sri Lanka offering guided dives, certification courses, and equipment rental.",
  keywords = "Scuba Diving Sri Lanka, PADI Certification, Diving Lessons, Mirissa Diving, Nilaveli Diving",
  image = "https://www.divinginsrilanka.com/src/assets/logo.png"
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    
    {/* Open Graph / Facebook */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content="https://www.divinginsrilanka.com/" />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default SEO;