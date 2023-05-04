import React, { useState } from 'react';
import Slider from 'react-slick';
import './FormSlider.scss';

const FormSlider = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="form-slider-container">
      <Slider {...settings}>
        <div>
          <div className="form-container horizontal-form">
            <label htmlFor="option1">Option 1:</label>
            <select id="option1" value={selectedOption1} onChange={handleOption1Change}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <label htmlFor="option2">Option 2:</label>
            <select id="option2" value={selectedOption2} onChange={handleOption2Change}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <button type="submit">Submit</button>
          </div>
          <img src="https://via.placeholder.com/500x300" alt="placeholder" />
        </div>
        <div>
          <div className="form-container vertical-form">
            <label htmlFor="option1">Option 1:</label>
            <select id="option1" value={selectedOption1} onChange={handleOption1Change}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <label htmlFor="option2">Option 2:</label>
            <select id="option2" value={selectedOption2} onChange={handleOption2Change}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <button type="submit">Submit</button>
          </div>
          <img src="https://via.placeholder.com/500x300" alt="placeholder" />
        </div>
      </Slider>
    </div>
  );
};

export default FormSlider;