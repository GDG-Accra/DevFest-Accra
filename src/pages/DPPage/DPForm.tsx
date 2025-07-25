import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "../../Components/DPForm/Button";
import { Input } from "../../Components/DPForm/Input";
import { assets } from "../../assets/assets";

interface FormData {
  name: string;
  role: string;
}

const DPForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    role: "",
  });

  const cardRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
      });

      const link = document.createElement('a');
      link.download = `devfest-accra-2025-${formData.name || 'dp'}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Create Your DevFest Accra 2025 DP
            </h1>
            
            <div className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full"
              />
              
              <Input
                type="text"
                name="role"
                placeholder="Enter your role/title"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full"
              />
              
              <Button
                onClick={handleDownload}
                disabled={!formData.name}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
              >
                Download DP
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="flex justify-center">
            <div 
              ref={cardRef}
              className="relative w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg overflow-hidden"
            >
              <img
                src={assets.dp.dpImage}
                alt="DevFest Accra 2025 DP Template"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-xl font-bold mb-1">
                  {formData.name || "Your Name"}
                </h2>
                <p className="text-sm opacity-90">
                  {formData.role || "Your Role"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DPForm;
