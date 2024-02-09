import schema from "./tools/ecrr_1_1_uischema"
import fs from 'node:fs';
fs.writeFile('../assets/tools/ecrr_1_1_uischema.json', schema, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
    }
});
