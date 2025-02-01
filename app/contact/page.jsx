"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@headlessui/react";
import { TbArrowUpRight } from "react-icons/tb";
import { toast, Toaster } from "react-hot-toast"; // ✅ Correct the import

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully! 🚀"); // ✅ Corrected usage
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        toast.error(`❌ Error: ${errorData.error}`); // ✅ Corrected usage
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("⚠️ Oops! Something went wrong. Please try again."); // ✅ Corrected usage
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Please feel free to ask anything.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <Input type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <Input type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <Input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="sm:col-span-2" />
          <Input type="text" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="sm:col-span-2" />
          <Textarea id="message" placeholder="Type your message here..." value={formData.message} onChange={handleChange} required className="sm:col-span-2" />
        </div>

        <Switch.Group as="div" className="mt-4 flex items-center gap-3">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className={classNames(
              agreed ? "bg-primary" : "bg-gray-200",
              "relative inline-flex h-6 w-11 items-center rounded-full transition duration-200"
            )}
          >
            <span className="sr-only">Agree to policies</span>
            <span
              className={classNames(
                agreed ? "translate-x-6 bg-white" : "translate-x-1 bg-gray-400",
                "inline-block h-4 w-4 transform rounded-full transition duration-200"
              )}
            />
          </Switch>
          <Switch.Label className="text-sm text-gray-600">
            By selecting this, you agree to our <a href="https://www.mospi.gov.in/privacy-policy" className="hover:text-primary hover:underline">privacy policy</a>.
          </Switch.Label>
        </Switch.Group>

        <div className="mt-10">
          <Button type="submit" disabled={!agreed || loading} className="flex w-full items-center justify-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            {loading ? "Sending..." : "Let's Talk"}
            {!loading && <TbArrowUpRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </form>

      <Toaster position="top-right" reverseOrder={false} /> {/* Add Toaster */}
    </div>
  );
}
