import DateHelper from '../../../lib/Core/helper/DateHelper.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';

// Custom tooltip template

const flightTemplate = eventRecord => StringHelper.xss`
<div class="flight">
    <div class="taxiing">${eventRecord.preamble?.magnitude || ''}<i class="b-fa b-fa-plane-departure"></i></div>
    <div class="flightTime"><strong>${eventRecord.flightNumber}</strong> ${eventRecord.originAirportCode} <i class="b-fa b-fa-arrow-right"></i> ${eventRecord.destinationAirportCode}</div>
    <div class="taxiing">${eventRecord.postamble?.magnitude || ''}<i class="b-fa b-fa-plane-arrival"></i></div>
</div>`,
    timingRowTemplate = eventRecord => `
<div class="timing">
    <div>${DateHelper.format(eventRecord.loadingStartDate, 'HH:mm')}</div>
    <div>${DateHelper.format(eventRecord.startDate, 'HH:mm')}</div>
    <div class="duration">${eventRecord.fullDuration}</div>
    <div>${DateHelper.format(eventRecord.endDate, 'HH:mm')}</div>
    <div>${DateHelper.format(eventRecord.unloadingStartDate, 'HH:mm')}</div>
</div> 
`;

export const flightTooltip = (flight1, flight2) => flightTemplate(flight1) +
    timingRowTemplate(flight1) +
    // Show info about linked flight when available
    (flight2 ? flightTemplate(flight2) + timingRowTemplate(flight2) : '') +
    (flight1.warning ? `<div class="warning"><i class="b-fa b-fa-warning"></i> ${flight1.warning}</div>` : '');
