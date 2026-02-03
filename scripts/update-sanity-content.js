/**
 * Script to update Sanity CMS with new bold, colorful content
 * Run with: node scripts/update-sanity-content.js
 * 
 * Make sure you have SANITY_PROJECT_ID and SANITY_DATASET in your .env.local
 */

const { createClient } = require('@sanity/client');

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6ch09wec',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // You'll need a write token
});

// New content to update
const sectionContentUpdates = [
  {
    sectionId: 'services',
    preTitle: 'Our Services',
    title: 'Complete Printing & Branding Solutions',
    description: "Bold colors. Brilliant designs. Unforgettable impressions. We're not just printers—we're your creative partners in making brands come alive! With vibrant inks, cutting-edge technology, and a passion for perfection, we turn every project into a masterpiece. From dazzling screen prints that pop off the page to stunning digital graphics that wow your audience, we bring energy, excitement, and excellence to every job. Let's make your brand impossible to ignore!",
  },
  {
    sectionId: 'target-markets',
    preTitle: 'Who We Serve',
    title: 'Serving Diverse Markets with Inclusivity',
    description: "Every brand deserves to shine in full color—and we make it happen! From Fortune 500 giants to local startups, from school events to community celebrations, we bring the same vibrant energy and top-tier quality to every project. No matter your size, budget, or vision, you're not just a client—you're a creative collaborator. Together, we'll design, print, and deliver products that burst with personality and make your brand unforgettable. Your story, your colors, your way—that's the Kan Printers promise!",
  },
  {
    sectionId: 'values',
    preTitle: 'Our Values',
    title: 'Brand Identity & Core Values',
    description: "For over two decades, we've painted Cape Town with vibrant colors, bold designs, and unforgettable brand experiences! Our reputation isn't just built on trust—it's built on passion, precision, and the pure joy of bringing your wildest creative visions to life. We're not just printers; we're color enthusiasts, design fanatics, and your partners in making every project a masterpiece. From corporate powerhouses to community celebrations, we bring the same electric energy and unwavering commitment to excellence. Quality that dazzles, service that wows, and results that make you proud—that's the Kan Printers way!",
  },
  {
    sectionId: 'future-vision',
    preTitle: 'Future Vision',
    title: "Where We're Headed",
    description: "The future is bursting with color—and Kan Printers is painting it! We're revolutionizing print with cutting-edge tech, eco-friendly inks that pop, and game-changing innovations that turn your wildest visions into reality. Imagine ordering online with a click, collaborating in our vibrant creative studio, and walking through a showroom where every wall screams possibility! We're not just keeping up—we're setting the pace. Bigger, bolder, brighter—that's our promise. The canvas is ready, and we're bringing the paint!",
  },
];

async function updateSectionContent() {
  console.log('🔄 Updating Section Content...\n');

  for (const content of sectionContentUpdates) {
    try {
      // Check if section exists
      const existing = await client.fetch(
        `*[_type == "sectionContent" && sectionId == $sectionId][0]`,
        { sectionId: content.sectionId }
      );

      if (existing) {
        // Update existing
        await client
          .patch(existing._id)
          .set({
            preTitle: content.preTitle,
            title: content.title,
            description: content.description,
          })
          .commit();
        console.log(`✅ Updated: ${content.sectionId}`);
      } else {
        // Create new
        await client.create({
          _type: 'sectionContent',
          ...content,
        });
        console.log(`✅ Created: ${content.sectionId}`);
      }
    } catch (error) {
      console.error(`❌ Error updating ${content.sectionId}:`, error.message);
    }
  }
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN not found in environment variables');
    console.log('\n📝 To get a token:');
    console.log('1. Go to https://sanity.io/manage');
    console.log('2. Select your project');
    console.log('3. Go to API → Tokens');
    console.log('4. Create a new token with Editor permissions');
    console.log('5. Add it to .env.local: SANITY_API_TOKEN=your_token_here\n');
    process.exit(1);
  }

  console.log('🚀 Starting Sanity content update...\n');
  
  await updateSectionContent();
  
  console.log('\n✨ Done! Check your Sanity Studio to verify the updates.');
  console.log('💡 Remember to publish the documents in Sanity Studio!');
}

main().catch(console.error);
