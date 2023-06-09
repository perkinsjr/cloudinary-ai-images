"use client"
import { CldImage } from 'next-cloudinary';
import { useState } from "react";
import { CloudinaryUpload } from "./CloudinaryUpload";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { transformImageAction } from "@/app/_actions";
import Image from "next/image"
export const CloudinaryImage = () => {
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState("")
  const [transform, setTransform] = useState("")

  async function transformImage() {
    const newImage = await transformImageAction({ transformRequest: transform, originalImage: image.secure_url });
    if (newImage) {
      setNewImage(newImage);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    await transformImage();
  }

  return (
    <div>
      {!image && (
        <CloudinaryUpload handleImage={setImage} />
      )}
      {image && !newImage && (
        <form onSubmit={handleOnSubmit} className="max-w-md">
          <CldImage
            width={image.width}
            height={image.height}
            src={image.secure_url}
            preserveTransformations
            alt="Description of my image"
            sizes="(min-width: 500px) 50vw, (max-width: 500px) 100vw"
          />
          <Input className="mt-4" type="text" disabled={true} value={image.secure_url} onChange={(e) => setImage(e.target.value)} />
          <Input className="mt-4" type="text" value={transform} onChange={(e) => setTransform(e.target.value)} />
          <Button className="mt-4">Transform</Button>
        </form>
      )}
      {newImage && (
        <div className="max-w-md">
          <Image
            width={image.width}
            height={image.height}
            src={newImage}
            alt="Description of my image"
            sizes="(min-width: 500px) 50vw, (max-width: 500px) 100vw"
          />
          <Input className="mt-4" type="text" disabled={true} value={newImage} />
          <Button className="mt-4" onClick={() => setNewImage("")}> Revert </Button>
        </div>
      )}
    </div>
  )
}
