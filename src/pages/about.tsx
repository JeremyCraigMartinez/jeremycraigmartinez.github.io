import { useActionState } from "react";
import { useState } from "react";
import { simulateSubmitForm } from "../side-effects/form";

interface LocalFormData {
    name: string
    email: string
}

const About: React.FC = () => {
    const [formData, setFormData] = useState<LocalFormData>({ name: "", email: "" });
    const [message, formAction, isPending] = useActionState(simulateSubmitForm, null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
        <h2>Contact Form</h2>
        <form action={formAction}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
  
        {message && <p>{message}</p>}
      </div>
    );
}

export default About;