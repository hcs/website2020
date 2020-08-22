import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts')

export default async function getSortedPostsData(max = 10) {
  try {
    const ids = getAllPostIds();
    let data = [];

    for(let i = 0; i < max && i < ids.length; i++) {
      data.push(await getPostData(ids[i]));
    }

    return data;
  } catch {
    return [];
  }
}

function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames;
}

async function getPostData(id) {
  const fullPath = path.join(postsDirectory, id);
  const fileContents = JSON.parse(fs.readFileSync(fullPath));

  return fileContents;
}
