import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {centered && <div className="section-divider mb-6" />}
      {description && (
        <p
          className={`max-w-2xl ${
            centered ? "mx-auto" : ""
          } text-muted-foreground text-lg`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};