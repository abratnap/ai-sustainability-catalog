"use client";

export default function Publications() {
  return (
    <div className="space-y-4">
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">ADB Brief – AI based Water Management</h2>
        <p className="text-sm text-gray-600">
          An insightful publication on the application of AI in smart water management systems.
        </p>
        <a href="https://www.adb.org/sites/default/files/publication/614891/artificial-intelligence-smart-water-management-systems.pdf" className="text-blue-600 hover:underline">
          View Publication
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">ENG White Paper Book (When Complete)</h2>
        <p className="text-sm text-gray-600">
          A comprehensive white paper on various AI applications and technologies.
        </p>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">HydroBench</h2>
        <p className="text-sm text-gray-600">
          Supports computational hydrology and water resources decision-making.
        </p>
        <a href="https://www.researchgate.net/figure/HydroBench-supports-computational-hydrology-and-water-resources-decision-making-by_fig1_364069647" className="text-blue-600 hover:underline">
          View Publication
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">Hydrological Model</h2>
        <p className="text-sm text-gray-600">
          A detailed study on hydrological models and their applications.
        </p>
        <a href="https://www.frontiersin.org/articles/10.3389/feart.2022.884766/full" className="text-blue-600 hover:underline">
          View Publication
        </a>
      </div>
    </div>
  );
}
