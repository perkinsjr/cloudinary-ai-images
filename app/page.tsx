import { CloudinaryImage } from "@/components/cloudinary/CloudinaryImages"
export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 	">
      <div className="flex max-w-[980px] flex-col items-start">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Transform your images <br className="hidden sm:inline" />
          just use a command.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Cloudinary powered upload, and transformation using AI.
        </p>
      </div>
      <div className="flex gap-4 justify-center align-middle content-center	">
        <CloudinaryImage />

      </div>
    </section>
  )
}
