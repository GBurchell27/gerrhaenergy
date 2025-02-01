// This page is for homeowners who want to become energy traders
// It will be a multiples choice wizard that guides the user through the process of becoming energy self-sufficient
// with the option of becoming a trader with the surplus energy they generate
// The user will be able to choose the size of the system they want to instal

'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the steps and their data
type WizardStep = {
  id: number;
  title: string;
  description: string;
};

const steps: WizardStep[] = [
  {
    id: 1,
    title: 'House & Roof Information',
    description: 'Tell us about your property'
  },
  {
    id: 2,
    title: 'Photo Upload & Visualization',
    description: 'Upload photos of your property'
  },
  {
    id: 3,
    title: 'Cable Routing & Aesthetics',
    description: 'Choose cable options and routing'
  },
  {
    id: 4,
    title: 'Energy Consumption',
    description: 'Tell us about your energy usage'
  },
  {
    id: 5,
    title: 'Battery Capacity',
    description: 'Choose your storage capacity'
  },
  {
    id: 6,
    title: 'Review & Reserve',
    description: 'Review your selections'
  }
];

// Form data type
type FormData = {
  // House & Roof Information
  constructionType: string;
  exteriorMaterial: string;
  roofTileType: string;
  roofColor: string;
  roofStyle: string;
  compassDirection: string;
  houseType: string;
  roofDimensions: {
    method: 'exact' | 'approximate';
    length: string;
    width: string;
  };
  // Photo Upload
  photos: {
    front?: File;
    rear?: File;
    leftSide?: File;
    rightSide?: File;
  };
  // Cable Routing
  cableColor: string;
  cableRoute: string; // This would be a drawing or selection
  // Energy Consumption
  householdSize: string;
  monthlyUsage: string;
  appliances: string[];
  // Battery Capacity
  batterySize: string;
  // Additional Notes
  notes: string;
};

