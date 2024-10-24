import EventModel from '../../../lib/SchedulerPro/model/EventModel.js';
import DateHelper from '../../../lib/Core/helper/DateHelper.js';

// Custom Flight model, based on EventModel with additional fields and changed defaults
export default class Flight extends EventModel {
    static fields = [
        'airline',
        { name : 'flightNumber', defaultValue : '' },
        'pairedFlightNumber',
        { name : 'originAirportCode', defaultValue : '' },
        { name : 'destinationAirportCode', defaultValue : '' },
        { name : 'resourceId', dataSource : 'aircraftId' },
        { name : 'startDate', dataSource : 'schedule.departureTime' },
        { name : 'endDate', dataSource : 'schedule.arrivalTime' },
        { name : 'preamble', dataSource : 'schedule.loading', defaultValue : '10 minutes' },
        { name : 'postamble', dataSource : 'schedule.unloading', defaultValue : '10 minutes' },
        { name : 'pilots', dataSource : 'staff.pilots' },
        { name : 'flightAttendants', dataSource : 'staff.flightAttendants' },
        { name : 'groundCrew', dataSource : 'staff.groundCrew' },
        { name : 'departureTime', dataSource : 'schedule.departureTime' },
        { name : 'arrivalTime', dataSource : 'schedule.arrivalTime' },
        { name : 'warning' },
        'nonmutable',
        'mutable',
        'changed',
        'maintenance',
        'overlap',
        'delayed',
        'shortened',
        'tailviolation',
        'locked',
        'crewfeasibility',
        'crewlink',
        'uncertainty'
    ];

    static defaults = {
        // In this demo, default duration for sessions will be hours (instead of days)
        durationUnit : 'h'
    };

    get linkedFlight() {
        return this.firstStore.find(flight => flight.flightNumber === this.pairedFlightNumber);
    }

    get loadingTimeMinutes() {
        return parseInt(this.loadingTimeMinutes || 0);
    }

    get unloadingTimeMinutes() {
        return parseInt(this.unloadingTimeMinutes || 0);
    }

    get loadingStartDate() {
        return DateHelper.add(this.startDate, -this.preamble.magnitude, this.preamble.unit);
    }

    get unloadingStartDate() {
        return DateHelper.add(this.endDate, this.postamble.magnitude, this.postamble.unit);
    }

    get iconCls() {
        switch (true) {
            case Boolean(this.warning):
            case this.uncertainty:
                return 'b-fa b-fa-warning';

            case this.crewlink:
                return 'b-fa b-fa-minus';

            case this.crewfeasibility:
                return 'b-fa b-fa-person';

            case this.locked:
                return 'b-fa b-fa-lock';

            case this.maintenance:
                return 'b-fa b-fa-wrench';
        }
    }

    get eventColor() {
        switch (true) {
            case this.nonmutable:
                return 'pink';
            case this.mutable:
                return 'indigo';
            case this.changed:
                return 'purple';
            case this.maintenance:
                return 'lime';
            case this.overlap:
                return 'violet';
            case this.delayed:
                return 'orange';
            case this.shortened:
                return 'teal';
        }
    }
}
