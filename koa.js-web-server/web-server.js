const Koa = require("koa");
const app = new Koa();

// Home page
app.use(async (ctx, next) => {
  if (ctx.path === "/") {
    ctx.body = "<h1>Welcome to the Index page</h1>";
  } else {
    await next();
  }
});

// About Me page
app.use(async (ctx, next) => {
  if (ctx.path === "/hakkimda") {
    ctx.body = "<h1>Welcome to the About Me page</h1>";
  } else {
    await next();
  }
});

// Contact page
app.use(async (ctx, next) => {
  if (ctx.path === "/iletisim") {
    ctx.body = "<h1>Welcome to the Contact page</h1>";
  } else {
    await next();
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
