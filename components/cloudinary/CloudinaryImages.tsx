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
    const newImage = await transformImageAction({ transformRequest: transform, originalImage: image });
    if (newImage) {
      setNewImage(newImage);
    }
  }
  return (
    <div>
      {!image && (
        <CloudinaryUpload handleImage={setImage} />
      )}
      {image && !newImage && (
        <>
          <CldImage
            width="600"
            height="600"
            src={"https://res.cloudinary.com/dub20ptvt/image/upload/v1686054889/xwkypizrao07ndiwvgck.png"}
            preserveTransformations
            alt="Description of my image"
          />
          <Input type="text" disabled={true} value={image} onChange={(e) => setImage(e.target.value)} />
          <Input className="mt-4" type="text" value={transform} onChange={(e) => setTransform(e.target.value)} />
          <Button
            className="mt-4"
            onClick={transformImage}> Transform </Button>
        </>
      )}
      {newImage && (
        <>
          <Image
            width="600"
            height="600"
            src={newImage}
            alt="Description of my image"
          />
          <Button onClick={() => setNewImage("")}> Revert </Button>
        </>
      )}
    </div>
  )
}
