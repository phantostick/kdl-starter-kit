import { PrismaClient } from '../../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding SEO data...');

  // Sample SEO entries
  const seoData = [
    {
      cms_id: 1,
      seo_title: 'About Us - Company Info',
      seo_keywords: 'company, about, information, background',
      seo_description: 'Learn more about our company, our mission, and our values.'
    },
    {
      cms_id: 2,
      seo_title: 'Contact Us - Get in Touch',
      seo_keywords: 'contact, email, phone, address',
      seo_description: 'Reach out to us via email, phone, or visit our office.'
    },
    {
      cms_id: 3,
      seo_title: 'Services - What We Offer',
      seo_keywords: 'services, solutions, products, features',
      seo_description: 'Explore the wide range of services and solutions we offer.'
    }
  ];

  // Insert SEO entries
  for (const seo of seoData) {
    await prisma.seo.create({
      data: seo
    });
  }

  console.log('SEO data seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
