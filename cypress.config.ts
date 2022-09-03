import { defineConfig } from "cypress";
const ms = require("smtp-tester");

interface Email {
  body: string;
  html: string;
  headers: {
    from: string;
    to: string;
  };
}

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const port = 7777;
      const mailServer = ms.init(port);
      console.log("mail server at port %d", port);

      let recievedEmail: Email = {
        body: "",
        html: "",
        headers: {
          from: "",
          to: "",
        },
      };

      mailServer.bind((addr: string, id: string, email: Email) => {
        console.log(email);

        recievedEmail = {
          body: email.body,
          html: email.html,
          headers: {
            from: email.headers.from,
            to: email.headers.to,
          },
        };
      });

      on("task", {
        getMail() {
          return recievedEmail || null;
        },
      });
    },
  },
});
