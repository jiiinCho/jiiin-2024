import { About } from "../../interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const aboutDirectory = join(process.cwd(), "_about");

export function getAboutContent(): About {
  const fullPath = join(aboutDirectory, `about.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, content } as About;
}
