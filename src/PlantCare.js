import React, { useState, useEffect } from 'react';

const PlantCare = () => {
  const [plant, setPlant] = useState({
    name: 'Virtual Plant',
    growthStage: 1,
    waterLevel: 100,
    sunlightExposure: 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the plant's growth stage every 10 seconds
      setPlant((prevPlant) => ({
        ...prevPlant,
        growthStage: prevPlant.growthStage + 1,
      }));

      // Decrease the water level and sunlight exposure every 5 seconds
      setPlant((prevPlant) => ({
        ...prevPlant,
        waterLevel: prevPlant.waterLevel - 5,
        sunlightExposure: prevPlant.sunlightExposure - 5,
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const waterPlant = () => {
    setPlant((prevPlant) => ({
      ...prevPlant,
      waterLevel: prevPlant.waterLevel + 20,
    }));
  };

  const provideSunlight = () => {
    setPlant((prevPlant) => ({
      ...prevPlant,
      sunlightExposure: prevPlant.sunlightExposure + 20,
    }));
  };

  return (
    <div>
      <h1>Virtual Plant Care</h1>
      <h2>{plant.name}</h2>
      <p>Growth Stage: {plant.growthStage}</p>
      <p>Water Level: {plant.waterLevel}</p>
      <p>Sunlight Exposure: {plant.sunlightExposure}</p>
      <button onClick={waterPlant}>Water Plant</button>
      <button onClick={provideSunlight}>Provide Sunlight</button>
    </div>
  );
};

export default PlantCare;
