import React from 'react';
import type { Experience } from '../types';

interface Props {
  experiences: Experience[];
}

const ExperienceList: React.FC<Props> = ({ experiences }) => {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Pengalaman Profesional & Organisasi</h3>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between flex-col md:flex-row md:items-center mb-2">
              <h4 className="text-lg font-bold text-gray-800">{exp.role}</h4>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-max">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-600 font-medium">{exp.company} <span className="text-gray-400 font-normal">| {exp.type}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;