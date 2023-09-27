import { formSchema } from "@/types/formSchema";
import toast from "react-hot-toast";
import { z } from "zod";

export function sendEmail(data: z.infer<typeof formSchema>) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message);
    })
    .catch((err) => {
      toast.error(err.message);
    });
}
