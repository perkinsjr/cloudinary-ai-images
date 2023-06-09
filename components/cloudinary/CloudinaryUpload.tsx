"use client"

import { CldUploadButton } from 'next-cloudinary';
import { buttonVariants } from "@/components/ui/button";

export const CloudinaryUpload = (props) => {
  return (
    <CldUploadButton className={buttonVariants({ size: 'lg' })}
      onUpload={(cloudinary, widget) => {
        props.handleImage(cloudinary.info)
        widget.close()
      }}
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}>
      Upload your image
    </CldUploadButton>
  )
}
