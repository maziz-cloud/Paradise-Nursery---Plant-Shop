import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="landing-container">
      <h1>Paradise Nursery</h1>
      <p className="company-description">
        Welcome to Paradise Nursery, your trusted source for beautiful, healthy houseplants.
        We specialize in bringing nature indoors with a curated selection of succulents,
        ferns, and flowering plants. Whether you're a seasoned plant parent or just starting,
        we have the perfect green companion for you.
      </p>
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
}

export default AboutUs;