export default function ForHomesPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    constructionType: '',
    exteriorMaterial: '',
    roofTileType: '',
    roofColor: '',
    roofStyle: '',
    compassDirection: '',
    houseType: '',
    roofDimensions: {
      method: 'approximate',
      length: '',
      width: ''
    },
    photos: {},
    cableColor: '',
    cableRoute: '',
    householdSize: '',
    monthlyUsage: '',
    appliances: [],
    batterySize: '',
    notes: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        photos: {
          ...prev.photos,
          [name]: files[0]
        }
      }));
    }
  };

  const handleApplianceToggle = (appliance: string) => {
    setFormData(prev => ({
      ...prev,
      appliances: prev.appliances.includes(appliance)
        ? prev.appliances.filter(a => a !== appliance)
        : [...prev.appliances, appliance]
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Construction Type
                </label>
                <select
                  name="constructionType"
                  value={formData.constructionType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Type</option>
                  <option value="newbuild">New Build</option>
                  <option value="modern">Modern (Post-2000)</option>
                  <option value="pre2000">Pre-2000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exterior Material
                </label>
                <select
                  name="exteriorMaterial"
                  value={formData.exteriorMaterial}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Material</option>
                  <option value="brick">Brick</option>
                  <option value="stone">Stone</option>
                  <option value="cladding">Cladding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Tile Type
                </label>
                <select
                  name="roofTileType"
                  value={formData.roofTileType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Type</option>
                  <option value="slate">Slate</option>
                  <option value="clay">Clay</option>
                  <option value="concrete">Concrete</option>
                  <option value="metal">Metal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Color
                </label>
                <select
                  name="roofColor"
                  value={formData.roofColor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Color</option>
                  <option value="black">Black</option>
                  <option value="grey">Grey</option>
                  <option value="red">Red</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Style
                </label>
                <select
                  name="roofStyle"
                  value={formData.roofStyle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Style</option>
                  <option value="sloping">Sloping</option>
                  <option value="flat">Flat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Compass Direction (Main Roof)
                </label>
                <select
                  name="compassDirection"
                  value={formData.compassDirection}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Direction</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                  <option value="northeast">Northeast</option>
                  <option value="northwest">Northwest</option>
                  <option value="southeast">Southeast</option>
                  <option value="southwest">Southwest</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <p className="text-sm text-gray-600 mb-4">
              Upload photos of your property from different angles. This will help us better understand your installation needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {['front', 'rear', 'leftSide', 'rightSide'].map((side) => (
                <div key={side} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {side.charAt(0).toUpperCase() + side.slice(1).replace('Side', ' Side')} View
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      name={side}
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      ref={fileInputRef}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Choose File
                    </button>
                    <span className="text-sm text-gray-500">
                      {formData.photos[side as keyof typeof formData.photos]?.name || 'No file chosen'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Tips for good photos:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Take photos during daylight hours</li>
                <li>• Capture the entire roof area</li>
                <li>• Include surrounding trees or obstacles</li>
                <li>• Show potential cable routing paths</li>
              </ul>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cable Color
              </label>
              <div className="grid grid-cols-4 gap-4">
                {['white', 'black', 'grey', 'dark-red'].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, cableColor: color }))}
                    className={`p-4 rounded-md border ${
                      formData.cableColor === color
                        ? 'border-green-500 ring-2 ring-green-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div
                      className={`w-full h-8 rounded ${
                        color === 'white'
                          ? 'bg-white border border-gray-300'
                          : `bg-${color === 'dark-red' ? 'red-800' : color}-500`
                      }`}
                    />
                    <p className="text-sm text-center mt-2">
                      {color.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cable Routing Preference
              </label>
              <select
                name="cableRoute"
                value={formData.cableRoute}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select Preference</option>
                <option value="shortest">Shortest Path</option>
                <option value="hidden">Most Hidden Path</option>
                <option value="custom">Custom Path (Our expert will discuss with you)</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Household Size
                </label>
                <select
                  name="householdSize"
                  value={formData.householdSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select Size</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Electricity Usage (kWh)
                </label>
                <input
                  type="text"
                  name="monthlyUsage"
                  value={formData.monthlyUsage}
                  onChange={handleInputChange}
                  placeholder="e.g., 500"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Major Appliances
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Electric Oven',
                  'Dishwasher',
                  'Washing Machine',
                  'Dryer',
                  'Electric Vehicle',
                  'Air Conditioning',
                  'Heat Pump',
                  'Pool Pump',
                  'Electric Water Heater'
                ].map((appliance) => (
                  <div key={appliance} className="flex items-center">
                    <input
                      type="checkbox"
                      id={appliance}
                      checked={formData.appliances.includes(appliance)}
                      onChange={() => handleApplianceToggle(appliance)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor={appliance} className="ml-2 text-sm text-gray-700">
                      {appliance}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <p className="text-sm text-gray-600 mb-4">
              Choose your battery capacity based on your energy needs. A larger capacity allows for more energy independence and potential for energy trading.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  size: '10kWh',
                  title: 'Starter',
                  description: 'Ideal for small households with basic energy needs',
                  features: ['4-6 hours backup power', 'Suitable for 1-2 people', 'Basic appliance coverage']
                },
                {
                  size: '15kWh',
                  title: 'Advanced',
                  description: 'Perfect for medium-sized homes with moderate consumption',
                  features: ['8-10 hours backup power', 'Suitable for 3-4 people', 'Full home coverage']
                },
                {
                  size: '20kWh',
                  title: 'Premium',
                  description: 'Best for large homes and energy trading',
                  features: ['12+ hours backup power', 'Suitable for 5+ people', 'Energy trading ready']
                }
              ].map((option) => (
                <div
                  key={option.size}
                  className={`p-6 rounded-lg border-2 ${
                    formData.batterySize === option.size
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, batterySize: option.size }))}
                    className="w-full text-left"
                  >
                    <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {option.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">System Summary</h3>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Construction Type</dt>
                  <dd className="text-sm text-gray-900">{formData.constructionType}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Roof Type</dt>
                  <dd className="text-sm text-gray-900">{formData.roofTileType}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Battery Capacity</dt>
                  <dd className="text-sm text-gray-900">{formData.batterySize}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Monthly Usage</dt>
                  <dd className="text-sm text-gray-900">{formData.monthlyUsage} kWh</dd>
                </div>
              </dl>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Any specific requirements or questions?"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex-1 relative ${
                    step.id === currentStep
                      ? 'text-green-600'
                      : step.id < currentStep
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.id === currentStep
                          ? 'bg-green-600 text-white'
                          : step.id < currentStep
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      {step.id}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-xs">{step.description}</p>
                    </div>
                  </div>
                  {step.id !== steps.length && (
                    <div
                      className={`absolute top-4 w-full h-0.5 ${
                        step.id < currentStep ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-gray-600">{steps[currentStep - 1].description}</p>
            </div>

            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handlePrevious}
                className={`px-6 py-2 rounded-md text-sm font-medium ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                type={currentStep === steps.length ? 'submit' : 'button'}
                onClick={currentStep === steps.length ? undefined : handleNext}
                className="px-6 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700"
              >
                {currentStep === steps.length ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



