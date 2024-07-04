import Footer from "../_components/Footer";
import TestimonialSlider from "../_components/TestimonialSlider2";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-orange-200 via-orange-100 to-white py-12">
      <div className="container mx-auto px-10">
        {/* <TestimonialSlider /> */}
        <TestimonialSlider/>
      </div>
    </div>
    <Footer/>
    </>

  );
}