import { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";
import { InlineWidget } from "react-calendly";

export default function Call() {
  const [tab, setTab] = useState("form");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () =>
    form.name && form.message && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const handleSubmit = () => {
    if (!validate()) {
      setResult("⚠️ Please fill all fields correctly.");
      return;
    }

    setLoader(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/haris@clickbaitz.com", form)
      .then(() => {
        setResult("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoader(false);
      })
      .catch(() => {
        setResult("❌ Submission failed. Try again later.");
        setLoader(false);
      });
  };

  return (
    <section className="bg-[#0d0d0d] text-theme">
      {/* Tabs */}
      <div className="flex justify-center items-center mb-8 gap-4">
        <button
          onClick={() => setTab("form")}
          className={` px-4 md:px-6 py-2 text-sm md:text-base rounded-full font-semibold transition ${
            tab === "form"
              ? "bg-theme  hover:bg-[#e2c036] text-black transition-all duration-300"
              : "bg-white/5 hover:bg-white/10  transition-all duration-300"
          }`}
        >
          Reach Us Out
        </button>
        {/* <p className="font-semibold">OR</p> */}
        <button
          onClick={() => setTab("calendly")}
          className={` px-4 md:px-6 py-2 text-sm md:text-base  rounded-full font-semibold transition ${
            tab === "calendly"
              ? "bg-yellow-400 text-black"
              : "bg-white/5 hover:bg-white/10"
          }`}
        >
          Book a Call
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl h-fit mx-auto bg-[#0A0A0A] border border-yellow-400/20 shadow-yellow-500/10 p-6 md:p-10 rounded-xl shadow-xl transition-all duration-500">
        <AnimatePresence mode="wait">
          {tab === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4 }}
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full mb-4 px-5 py-3 rounded-md bg-white/10  placeholder-white/30 text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full mb-4 px-5 py-3 rounded-md bg-white/10  placeholder-white/30 text-white focus:outline-none"
              />
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full mb-4 px-5 py-3 rounded-md bg-white/10 placeholder-white/30 text-white focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                disabled={loader}
                className="bg-theme  hover:bg-[#e2c036] text-black w-full py-3 rounded-md font-semibold transition-all duration-300"
              >
                {loader ? (
                  <div className="flex justify-center">
                    <Oval
                      height={20}
                      width={20}
                      color="black"
                      strokeWidth={4}
                    />
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
              <p className="text-sm mt-3 text-center text-white">{result}</p>
            </motion.div>
          ) : (
            <motion.div
              key="calendly"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="rounded-md">
                <InlineWidget
                  url="https://calendly.com/clickbaitz/meeting"
                  styles={{ height: "800px", width: "100%" }}
                  pageSettings={{
                    backgroundColor: "0d0d0d",
                    textColor: "FDD034",
                    primaryColor: "FFD700",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
