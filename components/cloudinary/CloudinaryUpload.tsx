"use client"

import { CldUploadButton } from 'next-cloudinary';
import { buttonVariants } from "@/components/ui/button";

export const CloudinaryUpload = (props) => {
  return (
    <CldUploadButton className={buttonVariants({ size: 'lg' })}
      onUpload={(cloudinary, widget) => {
        props.handleImage(cloudinary.info.secure_url)
        widget.close()
      }}
      uploadPreset="c4mbxp3q">
      Upload your image
    </CldUploadButton>
  )
}
