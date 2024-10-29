# fmaddon-bryntum-scheduler-pro
This add-on integrates **Bryntum's** [**SchedulerPro**](https://bryntum.com/products/schedulerpro) into your **FileMaker** application, allowing you to create beautiful and functional scheduling interfaces. It synchronizes project data such as resources, events, assignments, and dependencies between SchedulerPro and FileMaker, ensuring real-time updates and efficient project management

## **Core Functionality**

1. **Addon Installation**: 
   - Download the addon from [pineapple.gr](https://pineapple.gr).
   - Add it to the desired FileMaker solution, enabling SchedulerPro functionality.

2. **JavaScript Module**: 
   - Download or update the JavaScript module, which acts as the bridge between FileMaker and SchedulerPro.
     - Our team will provide the complete javascript module used in our demos
   - The module retrieves data directly from FileMaker, but in development mode, it will use mock data from the local `/data/data.json` file for testing purposes.

3. **Customizable Props from FileMaker**:
   - The addon allows users to pass properties (props) from FileMaker to the JavaScript module. These props are mapped directly to the **Project object** in Bryntum’s SchedulerPro class. For detailed information on SchedulerPro's Project object, refer to Bryntum's documentation: [SchedulerPro Project](https://bryntum.com/products/schedulerpro/docs/api/widgets/SchedulerPro/view/SchedulerPro).
   - **EventModel Customization**: Users can alter the `EventModel` class dynamically by passing an object named `eventModel` within the props. This customization is limited to **data fields** only, enabling users to redefine the fields section in the base `EventModel` class. For details on Bryntum’s `EventModel`, see [SchedulerPro EventModel](https://bryntum.com/products/schedulerpro/docs/api/SchedulerPro/model/EventModel).

## **Modules and Files**

### Main Javascript Module
   - Initializes SchedulerPro and configures it based on the props received from FileMaker. 
   - **propsHandler.js**: 
     - Retrieves SchedulerPro configuration properties from FileMaker for initialization.

### fm-bryntum-driver
  - Handles data fetching and updating back to FileMaker.


### Other Technologies Used
-  [**FM-Mock**](https://github.com/jwillinghalpern/fm-mock):
   - Development tool that mocks FileMaker responses, allowing local testing without a live FileMaker connection.

- [**FM-Gofer**](https://github.com/jwillinghalpern/fm-gofer):
  - Utility for executing FileMaker scripts as promises, used for data fetching and updates.

## Examples
 - **Basic Gantt Scheduler**
   <img width="1045" alt="Screenshot 2024-10-29 at 11 22 46" src="https://github.com/user-attachments/assets/9a0dd20b-c39c-4c74-8df8-dd9e789dfad7">
 - **Gantt Scheduler With New Field**
   <img width="1075" alt="Screenshot 2024-10-29 at 11 22 20" src="https://github.com/user-attachments/assets/95c7c942-be49-4418-be7b-bc9f06571e39">
   - Added PROPS object
      ```
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
      ```
 - **Maps Integration(from bryntum examples)**
   <img width="1345" alt="Screenshot 2024-10-29 at 11 24 01" src="https://github.com/user-attachments/assets/1cab5a44-a40c-4109-a025-51b911133416">
 - **Flight Dispatch(from bryntum examples)**
   <img width="1379" alt="Screenshot 2024-10-29 at 11 24 57" src="https://github.com/user-attachments/assets/a7aff79d-092a-47c7-ab19-acc2427d7e52">
