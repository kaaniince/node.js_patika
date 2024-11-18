let blogPosts = [
  {
    id: 1,
    title: "✨ Web Geliştirme Yolculuğum",
    author: "Ahmet Yılmaz",
    content:
      "Merhaba! Bu yazımda sizlerle web geliştirme serüvenimde öğrendiklerimi ve deneyimlerimi paylaşacağım. HTML, CSS ve JavaScript'in temellerinden başlayarak modern framework'lere kadar uzanan bu yolculukta karşılaştığım zorlukları ve çözüm yollarını anlatacağım...",
    date: "15.03.2024",
  },
  {
    id: 2,
    title: "🚀 JavaScript'te İleri Seviye Teknikler",
    author: "Kaan İnce",
    content:
      "Modern JavaScript geliştirmede kullanılan ileri seviye teknikler, promise yapıları, async/await kullanımı ve performans optimizasyonu hakkında detaylı bir rehber hazırladım...",
    date: "16.03.2024",
  },
];

const getPosts = (callback) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("\n📚 === Blog Yazıları === 📚\n");
        blogPosts.forEach((post) => {
          console.log(`📌 ID: ${post.id}`);
          console.log(`📝 Başlık: ${post.title}`);
          console.log(`✍️ Yazar: ${post.author}`);
          console.log(`📅 Tarih: ${post.date}`);
          console.log("------------------------\n");
        });
        resolve(blogPosts);
        if (callback) callback(blogPosts);
      }, 1000);
    } catch (error) {
      reject("❌ Blog yazıları getirilirken hata oluştu: " + error);
    }
  });
};

const createPost = (post, callback) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
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
        if (callback) callback(newPost);
      }, 1000);
    } catch (error) {
      reject("❌ Yeni yazı eklenirken hata oluştu: " + error);
    }
  });
};

async function manageBlog() {
  try {
    console.log("📡 Mevcut blog yazıları getiriliyor...");
    await getPosts((posts) => {
      console.log("🔍 Toplam yazı sayısı:", posts.length);
    });

    const yeniPost = {
      title: "🔄 Async/Await ile Modern JavaScript",
      author: "Mehmet Demir",
      content:
        "Modern JavaScript'in en güçlü özelliklerinden biri olan async/await yapısını derinlemesine inceliyoruz. Promise'ların daha temiz ve anlaşılır kullanımı için async/await nasıl kullanılır? Hata yönetimi nasıl yapılır? Tüm detaylarıyla bu yazıda...",
    };

    console.log("\n✨ Yeni yazı ekleniyor...");
    await createPost(yeniPost, (newPost) => {
      console.log(`📢 Yeni yazı eklendi: ${newPost.title}`);
    });
    console.log("✅ Yeni yazı başarıyla eklendi!");

    console.log("\n📋 Güncel blog yazıları:");
    await getPosts((posts) => {
      console.log("🔍 Güncel toplam yazı sayısı:", posts.length);
    });
  } catch (error) {
    console.error("❌ Hata:", error);
  }
}

manageBlog();
