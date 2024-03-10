import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    alert("Thank you. I will get back to you as soon as possible.");
    setLoading(false);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        {/* <h3 className={styles.sectionHeadText}>Contact</h3> */}

        <form ref={formRef} onSubmit={handleSubmit} className='mt-4 flex flex-col gap-4'>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Your Name'
            className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />

          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Your Email'
            className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />

          <textarea
            rows={5}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Your Message'
            className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />

          <button
            type='submit'
            className='bg-tertiary py-3 px-6 rounded-lg outline-none text-white font-bold shadow-md hover:shadow-primary transition duration-300'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
