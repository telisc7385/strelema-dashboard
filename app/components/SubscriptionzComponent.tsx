"use client";
import { useState } from "react";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="w-full flex justify-center py-16 bg-white">
      <div className="bg-[#f8f5ff] rounded-xl p-8 md:p-16 w-[90%] md:w-[80%] text-center shadow-lg container relative"
      style={{ borderTopLeftRadius: "4rem" }}>
        {!submitted ? (
          <>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4">
              Subscribe to get information, latest news and other interesting
              offers about Travello
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row justify-center items-center gap-3 mt-10"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 rounded-xl border border-gray-300 w-full md:w-[350px] focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white font-medium px-8 py-3 rounded-xl hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-2xl font-semibold text-gray-800">
              🎉 Thank you!
            </h3>
            <p className="text-gray-600 mt-2">
              We’ll contact you soon with our latest updates.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-5 text-sm text-orange-500 underline"
            >
              Subscribe again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
