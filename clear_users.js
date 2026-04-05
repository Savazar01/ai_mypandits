
const { PrismaClient } = require("./generated/prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const pg = require("pg");

// Load .env.local manually for script
require("dotenv").config({ path: ".env.local" });

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL not found in .env.local");
    return;
  }

  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const emails = ["avasat01@gmail.com", "avasat02@gmail.com"];
  console.log(`Clearing sanctuary data for: ${emails.join(", ")}`);

  try {
    // Delete relational records first
    await prisma.account.deleteMany({
      where: { user: { email: { in: emails } } },
    });
    await prisma.session.deleteMany({
      where: { user: { email: { in: emails } } },
    });
    const result = await prisma.user.deleteMany({
      where: { email: { in: emails } },
    });

    console.log(`Success: Cleared ${result.count} test users and associated sessions.`);
  } catch (error) {
    console.error("Cleanup failed:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
