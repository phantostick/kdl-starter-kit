import { PrismaClient } from '../../src/generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding users...');

  // Plain text user data
  const users = [
    {
      name: 'John Doe',
      mobile: '9876543210',
      email: 'john@example.com',
      password: 'password123',
      address: '123 Main St, Anytown'
    },
    {
      name: 'Jane Smith',
      mobile: '9876543211',
      email: 'jane@example.com',
      password: 'securepass456',
      address: '456 Oak Ave, Anytown'
    },
    {
      name: 'Bob Johnson',
      mobile: '9876543212',
      email: 'bob@example.com',
      password: 'mypassword789',
      address: '789 Pine St, Anytown'
    }
  ];

  // Hash passwords and create users
  for (const userData of users) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await prisma.users.create({
      data: {
        ...userData,
        password: hashedPassword
      }
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
