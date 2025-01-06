import ContactForm from "@/sections/InquiryForm"; // Adjust the path to your file
import { Header } from "@/sections/Header";

export default function Inquiry() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#183EC2,_#EAEEFE)] flex flex-col justify-between">
      <main className="container mx-auto px-4 py-12">
        <ContactForm />
      </main>
    </div>
  );
}
