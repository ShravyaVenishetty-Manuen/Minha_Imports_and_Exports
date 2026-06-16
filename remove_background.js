import { Jimp } from 'jimp';
import path from 'path';

async function removeBackgroundGlobally(imagePath, outputPath, threshold) {
  try {
    console.log(`Loading image: ${imagePath}`);
    const image = await Jimp.read(imagePath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    const realThreshold = threshold || 238; 
    let transparentCount = 0;
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const color = image.getPixelColor(x, y);
        const r = (color >> 24) & 0xff;
        const g = (color >> 16) & 0xff;
        const b = (color >> 8) & 0xff;
        const a = color & 0xff;
        
        if (a < 10 || (r > realThreshold && g > realThreshold && b > realThreshold)) {
          image.setPixelColor(0x00000000, x, y);
          transparentCount++;
        }
      }
    }
    
    console.log(`Set ${transparentCount} pixels to transparent globally with threshold ${realThreshold}.`);
    await image.write(outputPath);
    console.log(`Successfully saved transparent image to: ${outputPath}`);
  } catch (error) {
    console.error("Error in removeBackgroundGlobally:", error);
  }
}

async function main() {
  const assetsDir = "./src/assets";
  
  const branchSrc = "C:/Users/DELL/.gemini/antigravity-ide/brain/21cb19d8-7c78-4207-ad23-a10ba66a611d/plant_sketch_fg_1781346753920.png";
  const podSrc = "C:/Users/DELL/.gemini/antigravity-ide/brain/21cb19d8-7c78-4207-ad23-a10ba66a611d/pod_sketch_fg_1781346796986.png";
  const twineSrc = "C:/Users/DELL/.gemini/antigravity-ide/brain/21cb19d8-7c78-4207-ad23-a10ba66a611d/twines_sketch_bg_1781346838130.png";
  
  const branchDest = path.join(assetsDir, "chilli-branch-sketch.png");
  const podDest = path.join(assetsDir, "chilli-pod-sketch.png");
  const twineDest = path.join(assetsDir, "chilli-twine-sketch-bg.png");
  
  // We use a threshold of 240/238 to remove the pure/near-white backgrounds
  await removeBackgroundGlobally(branchSrc, branchDest, 238);
  await removeBackgroundGlobally(podSrc, podDest, 238);
  await removeBackgroundGlobally(twineSrc, twineDest, 238);
}

main();
