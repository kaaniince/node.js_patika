// Blog postlarımızı tutacak array
let blogPosts = [
  {
    id: 1,
    title: "İlk Blog Yazısı",
    author: "Ahmet Yılmaz",
    content: "Blog içeriği burada...",
    date: "15.03.2024",
  },
  {
    id: 2,
    title: "JavaScript Dersleri",
    author: "Kaan İnce",
    content: "JavaScript dersleri içeriği...",
    date: "16.03.2024",
  },
];

// Blog postlarını getiren fonksiyon
const getPosts = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("\n=== Blog Yazıları ===\n");
        blogPosts.forEach((post) => {
          console.log(`ID: ${post.id}`);
          console.log(`Başlık: ${post.title}`);
          console.log(`Yazar: ${post.author}`);
          console.log(`Tarih: ${post.date}`);
          console.log("-----------------\n");
        });
        resolve(blogPosts);
      }, 1000);
    } catch (error) {
      reject("Blog yazıları getirilirken hata oluştu: " + error);
    }
  });
};

// Yeni post ekleyen fonksiyon
const createPost = (post) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        // Post verilerini kontrol et
        if (!post.title || !post.author || !post.content) {
          throw new Error("Eksik bilgi girdiniz!");
        }

        const newPost = {
          id: blogPosts.length + 1,
          title: post.title,
          author: post.author,
          content: post.content,
          date: new Date().toLocaleDateString(),
        };

        blogPosts.push(newPost);
        resolve(newPost);
      }, 1000);
    } catch (error) {
      reject("Yeni yazı eklenirken hata oluştu: " + error);
    }
  });
};

// Ana fonksiyon
async function manageBlog() {
  try {
    // Mevcut yazıları listele
    console.log("Mevcut blog yazıları getiriliyor...");
    await getPosts();

    // Yeni yazı oluştur
    const yeniPost = {
      title: "Async/Await Kullanımı",
      author: "Mehmet Demir",
      content: "Async/await kullanımı hakkında detaylı bilgi...",
    };

    console.log("\nYeni yazı ekleniyor...");
    await createPost(yeniPost);
    console.log("Yeni yazı başarıyla eklendi!");

    // Güncel listeyi göster
    console.log("\nGüncel blog yazıları:");
    await getPosts();
  } catch (error) {
    console.error("Hata:", error);
  }
}

// Programı çalıştır
manageBlog();
