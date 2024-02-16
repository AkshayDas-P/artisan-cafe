import React from 'react';
import "../Home/Home.css";
import CategoryTabs from '../CategoryTabs/CategoryTabs'; //calling CategoryTabs component to the home page

const HomePage = () => {
  return (
    <div>
      <div className="main-content">
        <section className="about-section">
        <CategoryTabs />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
