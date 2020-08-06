import { attributeList } from './constants.js';

Hooks.on('renderCombatTrackerConfig', (app, html, data) => {
  const optgroup = `<optgroup label="More Combat Tracking">
      ${attributeList.map(
        attribute => `<option value="${attribute}">${attribute}</option>`
      )}
    </optgroup>`;

  $(html).find('select').last().append(optgroup);
});
