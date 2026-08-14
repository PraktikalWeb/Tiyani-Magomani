"use client";
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: string | number;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger(props: { children: ReactNode, className?: string, key?: string | number }) {
  const { children, className = "" } = props;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStaggerItem(props: { children: ReactNode, className?: string, key?: string | number, id?: string }) {
  const { children, className = "", id } = props;
  return (
    <motion.div
      id={id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
