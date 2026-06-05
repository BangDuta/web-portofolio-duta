import React from 'react';
import type { ProfileData } from '../types';

interface Props {
  data: ProfileData;
}

const Hero: React.FC<Props> = ({ data }) => {
  return (
    <section className="bg-white shadow-sm py-12 px-6 rounded-xl mb-8 border border-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.name}</h1>
      <h2 className="text-xl text-blue-600 font-medium mb-4">{data.tagline}</h2>
      <div className="text-gray-600 flex flex-col md:flex-row gap-4 mb-6">
        <span>📧 {data.email}</span>
        <span>📍 {data.location}</span>
      </div>
      <p className="text-gray-700 leading-relaxed text-justify">
        {data.summary}
      </p>
    </section>
  );
};

export default Hero;