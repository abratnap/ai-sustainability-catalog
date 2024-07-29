"use client";

export default function DataSources() {
  return (
    <div className="space-y-4">
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">IBM NASA HLS Burn Scars</h2>
        <p className="text-sm text-gray-600">
          A dataset for detecting burn scars from satellite imagery, useful for studying fire impacts and land changes.
        </p>
        <a href="https://huggingface.co/datasets/ibm-nasa-geospatial/hls_burn_scars" className="text-blue-600 hover:underline">
          View Dataset
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">IBM NASA Multi-temporal Crop Classification</h2>
        <p className="text-sm text-gray-600">
          This dataset provides multi-temporal satellite images for crop classification, enabling agricultural monitoring and analysis.
        </p>
        <a href="https://huggingface.co/datasets/ibm-nasa-geospatial/multi-temporal-crop-classification" className="text-blue-600 hover:underline">
          View Dataset
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">Plant Diseases Classification DataSet</h2>
        <p className="text-sm text-gray-600">
          A comprehensive dataset for classifying various plant diseases using images, useful for agricultural research and applications.
        </p>
        <a href="https://huggingface.co/datasets/ayerr/plant-disease-classification" className="text-blue-600 hover:underline">
          View Dataset
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">NASA WorldView</h2>
        <p className="text-sm text-gray-600">
          An interactive tool for visualizing and analyzing satellite imagery from NASA, providing a wealth of global environmental data.
        </p>
        <a href="https://worldview.earthdata.nasa.gov" className="text-blue-600 hover:underline">
          Visit WorldView
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">EU Copernicus Data Service</h2>
        <p className="text-sm text-gray-600">
          A comprehensive service providing access to a wide range of environmental data from the Copernicus Earth Observation program.
        </p>
        <a href="https://dataspace.copernicus.eu" className="text-blue-600 hover:underline">
          Visit Copernicus Data Service
        </a>
      </div>
    </div>
  );
}
