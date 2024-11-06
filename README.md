# fmaddon-bryntum-scheduler-pro
This add-on integrates **Bryntum's** [**SchedulerPro**](https://bryntum.com/products/schedulerpro) into your **FileMaker** application, allowing you to create beautiful and functional scheduling interfaces. It synchronizes project data such as resources, events, assignments, and dependencies between SchedulerPro and FileMaker, ensuring real-time updates and efficient project management

## **Core Functionality**

1. **Addon Installation**: 
   - To install the addon, simply open the .fmaddon file in FileMaker

2. **JavaScript Module**: 
   - Download or update the JavaScript module, which acts as the bridge between FileMaker and SchedulerPro.
     - Our team will provide the complete javascript module used in our demos
   - The module retrieves data directly from FileMaker, but in development mode, it will use mock data from the environment variable [VITE_FMBRYNTUM_DRIVER_DEV_DATA_PATH](https://www.npmjs.com/package/@pineapplegr/fm-bryntum-driver)

3. **Customizable Props from FileMaker**:
   - The addon allows users to pass properties (props) from FileMaker to the JavaScript module. These props are mapped directly to the **Project object** in Bryntum’s SchedulerPro class. For detailed information on SchedulerPro's Project object, refer to Bryntum's documentation: [SchedulerPro Project](https://bryntum.com/products/schedulerpro/docs/api/widgets/SchedulerPro/view/SchedulerPro).
   - **EventModel Customization**: Users can alter the `EventModel` class dynamically by passing an object named `eventModel` within the props. This customization is limited to **data fields** only, enabling users to redefine the fields section in the base `EventModel` class. For details on Bryntum’s `EventModel`, see [SchedulerPro EventModel](https://bryntum.com/products/schedulerpro/docs/api/SchedulerPro/model/EventModel).

## **Modules and Files**

### Main Javascript Module
   - Initializes SchedulerPro and configures it based on the props received from FileMaker. 
   - **propsHandler.js**: 
     - Retrieves SchedulerPro configuration properties from FileMaker for initialization.

### [fm-bryntum-driver](https://www.npmjs.com/package/@pineapplegr/fm-bryntum-driver)
  - Handles data fetching and updating back to FileMaker.


### Other Technologies Used
-  [**FM-Mock**](https://github.com/jwillinghalpern/fm-mock):
   - Development tool that mocks FileMaker responses, allowing local testing without a live FileMaker connection.

- [**FM-Gofer**](https://github.com/jwillinghalpern/fm-gofer):
  - Utility for executing FileMaker scripts as promises, used for data fetching and updates.

## Examples
   ### Basic Scheduler-Pro project
   <img width="1045" alt="Screenshot 2024-10-29 at 11 22 46" src="https://github.com/user-attachments/assets/9a0dd20b-c39c-4c74-8df8-dd9e789dfad7">
   
   ### Scheduler-Pro, With added Field via PROPS
   <img width="1075" alt="Screenshot 2024-10-29 at 11 22 20" src="https://github.com/user-attachments/assets/95c7c942-be49-4418-be7b-bc9f06571e39">
   - Added PROPS object
      
         JSONSetElement ( "{}" ; 
            // Default values to show resources as a column
            ["columns[0]" ; JSONSetElement ( "{}" ; 
               ["type" ; "resourceInfo" ; 1];
               ["width" ; 150 ; 2]
            ); 3]
            // Show time line at the top
            ;["features.timeRanges.showCurrentTimeLine.name" ; "Now" ; 1];
            // Add field to event model
            ["eventModel" ; JSONSetElement ( "[]" ; 
               [ 0 ; JSONSetElement ( "{}" ; 
                  ["name" ; "testField" ; 1]
               ) ; 3]
            ); 4];
            // Add field to main tab in event edit
            ["features.taskEdit.items.generalTab.items.newGeneralField" ; JSONSetElement ( "{}";	
               ["type" ; "combo" ; 1];
               ["weight" ; 610 ; 2]; // Position in the tab
               ["label" ; "New Field" ; 1];
               ["name" ; "testField" ; 1];
               ["items" ; JSONSetElement ( "[]" ; [0;"test1";1] ; [1;"test2";1] ) ; 4]
            ); 3]
         )
      
      
  ### Scheduler-Pro Maps Integration(from Bryntum examples)
   <img width="1345" alt="Screenshot 2024-10-29 at 11 24 01" src="https://github.com/user-attachments/assets/1cab5a44-a40c-4109-a025-51b911133416">
   
  ### Scheduler-Pro Flight Dispatch(from Bryntum examples)
   <img width="1379" alt="Screenshot 2024-10-29 at 11 24 57" src="https://github.com/user-attachments/assets/a7aff79d-092a-47c7-ab19-acc2427d7e52">

## View more Bryntum examples using our template repository
   - Clone the repo
   - Run `npm install` to fix any issues and add all npm modules required
      - Inside the repository, we have some examples that can be used inside FileMaker. Copying and pasting the data from the examples folder, to the /src folder and running `npm run dev` will run the example.
   - Add the example files from the example folder to the /src folder in the cloned repository
   - Inside the /src/index.html, remove `../../` and replace with `../`
   - Inside the src/app.module.js
      - Remove `../../` from the first import and replace with `../`
      - find the initialisation of the schedulerPro class or extension of said class. eg. `let scheduler = new SchedulerPro({...})`
   - Enclose the above line inside an async function and add the data parser at the start and the data loader and update listener after. eg. 
     ```javascript
      async function initScheduler() {
         // Get FM Props
         const props = getFmProps();
         window._UpdatePhantomIds = updatePhantomIds;
         const projectData = await fetchProjectData(...);
     
         let scheduler = new SchedulerPro({...})

         // Load the project data
         await scheduler.project.loadInlineData(projectData);
      }
     ```
     - If there the dataStoreKeys are different than the default, please make sure to update the map inside the fetchProjectData function e.g.
      ```javascript
      const customDataStore = {
         eventsKey: 'customEvents',
         resourcesKey: 'customResources',
         assignmentsKey: 'customAssignments',
         dependenciesKey: 'customDependencies'
      };
      const projectData = await fetchProjectData(customDataStore);

      // default values for dataStoreKeys, if this is the data structure there is no need to add a custom dataStore
      {
         eventsKey: 'events',
         resourcesKey: 'resources',
         assignmentsKey: 'assignments',
         dependenciesKey: 'dependencies'
      }
      
   - Import the functions we have to use
     ```
      import { fetchProjectData, updateProjectData, updatePhantomIds } from '@pineapplegr/fm-bryntum-driver';
      import getFmProps from '/fm/propsHandler.js';
     ```
   - Add an eventListener to run said function when the DOM is loaded. `document.addEventListener('DOMContentLoaded', initScheduler);`
   - Perform `npm run dev` inside a terminal. Now, the app inside the /src path is running in dev mode. It uses the data from /src/data/data.json. In order to view the example, user needs to open the filemaker file that has the addon and set the debug parameter inside the web viewer to 1. By default the parameter is tied to the $$DEBUG variable.
   - Building the app requires the [schedulerPro npm module](https://bryntum.com/products/schedulerpro/docs/guide/SchedulerPro/npm-repository). In order to build the app, the schedulerpro import instance needs to change to the one installed from npm and the app needs to be standalone.
