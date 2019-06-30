const sizeOf = require ('image-size');

module.exports=(origDir,fileName) => {
    const dimention = sizeOf(origDir+fileName);
    return {
        ratio: dimention.width / dimention.height
    }
}