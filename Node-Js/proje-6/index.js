const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.path === "/") {
    ctx.type = "html";
    ctx.status = 200;
    ctx.body = "<h1>Index sayfasina hosgeldiniz.</h1>";
  } else if (ctx.path === "/about") {
    ctx.status = 200;
    ctx.type = "html";
    ctx.body = "<h1>Hakkimda sayfasina hosgeldiniz.</h1>";
  } else if (ctx.path === "/contact") {
    ctx.status = 200;
    ctx.type = "html";
    ctx.body = "<h1>Iletisim sayfasina hosgeldiniz.</h1>";
  } else {
    ctx.status = 404;
    ctx.type = "html";
    ctx.body = "<h1>404 Sayfa bulunamadı.</h1>";
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port:${port} da çalışmaya başladı...`);
});
