import { formSchema } from "@/types/formSchema";
import { z } from "zod";

export function sendEmail(data: z.infer<typeof formSchema>) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert(err);
    });
}
