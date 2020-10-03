const express = require('express');
const { parse } = require('url');
const { createServer } = require('http');
const next = require('next');
const app = next({ dir: "/hcs/website2020/hcs-website/" });
const handle = app.getRequestHandler();
const port = 4000;

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${port}`);
    })
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
