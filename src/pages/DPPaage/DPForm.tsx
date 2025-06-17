
import React, { useState, useRef, ChangeEvent } from "react";
import { Wand2, UploadCloud } from "lucide-react";
import html2canvas from "html2canvas";

import { Input } from "../../Components/DPForm/Input";
import { Button } from "../../Components/DPForm/Button";
import { CardContent } from "../../Components/DPForm/CardContent";
import DPImage from "../../assets/images/DP/DPImage.png";

const hooks = [
  "Teching it easy!",
  "Code. Coffee. Repeat!",
  "Debugging life, one line at a time.",
  "Powered by caffeine",
  "Catch me at DevFest!",
];

const DPForm: React.FC = () => {
  const [name, setName] = useState("");
  const [hook, setHook] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState("");
  const [generatedImageURL, setGeneratedImageURL] = useState<string | null>(null);

  const previewRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processImage(file);
  };

  const processImage = (file: File) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, GIF, or SVG images are allowed.");
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      if (img.width > 800 || img.height > 400) {
        alert("Please upload an image with a maximum resolution of 800 x 400 pixels.");
        return;
      }

      setImage(file);
      setImageURL(img.src);
    };
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processImage(file);
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const generateRandomHook = () => {
    const random = hooks[Math.floor(Math.random() * hooks.length)];
    setHook(random);
  };

  const handleGenerate = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current);
    const dataUrl = canvas.toDataURL();
    setGeneratedImageURL(dataUrl);
  };

  const handleDownloadClick = () => {
    if (!generatedImageURL) return;
    const link = document.createElement("a");
    link.download = `${name}_devfest_dp.png`;
    link.href = generatedImageURL;
    link.click();
  };

  const isFormComplete = name && hook && image;

  return (
    <div className="grid md:grid-cols-2 gap-4 min-h-screen">
      {/* Form Section */}
      <div className="space-y-6 p-6 md:p-10 bg-white">
        <label className="block font-bold text-3xl border-b-2 border-black pb-4">Input your details</label>

        <div className="space-y-6">
          <div>
            <label className="block font-semibold mb-3">Full Name</label>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-2xl h-14 text-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-3">Upload Image</label>
            <div
              className="border-dashed border-2 rounded-2xl p-12 h-64 flex flex-col justify-center text-center cursor-pointer hover:border-blue-500 transition-all relative"
              onClick={handleBoxClick}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              {imageURL ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={imageURL}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
              ) : (
                <>
                  <UploadCloud className="mx-auto mb-2" size={40} />
                  <p className="text-sm">
                    Click or drag and drop your profile picture<br />
                    SVG, PNG, JPG or GIF (max. 800 x 400 px)
                  </p>
                </>
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-3">Hook</label>
            <div className="flex gap-2">
              <Input
                placeholder="Optional one-liner"
                value={hook}
                onChange={(e) => setHook(e.target.value)}
                className="rounded-2xl h-14 text-lg"
              />
              <Button type="button" onClick={generateRandomHook} variant="outline" className="h-14">
                <Wand2 size={20} />
              </Button>
            </div>
          </div>

          <Button
            disabled={!isFormComplete}
            onClick={handleGenerate}
            className={`w-full rounded-2xl h-14 text-lg ${!isFormComplete ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Generate
          </Button>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div ref={previewRef} className="relative w-full h-full">
          {/* Frame Image - fills background */}
          <img
            src={DPImage}
            alt="Frame"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay Content */}
          <CardContent className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
            {imageURL ? (
              <img
                src={imageURL}
                alt="Uploaded Preview"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
                <UploadCloud size={32} className="text-gray-500" />
              </div>
            )}
            <h2 className="text-2xl font-bold mt-4 text-black drop-shadow-md">{name}</h2>
            {hook && <p className="mt-1 text-black italic drop-shadow-md">{hook}</p>}
          </CardContent>

          {/* Download Button */}
          {generatedImageURL && (
            <div className="text-center mt-4 absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
              <Button onClick={handleDownloadClick} className="rounded-2xl h-12 px-6">
                Download Image
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DPForm;
