import { motion } from "framer-motion";

export default function Test() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2 }}
      style={{ background: "red", width: "200px", height: "200px" }}
    >
      Hello Motion
    </motion.div>
  );
}
