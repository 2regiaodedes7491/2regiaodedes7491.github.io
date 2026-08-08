import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const file = await readFile(join(process.cwd(), "public", "resume.pdf"));
  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Stavya_Srinath_Resume.pdf"',
      "Content-Length": String(file.byteLength),
      "Cache-Control": "public, max-age=604800",
    },
  });
}