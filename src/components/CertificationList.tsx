import React from 'react';
import type { Certification } from '../types';

interface Props {
  certifications: Certification[];
}

const CertificationList: React.FC<Props> = ({ certifications }) => {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Sertifikasi</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-lg font-bold text-gray-800 mb-1">{cert.title}</h4>
            <p className="text-sm text-blue-600 font-medium mb-3">{cert.issuer}</p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationList;