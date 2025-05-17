import AboutGridItems from "@/components/custom/AboutGridItems";
import Footer from "@/components/sections/Footer";
import paymentPolicyContent from "@/data/paymentPolicy";

const PaymentPolicy = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <h1 className="text-theme text-6xl text-center py-16">
          Payment Policy
        </h1>
        <div className="text-center max-w-[1000px] mx-auto">
          <p>
            At Click Baitz, we are committed to providing transparent and
            professional financial terms to ensure a seamless collaboration with
            our valued clients. Our payment policies are designed to uphold
            clarity, efficiency, and mutual accountability.
          </p>
        </div>
        <div className="max-w-[1000px] mx-auto">
          {/* <div className="min-h-screen"> */}
          {paymentPolicyContent.map((content, index) => (
            <AboutGridItems
              key={index}
              // tagBehind={"story"}
              title={content.title}
              description={content.description}
            />
          ))}
        </div>
        <div className="text-center max-w-[1000px] mx-auto">
          <p>
            By engaging with our services, clients acknowledge and agree to the
            terms outlined in this Payment Policy.
          </p>
          <p>
            For inquiries, contact us at{" "}
            <a href="mailto:hello@clickbaitz.com" className="underline">
              hello@clickbaitz.com
            </a>
            .
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentPolicy;
