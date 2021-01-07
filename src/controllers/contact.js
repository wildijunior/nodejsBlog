import path from "path";

const info = {
  name: "Wildi Jr",
  email: "wildi.oliveira.junior@gmail.com",
};

export default {
  getContact(req, res) {
    res.render(path.resolve("src/views/contact"), {
      contact: info,
    });
  },
};
