import { formSchema } from "@/types/formSchema";
import { z } from "zod";

export function sendEmail(data: z.infer<typeof formSchema>) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
