import { PrismaClient } from '../../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding settings...');

  const settings = [
    {
      name: 'Company Name',
      slug: 'company_name',
      value: 'Kalam Dream Labs Pvt Ltd'
    },
    {
      name: 'Mobile',
      slug: 'mobile',
      value: '+91-9876543210'
    },
    {
      name: 'Primary Email',
      slug: 'primary_email',
      value: 'info@kdlkit.dev'
    },
    {
      name: 'Secondary Email',
      slug: 'secondary_email',
      value: 'support@kdlkit.dev'
    },
    {
      name: 'Address',
      slug: 'address',
      value: '123 Startup Street, Vizag, Andhra Pradesh, India'
    },
    {
      name: 'Facebook URL',
      slug: 'facebook_url',
      value: 'https://facebook.com/kalamdreamlabs'
    },
    {
      name: 'LinkedIn URL',
      slug: 'linkedin_url',
      value: 'https://linkedin.com/company/kalamdreamlabs'
    },
    {
      name: 'YouTube URL',
      slug: 'youtube_url',
      value: 'https://youtube.com/@kalamdreamlabs'
    },
    {
      name: 'GitHub URL',
      slug: 'github_url',
      value: 'https://github.com/kalamdreamlabs'
    },
    {
      name: 'Twitter URL',
      slug: 'twitter_url',
      value: 'https://twitter.com/kalamdreamlabs'
    },
    {
      name: 'Copyright Text',
      slug: 'copyright_text',
      value: '© 2025 Kalam Dream Labs. All rights reserved.'
    }
  ];

  for (const setting of settings) {
    await prisma.settings.create({
      data: setting
    });
  }

  console.log('✅ Settings seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
