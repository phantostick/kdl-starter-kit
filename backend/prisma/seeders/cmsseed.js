import { PrismaClient } from '../../src/generated/prisma/index.js';
const prisma = new PrismaClient();

const cmsData = [
  {
    slug: 'home',
    type: 'page',
    banner_title: 'Welcome to Our Website',
    banner_tagline: 'Discover amazing content here',
    banner_image: '/images/home-banner.jpg',
    banner_image_alt_text: 'Homepage banner image',
    short_description: 'This is the main landing page of our website',
    content: '<h1>Welcome</h1><p>Welcome to our website. We provide amazing content and services.</p>',
    main_menu: 1,
    sort: 1,
    publish: 1
  },
  {
    slug: 'about',
    type: 'page',
    parent: 'home',
    banner_title: 'About Us',
    banner_tagline: 'Learn more about who we are',
    banner_image: '/images/about-banner.jpg',
    banner_image_alt_text: 'About page banner',
    short_description: 'Our company history and values',
    content: '<h1>About Us</h1><p>We are a dedicated team passionate about creating amazing experiences.</p>',
    main_menu: 1,
    sort: 2,
    publish: 1
  },
  {
    slug: 'services',
    type: 'page',
    parent: 'home',
    banner_title: 'Our Services',
    banner_tagline: 'What we offer',
    banner_image: '/images/services-banner.jpg',
    banner_image_alt_text: 'Services page banner',
    short_description: 'Explore our range of services',
    content: '<h1>Our Services</h1><p>We provide a wide range of professional services.</p>',
    main_menu: 1,
    sort: 3,
    publish: 1
  },
  {
    slug: 'contact',
    type: 'page',
    parent: 'home',
    banner_title: 'Contact Us',
    banner_tagline: 'Get in touch with us',
    banner_image: '/images/contact-banner.jpg',
    banner_image_alt_text: 'Contact page banner',
    short_description: 'Contact information and support',
    content: '<h1>Contact Us</h1><p>Get in touch with our team.</p>',
    main_menu: 1,
    sort: 4,
    publish: 1
  },
  {
    slug: 'blog',
    type: 'page',
    parent: 'home',
    banner_title: 'Blog',
    banner_tagline: 'Latest updates and insights',
    banner_image: '/images/blog-banner.jpg',
    banner_image_alt_text: 'Blog page banner',
    short_description: 'Read our latest articles',
    content: '<h1>Blog</h1><p>Stay updated with our latest news and insights.</p>',
    main_menu: 1,
    sort: 5,
    publish: 1
  }
];

async function seed() {
  console.log('Seeding CMS content...');
  
  for (const data of cmsData) {
    try {
      await prisma.cms.create({
        data: {
          ...data,
          created_at: new Date(),
          updated_at: new Date()
        }
      });
      console.log(`Created CMS content with slug: ${data.slug}`);
    } catch (error) {
      console.error(`Error creating CMS content with slug: ${data.slug}`, error);
    }
  }

  console.log('CMS content seeding completed!');
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
