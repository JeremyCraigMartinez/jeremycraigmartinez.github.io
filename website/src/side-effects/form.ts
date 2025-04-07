export async function simulateSubmitForm(__prevState: string | null, formData: FormData): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      const name = formData.get('name');
      const email = formData.get('email')
      if (!name || !email) {
        resolve("Error: Name and Email are required.");
      } else {
        resolve(`Success! Name: ${name}, Email: ${email}`);
      }
    }, 1500); // Simulate network delay
  });
}