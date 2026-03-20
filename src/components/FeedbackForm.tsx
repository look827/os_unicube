import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", vision: "" });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await addDoc(collection(db, "feedbacks"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", vision: "" });
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError("Failed to transmit your vision. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 block">Feedback</span>
        <h2 className="text-5xl font-bold tracking-tight mb-6">What does your perfect OS look like?</h2>
        <p className="text-white/50 text-lg mb-12">
          We're building UNICUBE for you. Tell us what features, designs, or workflows you need most.
        </p>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 flex flex-col items-center gap-4"
          >
            <CheckCircle2 size={48} className="text-cyan-400" />
            <h3 className="text-2xl font-bold">Message Received</h3>
            <p className="text-white/60">Thank you for shaping the future of UNICUBE. Sehajdeep and Jayansh will review your feedback.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 text-cyan-400 hover:underline font-mono text-sm uppercase tracking-widest"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hello@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">Your Vision</label>
              <textarea 
                required
                rows={5}
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                placeholder="I need an OS that..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>
            {error && <p className="text-red-400 text-sm font-mono">{error}</p>}
            <button 
              disabled={loading}
              className="w-full bg-white text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all disabled:opacity-50"
            >
              {loading ? "Transmitting..." : (
                <>
                  Submit Feedback <Send size={18} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
