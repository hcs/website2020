const express = require('express');
const { parse } = require('url');
const { createServer } = require('https');
const next = require('next');
const app = next({ dir: "/hcs/website2020/hcs-website/" });
const handle = app.getRequestHandler();
const port = 4001;

const https = require('https');
const fs = require('fs');
const httpsOptions = {
  key: fs.readFileSync('/etc/ssl/private/hcs_harvard_edu.key'),
  cert: fs.readFileSync('/etc/ssl/certs/hcs_harvard_edu_cert.cer')
};
  //SSLCertificateChainFile /etc/ssl/certs/hcs_harvard_edu_interm.cer

app
  .prepare()
  .then(() => {
    createServer(httpsOptions, (req, res) => {
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
