import path from "path";
import fs from "fs/promises";

class sync {
  constructor(repopath = ".") {
    this.repopath = path.join(repopath, ".sync");
    this.objectspath = path.join(this.repopath, "objects");
    this.headpath = path.join(this.repopath, "HEAD");
    this.indexpath = path.join(this.repopath, "index");
    this.init();
  }

  async init() {
    await fs.mkdir(this.objectspath, { recursive: true });

    try {
      await fs.writeFile(this.headpath, "", { flag: "wx" });
      await fs.writeFile(this.indexpath, JSON.stringify([]), { flag: "wx" });
    } catch (error) {
      console.log("already initilized the .sync folder: " + error.message);
    }
  }


  hashobject(content){
    
  }

  async addfile(addfile){

  }
}

const Sync = new sync();
