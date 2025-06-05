import React, { useState, useRef, ChangeEvent } from "react";
import { Wand2, UploadCloud } from "lucide-react";
import html2canvas from "html2canvas";

import {Input} from "../../Components/DPForm/Input"
import { Button } from "../../Components/DPForm/Button";
import { CardContent } from "../../Components/DPForm/CardContent";


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
  const previewRef = useRef<HTMLDivElement | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    processImage(file);
  };

  const processImage = (file: File) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (Math.abs(img.width - img.height) > 100) {
        alert("Please upload an image with a square resolution.");
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

  const generateRandomHook = () => {
    const random = hooks[Math.floor(Math.random() * hooks.length)];
    setHook(random);
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current);
    const link = document.createElement("a");
    link.download = `${name}_devfest_dp.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 p-6 md:p-10 bg-white min-h-screen">
      {/* Left Panel: Form */}
      <div className="space-y-6">
        <div>
          <label className="block font-semibold">Full Name</label>
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-2xl"
          />
          <p className="text-sm text-muted-foreground">
            Nickname, first name, how you want it
          </p>
        </div>

        <div>
          <label className="block font-semibold">Upload Image</label>
          <div
            className="border-dashed border-2 rounded-2xl p-4 text-center cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <UploadCloud className="mx-auto mb-2" size={32} />
            <p>Drag and drop to upload or browse</p>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-2"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Preferably in a square resolution
          </p>
        </div>

        <div>
          <label className="block font-semibold">Hook Line</label>
          <div className="flex gap-2">
            <Input
              placeholder="Optional one-liner"
              value={hook}
              onChange={(e) => setHook(e.target.value)}
              className="rounded-2xl"
            />
            <Button type="button" onClick={generateRandomHook} variant="outline">
              <Wand2 size={18} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Press the wand if you’re not creative enough 😂
          </p>
        </div>

        <Button
          disabled={!name || !image}
          onClick={handleDownload}
          className="w-full rounded-2xl"
        >
          Generate
        </Button>
      </div>

      {/* Right Panel: Preview */}
      <div className="flex items-center justify-center">
        <div
          ref={previewRef}
          className="w-full max-w-sm rounded-2xl shadow-lg p-6 bg-gradient-to-br from-yellow-400 via-green-400 to-blue-400 text-center"
        >
          <CardContent className="flex flex-col items-center">
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
            <h2 className="text-2xl font-bold mt-4 text-white drop-shadow-md">{name}</h2>
            {hook && <p className="mt-1 text-white italic drop-shadow-md">{hook}</p>}
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default DPForm;
