import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x74932f295d03E93E0494C765d91866E7010044e2");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Big bud Headband",
        description: "This NFT will give you access to venturaDAO!",
        image: readFileSync("scripts/assets/membercard.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();