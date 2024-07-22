"use client";

export default function AIModels() {
  return (
    <div className="space-y-4">
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">IBM NASA GeoSpatial Prithvi 100M</h2>
        <p className="text-sm text-gray-600">
          A comprehensive model trained on a large-scale geospatial dataset, useful for various remote sensing applications.
        </p>
        <a href="https://huggingface.co/ibm-nasa-geospatial/Prithvi-100M" className="text-blue-600 hover:underline">
          View Model
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">IBM NASA GeoSpatial Prithvi 100M Burn Scar</h2>
        <p className="text-sm text-gray-600">
          This model specializes in detecting burn scars from satellite imagery, aiding in the study of fire impacts and land changes.
        </p>
        <a href="https://huggingface.co/ibm-nasa-geospatial/Prithvi-100M-burn-scar" className="text-blue-600 hover:underline">
          View Model
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">IBM NASA GeoSpatial Prithvi 100M Multi-temporal Crop Classification</h2>
        <p className="text-sm text-gray-600">
          A model designed for multi-temporal crop classification using satellite images, enabling advanced agricultural monitoring and analysis.
        </p>
        <a href="https://huggingface.co/ibm-nasa-geospatial/Prithvi-100M-multi-temporal-crop-classification" className="text-blue-600 hover:underline">
          View Model
        </a>
      </div>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-semibold">IBM NASA Geospatial Prithvi 100M Flood Model</h2>
        <p className="text-sm text-gray-600">
          This model is developed for flood detection and prediction using large-scale geospatial data.
        </p>
        <a href="https://huggingface.co/ibm-nasa-geospatial/Prithvi-100M-sen1floods11" className="text-blue-600 hover:underline">
          View Model
        </a>
      </div>
    </div>
  );
}
