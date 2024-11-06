import { Toast, SchedulerPro } from '../build/schedulerpro.module.js';
import { updateProjectData, fetchProjectData } from '@pineapplegr/fm-bryntum-driver';
import getFmProps from '/fm/propsHandler.js';

async function initializeScheduler() {
    const schedulerPro = new SchedulerPro({
        project : {
            autoLoad  : true,
            // transport : {
            //     load : {
            //         url : './data/data.json'
            //     }
            // }
        },
    
        resourceImagePath : '../_shared/images/users/',
        appendTo          : 'container',
        eventStyle        : 'rounded',
        startDate         : '2020-03-23',
        endDate           : '2020-03-26',
        // Custom view preset, with more compact display of hours
        viewPreset        : {
            base      : 'hourAndDay',
            tickWidth : 35,
            headers   : [
                {
                    unit       : 'day',
                    dateFormat : 'ddd DD/MM' //Mon 01/10
                },
                {
                    unit       : 'hour',
                    dateFormat : 'H'
                }
            ]
        },
    
        features : {
            timeRanges : {
                narrowThreshold : 10,
                enableResizing  : true
            },
            resourceNonWorkingTime : true,
            cellEdit               : true,
            filter                 : true,
            regionResize           : true,
            dependencies           : true,
            dependencyEdit         : true,
            percentBar             : true,
            group                  : 'type',
            sort                   : 'name',
            eventTooltip           : {
                header : {
                    title      : 'Information',
                    titleAlign : 'start'
                },
                tools : [
                    {
                        cls     : 'b-fa b-fa-trash',
                        handler : function() {
                            this.eventRecord.remove();
                            this.hide();
                        }
                    },
                    {
                        cls     : 'b-fa b-fa-edit',
                        handler : function() {
                            schedulerPro.editEvent(this.eventRecord);
                        }
                    }
                ]
            }
        },
    
        columns : [
            {
                type           : 'resourceInfo',
                text           : 'Name',
                showEventCount : true,
                width          : 220,
                validNames     : null
            },
            {
                type  : 'resourceCalendar',
                text  : 'Shift',
                width : 120
            },
            {
                type    : 'action',
                text    : 'Actions',
                width   : 80,
                align   : 'center',
                actions : [{
                    cls     : 'b-fa b-fa-fw b-fa-plus',
                    tooltip : 'Add task',
                    onClick : async({ record }) => {
                        const [eventRecord] = schedulerPro.eventStore.add({
                            name         : 'New task',
                            startDate    : schedulerPro.startDate,
                            duration     : 4,
                            durationUnit : 'h'
                        });
    
                        eventRecord.assign(record);
    
                        await schedulerPro.project.commitAsync();
    
                        schedulerPro.editEvent(eventRecord);
                    }
                }, {
                    cls     : 'b-fa b-fa-fw b-fa-cog',
                    tooltip : 'Settings',
                    onClick : ({ record }) => Toast.show('TODO: Show a cool settings dialog')
                }, {
                    cls     : 'b-fa b-fa-fw b-fa-copy',
                    tooltip : 'Duplicate resource',
                    onClick : ({ record }) => {
                        schedulerPro.resourceStore.add(record.copy({
                            name : record.name + ' (copy)'
                        }));
                    }
                }]
            }
        ]
    });

    // Get FM Props
    const props = getFmProps();
    const projectData = await fetchProjectData();

    // Load the project data
    await schedulerPro.project.loadInlineData(projectData);
}

document.addEventListener('DOMContentLoaded', initializeScheduler);
