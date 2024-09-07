const Image = require("@11ty/eleventy-img");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addLiquidShortcode("image", async function(src, alt, classes) {
      let metadata = await Image(src, {
        formats: ["webp"], // Specify the output formats you want
        outputDir: "docs/assets/img", // Output directory for the generated images
        urlPath: "/assets/img/" // URL path for the images in the output folder
      });
  
      let imageAttributes = {
        alt,
        // loading: "lazy",
        decoding: "async",
        class: classes,
      };
  
      // Generate and return the <picture> element HTML
      return Image.generateHTML(metadata, imageAttributes);

      
    });
    eleventyConfig.addPassthroughCopy("src/assets/pdf");

    // prevents GitHub Pages from ignoring files or folders that start with underscores (_)
    eleventyConfig.addPassthroughCopy(".nojekyll");
  
    return {
      dir: {
        input: "src",
        output: "docs"
      }
    }
  };