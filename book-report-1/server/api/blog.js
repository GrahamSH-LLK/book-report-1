import fs from "fs/promises";
import { constants } from "fs";
import matter from "gray-matter";
import { reporter } from "vfile-reporter";
import { remark } from "remark";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

let markdown = remark();
markdown.use(remarkPresetLintRecommended).use(remarkHtml);

export default async (req, res) => {
  if (req.url !== "/") {
    let slug = req.url.replace("/", "");
    let path = `content/${slug}.md`;
    let fileExists = false;
    try {
      await fs.access(path, constants.R_OK | constants.W_OK);
      let file = await fs.readFile(`content/${slug}.md`);
      let raw = Buffer.from(file).toString();
      let { content, data } = matter(raw);

      let proccessed = await markdown.process(content);
      console.error(reporter(proccessed));
      let html = String(proccessed);
      return {
        raw: content,
        html,
        data,
      };
    } catch (error) {
      console.log(error);
      return { error: "no file" };
    }
  } else {
    let dir = await fs.readdir("content/");
    return dir.map(async (file) => {
      let fileRead = await fs.readFile(`content/${slug}.md`);
      let raw = Buffer.from(fileRead).toString();
      let { content, data } = matter(raw);

      let proccessed = await markdown.process(content);
      return {proccessed, data}
    });
    
  }
};
