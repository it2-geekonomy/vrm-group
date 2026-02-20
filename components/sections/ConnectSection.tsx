import Link from "next/link";
import Typography from "@/components/ui/Typography";

export default function ConnectSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Typography 
          variant="display-xl" 
          className="font-cormorant text-white mb-6 md:mb-8"
        >
          Connect With VRM Group
        </Typography>
        
        <Typography 
          variant="h2" 
          className="font-cormorant text-white font-medium mb-8 md:mb-10 max-w-7xl mx-auto"
        >
          Whether you are exploring opportunities, partnerships or services, our team is ready to collaborate. Reach out to us to learn more about our businesses and ongoing initiatives.
        </Typography>
        
        <Link href="/contact">
          <button className="bg-[#ED1C2475] border border-white rounded-2xl px-8 py-3 md:px-28 md:py-2 transition-colors cursor-pointer">
            <Typography 
              variant="h4" 
              className="font-cormorant text-white"
            >
              Contact Us
            </Typography>
          </button>
        </Link>
      </div>
    </section>
  );
}
