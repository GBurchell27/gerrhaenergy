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

// This code defines the steps of a wizard form for homeowners who want to become energy traders.
// It includes steps for providing house and roof information, uploading photos, choosing cable routing options,
// specifying energy usage, selecting battery size, and reviewing the selections.
// The steps are stored in an array of objects, each containing an id, title, and description.
const steps: WizardStep[] = [
  {
    id: 1,
    title: 'House & Roof',
    description: 'Tell us about your property'
  },
  {
    id: 2,
    title: 'Photo Upload',
    description: 'Upload photos of your property'
  },
  {
    id: 3,
    title: 'Cable Routing',
    description: 'Choose cable options and routing'
  },
  {
    id: 4,
    title: 'Energy Usage',
    description: 'Tell us about your energy usage'
  },
  {
    id: 5,
    title: 'Battery Size',
    description: 'Choose your storage capacity'
  },
  {
    id: 6,
    title: 'Review',
    description: 'Review your selections'
  }
];


// This code defines the form data type for the wizard form.
// It includes fields for house and roof information, photo upload, cable routing, energy usage, battery size, and review.
// The form data is stored in an object of type FormData.
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
  // Contact Information
  fullName?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postcode?: string;
  gdprConsent?: boolean;
  energyVision: string;
  energyVisionDetails: string;
};

export default function ForHomesPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    notes: '',
    fullName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
    gdprConsent: false,
    energyVision: '',
    energyVisionDetails: '',
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


