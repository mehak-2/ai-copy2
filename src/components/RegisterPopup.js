"use client"
import React, { useState, useEffect } from 'react';
import { useCta } from '../contexts/CtaContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const popupVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const RegisterPopup = () => {
  const { createCta } = useCta();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const isEmailValid = emailRegex.test(email);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    if (!isEmailValid) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    const res = await createCta({ email, number });
    setLoading(false);
    if (res.success) {
      setSuccess(true);
      setTimeout(() => setShow(false), 1000);
    } else {
      setError(res.data?.error || 'Registration failed.');
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          initial={{ opacity: 0, x: '-100vw', scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }}
          exit={{ opacity: 0, x: '100vw', scale: 0.95, transition: { duration: 0.4, ease: [0.55, 0.06, 0.68, 0.19] } }}
        >
          <motion.div
            className="bg-white  rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-primary-100  transition-colors duration-200"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-400  hover:text-primary-600  text-2xl transition-colors duration-200"
              onClick={handleClose}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-extrabold mb-6 text-center bg-[#444CE7] from-primary-600 via-purple-600 to-pink-500 bg-clip-text text-transparent   transition-colors">Register for Updates</h2>
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 25 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-200 via-green-100 to-primary-100  rounded-2xl mb-4 shadow-lg transition-colors"
                  >
                    <CheckCircle className="w-8 h-8 text-green-600 transition-colors" />
                  </motion.div>
                  <div className="text-green-600  font-bold text-lg text-center transition-colors">Thank you for registering!</div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-700 transition-colors">Email</label>
                    <input
                      type="email"
                      className={`form-input pr-10 ${isEmailValid && emailTouched ? 'border-green-400 ' : ''}`}
                      value={email}
                      onChange={e => { setEmail(e.target.value); setEmailTouched(true); }}
                      onBlur={() => setEmailTouched(true)}
                      required
                    />
                    <AnimatePresence>
                      {isEmailValid && emailTouched && (
                        <motion.span
                          key="check"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          className="absolute right-3 top-9 text-green-500  transition-colors"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 transition-colors">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={number}
                      onChange={e => setNumber(e.target.value)}
                      required
                    />
                  </div>
                  {error && <div className="text-red-500  text-sm text-center transition-colors">{error}</div>}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-bold text-white bg-[#444CE7] hover:from-primary-700 hover:via-purple-700 hover:to-pink-600  shadow-lg transition-all duration-200 disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? 'Registering...' : 'Register'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterPopup; 