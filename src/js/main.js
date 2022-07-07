import './_vendor';
import vars from './_vars';

import './_functions';
import './_components';

vars.freeDeliveryBtn.addEventListener('click', (e) => {
  e.currentTarget.closest('.free-delivery').style.display = 'none';
});
