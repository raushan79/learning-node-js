console.log(`Learning and practice File Handling in node js`);
/**
 * Doc : https://nodejs.org/api/fs.html
 */

import { unlinkSync } from 'node:fs/';
const test = () => {
  console.log('test')
try {
  unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  console.log(err)
  // handle the error
}


}



// execute function
test()