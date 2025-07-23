import React, { useState, useRef, ChangeEvent } from "react";
import { toPng } from "html-to-image";
import { Wand2, UploadCloud } from "lucide-react";
import download from "downloadjs";

import { Input } from "../../Components/DPForm/Input";
import { Button } from "../../Components/DPForm/Button";
import DPImage from "../../assets/images/DP/DPImage.png";
import DPTemplate from "./DPTemplate";

const hooks = [
  "Teching it easy!",
  "Code. Coffee. Repeat!",
  "Debugging life, one line at a time.",
  "Powered by caffeine",
  "Catch me at DevFest!",
  "Techie by choice and purpose. peace out!",
];

const DPForm: React.FC = () => {
  const [name, setName] = useState("");
  const [hook, setHook] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState("");
  const [showTemplate, setShowTemplate] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // File input ref for upload button click handling
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processImage(file);
  };

  const processImage = (file: File) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, GIF, or SVG images are allowed.");
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      // TODO: Add image size validation - I commented this because most of my images for testing are above 800 x 400
      // NOTE: and also since the image is not being stored or hosted I am thinking we can allow images above 800 x 400

      // if (img.width > 800 || img.height > 400) {
      //   alert(
      //     "Please upload an image with a maximum resolution of 800 x 400 pixels."
      //   );
      //   return;
      // }

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
    if (!isFormComplete) return;
    // Navigate to template page instead of generating image here
    setShowTemplate(true);
  };

  const handleDownloadClick = async () => {
    const dpCardElement = document.getElementById("dp-card");
    if (!dpCardElement) return;

    setIsDownloading(true);

    try {
      const dataUrl = await toPng(dpCardElement);
      download(dataUrl, `devfest-dp-${name}.png`, "image/png");
    } catch (error) {
      console.error("Error generating image:", error);
      alert("There was an error generating your image. Please try again.");
    } finally {
      setIsDownloading(false);
      setShowTemplate(false);
      setName("");
      setHook("");
      setImage(null);
      setImageURL("");
    }
  };

  const handleBackToForm = () => {
    setShowTemplate(false);
  };

  const isFormComplete = name && hook && image;

  return (
    <>
      {showTemplate ? (
        <div id="dp-template" className="dp-template-container">
          <DPTemplate
            name={name}
            hook={hook}
            imageURL={imageURL}
            onDownload={handleDownloadClick}
            onBack={handleBackToForm}
            isDownloading={isDownloading}
          />
        </div>
      ) : (
        <div className="container px-4 py-8 mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Form Section - Left Column */}
            <div className="p-8 lg:w-1/2 rounded-xl">
              <h2 className="pb-4 mb-8 text-3xl font-bold border-b-2 border-black">
                Input your details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block mb-3 font-semibold">Full Name</label>
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-lg rounded-2xl h-14"
                  />
                </div>

                <div>
                  <label className="block mb-3 font-semibold">
                    Upload Image
                  </label>
                  <div
                    className="relative flex flex-col justify-center h-64 p-12 text-center transition-all border-2 border-dashed cursor-pointer rounded-2xl hover:border-blue-500"
                    onClick={handleBoxClick}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    {imageURL ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={imageURL}
                          alt="Preview"
                          className="object-cover w-24 h-24 border-2 border-white rounded-full shadow"
                        />
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="mx-auto mb-2" size={40} />
                        <p className="text-sm">
                          Click or drag and drop your profile picture
                          <br />
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
                  <label className="block mb-3 font-semibold">Hook</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Optional one-liner"
                      value={hook}
                      onChange={(e) => setHook(e.target.value)}
                      className="text-lg rounded-2xl h-14"
                    />
                    <Button
                      type="button"
                      onClick={generateRandomHook}
                      variant="outline"
                      className="h-14"
                    >
                      <Wand2 size={20} />
                    </Button>
                  </div>
                </div>

                <Button
                  disabled={!isFormComplete}
                  onClick={handleGenerate}
                  className={`w-full rounded-2xl h-14 text-lg ${
                    !isFormComplete ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Generate
                </Button>
              </div>
            </div>

            <div className="hidden lg:w-1/2 lg:block items-center justify-center ">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                <img
                  src={DPImage}
                  alt="Frame"
                  className="absolute inset-0 w-full h-full object-contain rotate-[9deg] z-0 top-1/4"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DPForm;
