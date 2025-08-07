import ServiceList from '../components/ServiceList';
import ProductList from '../components/ProductList';
import NewsSection from '../components/NewsSection';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <div>
      <h2>Our Services</h2>
      <ServiceList />
      <h2>Available Products</h2>
      <ProductList />
      <h2>News & Updates</h2>
      <NewsSection />
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  );
}