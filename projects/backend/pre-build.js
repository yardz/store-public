const fs = require('fs');
const path = require('path');

function writeRegistryFile() {
    const npmrc = path.resolve(process.cwd(), '.npmrc');
    const registryString = "//npm.pkg.github.com/:_authToken=${NPMRC_TOKEN}\n@lab77store:registry=https://npm.pkg.github.com";
    fs.writeFileSync(npmrc, registryString);

    const firebaseAdminKey = path.resolve(process.cwd(), 'firebase-admin-key.json');
    const key = process.env.FIREBASE_ADMIN_KEY;
    fs.writeFileSync(firebaseAdminKey, key);
}

writeRegistryFile();