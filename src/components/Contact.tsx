import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_messages').insert([
        { name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim() },
      ]);
      if (error) throw error;
      toast.success('Message sent!', { description: "Thanks for reaching out — I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong', { description: 'Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { Icon: Github, url: 'https://github.com/Netaasree', label: 'GitHub' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/netaasree-bhimaraju-35261826a/', label: 'LinkedIn' },
    { Icon: Mail, url: 'mailto:bnssrs05@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Have a project in mind or just want to say hi? Send a message.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 sm:p-10 space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="bg-white/5 border-white/20 focus:border-lightblue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={255}
                className="bg-white/5 border-white/20 focus:border-lightblue-400"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={2000}
              className="bg-white/5 border-white/20 focus:border-lightblue-400 resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-lightblue-500 to-purple-500 text-white font-semibold hover:opacity-90"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send size={16} /> Send Message
              </span>
            )}
          </Button>
        </motion.form>

        <div className="flex justify-center gap-4 mt-10">
          {socials.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              aria-label={label}
              target={url.startsWith('http') ? '_blank' : undefined}
              rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 glass rounded-full hover:-translate-y-1 hover:text-lightblue-400 transition-all duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
