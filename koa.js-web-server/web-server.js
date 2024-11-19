const Koa = require("koa");
const app = new Koa();

// Home page
app.use(async (ctx, next) => {
  if (ctx.path === "/") {
    ctx.body = "<h1>Index sayfasına hoş geldiniz</h1>";
  } else {
    await next();
  }
});

// About Me page
app.use(async (ctx, next) => {
  if (ctx.path === "/hakkimda") {
    ctx.body = "<h1>Hakkımda sayfasına hoş geldiniz</h1>";
  } else {
    await next();
  }
});

// Contact page
app.use(async (ctx, next) => {
  if (ctx.path === "/iletisim") {
    ctx.body = "<h1>İletişim sayfasına hoş geldiniz</h1>";
  } else {
    await next();
  }
});

// 404 Not Found page
app.use(async (ctx) => {
  ctx.status = 404;
  ctx.body = "<h1>404 Sayfa Bulunamadı</h1>";
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