// *********** FORM SUBMISSION ***********
// This code handles the submission of the form.
// It validates the required fields, shows a loading state, and makes an API call to the backend.
// It also handles the success and error cases of the API call.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.gdprConsent) {
      alert('Please accept the GDPR consent to continue');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.addressLine1 || !formData.city || !formData.postcode) {
      alert('Please fill in all required contact information');
      return;
    }

    try {
      setIsSubmitting(true);

      console.log('Submitting form data:', formData); // Debug log

      const response = await fetch('/api/submit-forhomes-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      alert('Thank you for your submission! We will contact you shortly.');
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert(`Error submitting form: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };


  //

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
            {/* Explanation about cable routing */}
            <p className="text-sm text-gray-700 mb-4">
              Energy harvested will need to travel down a cable to your storage unit.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              <li>Pick a cable color (white, dark red, black, or grey) that suits your home's exterior.</li>
              <li>Choose a path that's visually unobtrusive.</li>
              <li>Take a photo of that side of your house, and if you can, use an image editor or phone markup to draw a line showing the cable's route—from the roof down to where the storage system will be.</li>
            </ul>

            {/* Cable Colour Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cable Colour
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
                      className={`w-full h-8 rounded border border-gray-300 ${
                        color === 'white' ? 'bg-white' :
                        color === 'black' ? 'bg-black' :
                        color === 'grey' ? 'bg-gray-500' :
                        'bg-red-800' // for dark-red
                      }`}
                    />
                    <p className="text-sm text-center mt-2">
                      {color.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Cable Routing Preference */}
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

            {/* New Energy Vision Section */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                My vision for using solar power is:
              </label>
              <div className="space-y-4">
                {[
                  'To harvest, store and enjoy solar energy at home, charge my EV and sell my surplus',
                  'To harvest, store and enjoy solar energy at home',
                  'To add energy storage to my existing solar panels to reduce my utility bills and/or sell my surplus'
                ].map((vision) => (
                  <div key={vision} className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="radio"
                        name="energyVision"
                        value={vision}
                        checked={formData.energyVision === vision}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          energyVision: e.target.value
                        }))}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                    </div>
                    <div className="ml-3">
                      <label className="text-sm text-gray-700">{vision}</label>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  name="energyVisionDetails"
                  value={formData.energyVisionDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your energy goals..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
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
                  size: '5kWh',
                  title: 'Starter',
                  description: 'Ideal for small households with basic energy needs',
                  features: ['4-6 hours backup power', 'Suitable for 1-2 people', 'Basic appliance coverage', '5kWh battery']
                },
                {
                  size: '10kWh',
                  title: 'Standard',
                  description: 'Perfect for medium-sized homes with moderate consumption',
                  features: ['8-10 hours backup power', 'Suitable for 3-4 people', 'Full home coverage', 'Optional EV charging', '10kWh battery']
                },
                {
                  size: '15kWh',
                  title: 'Advanced',
                  description: 'Best for large homes and energy trading',
                  features: ['12+ hours backup power', 'Suitable for 4+ people', 'Full home coverage', 'With EV charging', 'Energy trading ready',  '15kWh battery']
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
              <div className="space-y-6">
                {/* House & Roof Information */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">House & Roof Details</h4>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Construction Type</dt>
                      <dd className="text-sm text-gray-900">{formData.constructionType}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Exterior Material</dt>
                      <dd className="text-sm text-gray-900">{formData.exteriorMaterial}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Roof Tile Type</dt>
                      <dd className="text-sm text-gray-900">{formData.roofTileType}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Roof Color</dt>
                      <dd className="text-sm text-gray-900">{formData.roofColor}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Roof Style</dt>
                      <dd className="text-sm text-gray-900">{formData.roofStyle}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Compass Direction</dt>
                      <dd className="text-sm text-gray-900">{formData.compassDirection}</dd>
                    </div>
                  </dl>
                </div>

                {/* Photo Upload Summary */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Uploaded Photos</h4>
                  <dl className="grid grid-cols-2 gap-4">
                    {Object.entries(formData.photos).map(([view, file]) => (
                      <div key={view}>
                        <dt className="text-sm font-medium text-gray-500">
                          {view.charAt(0).toUpperCase() + view.slice(1).replace('Side', ' Side')} View
                        </dt>
                        <dd className="text-sm text-gray-900">{file?.name || 'Not uploaded'}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Cable Routing */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Cable Configuration</h4>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Cable Color</dt>
                      <dd className="text-sm text-gray-900">{formData.cableColor}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Cable Route</dt>
                      <dd className="text-sm text-gray-900">{formData.cableRoute}</dd>
                    </div>
                  </dl>
                </div>

                {/* Energy Usage */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Energy Profile</h4>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Household Size</dt>
                      <dd className="text-sm text-gray-900">{formData.householdSize} {parseInt(formData.householdSize) === 1 ? 'Person' : 'People'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Monthly Usage</dt>
                      <dd className="text-sm text-gray-900">{formData.monthlyUsage} kWh</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Energy Vision</dt>
                      <dd className="text-sm text-gray-900">{formData.energyVision}</dd>
                    </div>
                    {formData.energyVisionDetails && (
                      <div className="col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Additional Details</dt>
                        <dd className="text-sm text-gray-900">{formData.energyVisionDetails}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Battery System */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Battery System</h4>
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Battery Capacity</dt>
                      <dd className="text-sm text-gray-900">{formData.batterySize}</dd>
                    </div>
                  </dl>
                </div>
              </div>
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

            {/* Contact Information Section */}
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-gray-700 mb-4">Contact Information</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Address
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1 || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Address Line 1"
                  required
                />
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2 || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Address Line 2 (Optional)"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="City"
                    required
                  />
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Postcode"
                    required
                  />
                </div>
              </div>

              {/* GDPR Consent */}
              <div className="mt-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="gdprConsent"
                      checked={formData.gdprConsent || false}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        gdprConsent: e.target.checked
                      }))}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-medium text-gray-700">GDPR Consent</label>
                    <p className="text-gray-500">
                      I consent to having my personal data processed in accordance with GDPR guidelines. 
                      We will only use your information to process your solar installation request 
                      with our trusted installers and will never share it with third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Design Your Home Energy System</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our simple step-by-step process to configure your perfect solar and battery system.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
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
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
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



