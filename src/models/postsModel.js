import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

const postFileDir = path.resolve("src/data", "posts.json");

const getPostsFromFile = (cb) => {
  fs.readFile(postFileDir, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

export default class Posts {
  constructor(title, body) {
    this.titlePost = title;
    this.bodyPost = body;
  }

  save() {
    this.id = uuidv4();

    getPostsFromFile((posts) => {
      posts.push(this);
      fs.writeFile(postFileDir, JSON.stringify(posts), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getPostsFromFile(cb);
  }

  static getPostById(id, cb) {
    getPostsFromFile((posts) => {
      const post = posts.find((p) => p.id === id);
      cb(post);
    });
  }
}
